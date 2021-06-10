import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity';
import * as crypto from 'crypto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                email: email,
            }
        });
    }

    async findById(id: number): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                id: id,
            }
        });
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find({order: {id: "ASC"}});
    }

    async create(user: User): Promise<User> {
        // do not save the password as plain text
        user.password = this.hashPassword(user.password);
        return await this.userRepository.save(user);
    }

    /**
     * Encrypt the password for security
     * @param password
     */
    hashPassword(password) {
        return crypto.createHmac('sha256', password).digest('hex');
    }
}
