import { Module } from '@nestjs/common';
import { TypeOrmModule} from "@nestjs/typeorm/dist/typeorm.module";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { JwtModule } from '@nestjs/jwt';
import {UserController} from "./user.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secretOrPrivateKey: 'secret12356789'
        })
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}
