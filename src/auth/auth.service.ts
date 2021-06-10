import { Injectable } from '@nestjs/common';
import { JwtService } from  "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { User } from "../user/user.entity";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    /**
     * Validates the user by checking the email in the database
     * @param userData
     * @private
     */
    private async validate(userData: User): Promise<User> {
        // later split finding the user into a method and checking the password into another.
        // it makes testing and throwing exceptions easier
        const user = await this.userService.findByEmail(userData.email);
        if (!user) {
            return null;
        }
        if (user.password !== this.userService.hashPassword(userData.password)) {
            return null;
        }

        return user;
    }

    /**
     * Performs the login operation.
     *      - validates user
     *      - creates a JWT token with the user name and id as payload
     * @param user
     */
    public async login(user: User): Promise< any | { status: number }>{
        return this.validate(user).then((userData)=>{
            if(!userData){
                // we can also throw a bad credentials generic exception
                // so that they don't know if it's email or password
                return { status: 404 };
            }
            let payload = `${userData.name}${userData.id}`;
            const accessToken = this.jwtService.sign(payload);

            return {
                expires_in: 3600,
                access_token: accessToken,
                user_id: payload,
                status: 200
            };

        });
    }

    /**
     * Creates user without any complicated checks.
     * @param user
     */
    public async register(user: User): Promise<any>{
        // TODO - check if the user exists before creating.
        // refactor the validate use method into two methods for user and pass.
        // reuse the new method from there to check by email
        return this.userService.create(user)
    }
}
