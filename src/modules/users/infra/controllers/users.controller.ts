import { CreateUserDto } from "@users/application/dto/user.dto";
import { UserService } from "@users/application/services/user.service";
import {
  Body,
  Controller,
  Get,
  Post,
} from "@nestjs/common";
import { CurrentUser } from "@shared/infra/decorators/current-user.decorator";
import type { AuthenticatedUser } from "@shared/infra/decorators/current-user.decorator";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async a() {
    return "ok";
  }

  @Get("me")
  getProfile(@CurrentUser() user: AuthenticatedUser) {
    return user;
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }
}