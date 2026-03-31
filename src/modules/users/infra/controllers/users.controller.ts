import { Controller, Get, Post, Body } from "@nestjs/common";
import { CurrentUser } from "@shared/infra/decorators/current-user.decorator";
import type { AuthenticatedUser } from "@shared/infra/decorators/current-user.decorator";

@Controller("users")
export class UsersController {

  @Get("me")
  getProfile(@CurrentUser() user: AuthenticatedUser) {
    return user;
  }

  @Post()
  create(@Body() body: any) {
    // temporário só pra teste
    return {
      message: "Usuário recebido",
      data: body
    };
  }
}