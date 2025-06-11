import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { SuccessInterceptor } from 'src/utils/interceptors/sucess-interceptor-interface';
import { NotFoundExceptionFilter } from 'src/filters/token-filter-not-found';
import { GetUserDto } from './dto/get-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Controller('users')
export class UsersController {
  constructor (private userService: UsersService){}

  @Get()
  async findAllUser(): Promise<GetUserDto[]>{
    try {
      const allUsers = await this.userService.findAllUsers();
      return allUsers.map( user =>({
        id: user.id,
        username: user.username,
        userEmail: user.userEmail,
        userPassword:user.userPassword,
        userRoleAtributed:user.userRoleAtributed,
        createdAt: user.createdAt,
      }))
    } catch (error) {
      throw error
    }
  }


  @Get(':id')
  //@UseInterceptors(LoggersInterceptor) - a implementar
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)
  async getUserById(
    @Param('id', ParseIntPipe)id:number
  ){
    try {
      if (id <= 0) {
        throw new HttpException('ID must be a positive integer', HttpStatus.BAD_REQUEST);
      }
      const uniqueUser = await this.userService.getUserById(id)
      return uniqueUser
    } catch (error) {
      throw error
    }
  }

  @Patch()
  async updateUserById(
    @Param('id', ParseIntPipe)id: number,
    @Body() updateUserDto: UpdateUserDto
  ){
    try {
      const userUpdated = await this.userService.updateUserById(id,updateUserDto)
      return userUpdated
    } catch (error) {
      throw error
    }
  }

  @Delete('id')
  @UseInterceptors(SuccessInterceptor)
  async deleteUserById(
    @Param('id', ParseIntPipe)id:number
  ){
    try {
      return this.userService.deleteUserById(id)
    } catch (error) {
      throw error
    }
  }
}
