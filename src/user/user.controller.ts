import { Controller, Post, Get, Body } from  "@nestjs/common";
import { UserService } from  "./user.service";
import { User } from "./user.entity";

@Controller("user")
export  class  UserController {
    constructor(private  readonly  userService:  UserService) {}

    // TODO - here we need passport and guards to make sure only auth users can list data
    @Post("data")
    async login(@Body() user: User): Promise<any> {
        return this.userService.findByEmail(user.email);
    }

    @Get("list")
    async listAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}
