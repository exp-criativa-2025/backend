import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor (private userService: UsersService){}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto){
    return this.userService.createUser(createUserDto)
  }

  //get all
  @Get()
  async findAllUser(){
    return 'Get Todos os usuários'
  }

  //get(id)
  @Get(':id')
  async getUserById(){
    return 'get user by id'
  }
}
