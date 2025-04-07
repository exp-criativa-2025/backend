import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {

  constructor(private prismaService : PrismaService){}

  async createUser(createUserDto: CreateUserDto){
    try{

      
      const newUser = await this.prismaService.user.create(
        {
          data: {
            username: createUserDto.username,
            userEmail: createUserDto.userEmail,
            userPassword: createUserDto.userPassword,
            userCpf:createUserDto.userCpf,
            userRoleAtributed: createUserDto.userRoleAtributed,
            userBirthdayDate:createUserDto.userBirthdayDate
          },select:{
            id: true,
            username:true,
            userEmail: true,
          }
        })

      return newUser

    } catch(err){
      console.log(err);
      throw new HttpException("Failed to create the user",HttpStatus.BAD_REQUEST)
    }
  }

  async findAll(){
    const allUsers = await this.prismaService.user.findMany();

    return allUsers;
  }

}
