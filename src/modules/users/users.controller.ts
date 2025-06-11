/* eslint-disable no-useless-catch */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { SuccessInterceptor } from 'src/utils/interceptors/sucess-interceptor-interface';
import { NotFoundExceptionFilter } from 'src/filters/token-filter-not-found';
import { UpdateUserDto } from './dto/update-user-dto';
import { ResponseUserDto } from './dto/response-user-dto';
import { JwtAuthGuard } from '../auth/guard/auth-valid-token-guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async findAllUser(): Promise<ResponseUserDto[]> {
    try {
      const allUsers = await this.userService.findAllUsers();
      return allUsers.map((user) => ({
        id: user.id,
        username: user.username,
        userEmail: user.userEmail,
        userPassword: user.userPassword,
        userRoleAtributed: user.userRoleAtributed,
        createdAt: user.createdAt,
      }));
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)
  async getUserById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponseUserDto> {
    try {
      if (id <= 0) {
        throw new HttpException(
          'ID must be a positive integer',
          HttpStatus.BAD_REQUEST,
        );
      }
      const uniqueUser = await this.userService.getUserById(id);
      return uniqueUser;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)
  @Patch(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const userForUpdate = await this.userService.updateUserById(
        id,
        updateUserDto,
      );
      return userForUpdate;
    } catch (error) {
      console.log(error);
    }
  }

  @Delete(':id')
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.userService.deleteUserById(id);
    } catch (error) {
      console.log(error);
    }
  }
}
