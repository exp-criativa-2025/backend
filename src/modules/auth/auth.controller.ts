import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user-dto';
import { GetUserDto } from '../users/dto/get-user-dto';
import { LoginUserDto } from '../users/dto/login-user-dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('register')
    async registerUser(
      @Body() createUserDto: CreateUserDto
    ){
      return this.authService.registerUser(createUserDto)
  }

  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  async loginUser(
    @Body(ValidationPipe) loginUserDto: LoginUserDto
  ){
    return this.authService.loginUser(loginUserDto);
  }
}
