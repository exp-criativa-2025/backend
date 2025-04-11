import { User } from 'src/modules/users/entities/user-entity';
import { Injectable, UnauthorizedException, HttpException, HttpStatus  } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { SignInDto } from './DTO/sign-in-dto';
import { GetUserDto } from '../users/dto/get-user-dto';
import { LoginUserDto } from '../users/dto/login-user-dto';

@Injectable()
export class AuthService {
  constructor(
    private  userService: UsersService,
    private jwtService: JwtService
  ){}

  async registerUser(userDto:SignInDto){
    if(!userDto.userEmail){
      throw new HttpException("Email should be required!", HttpStatus.BAD_REQUEST)
    }
    const hashedPassword = await bcrypt.hash(userDto.userPassword, 10);
    const user = await this.userService.createUser(
      { 
        ...userDto, 
        userPassword: hashedPassword 
      });

    // Generate token 
    const payload = { sub: user.id, username: user.username, email: user.userEmail };
    const token = await this.jwtService.signAsync(payload);

    return { user, token };
  }

  async validateUserForLogin(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    
    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(pass, user.userPassword);
    return isPasswordValid ? user : null;
  }

  async loginUser(userDto: LoginUserDto) {
    try {
    const userForLogin = await this.validateUserForLogin(userDto.userEmail, userDto.userPassword)

    if (!userForLogin) {
      throw new UnauthorizedException('Invalid Credewntials');
    }
  
    const payload = { sub: userForLogin.id, username: userForLogin.username, email: userForLogin.userEmail }; 

    return { 
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: userForLogin.id,
        username: userForLogin.username,
        email: userForLogin.userEmail
      }
    };

    } catch (error) {
      console.error
      throw new HttpException(
        'Falha no processo de login', 
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async validateUser(payload: any): Promise<any> {
    // Valida o usuário com base no ID do payload JWT
    return this.userService.getUserById(payload.sub);
  }
}
