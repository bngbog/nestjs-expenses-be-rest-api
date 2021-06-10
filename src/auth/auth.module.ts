import { Module } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from "./auth.controller";
import { UserModule } from "../user/user.module";

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            secretOrPrivateKey: 'secret12356789'
        })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
