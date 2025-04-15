import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { GetUserDto } from './dto/get-user-dto';
import { User } from './entities/user-entity';

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

  async findAllUsers(): Promise<GetUserDto[]>{
    try {
      const allUsers: User[] = await this.prismaService.user.findMany();
      return allUsers;
    } catch (error) {
      console.log(error)
      throw new HttpException('Fail to load all the user!', HttpStatus.BAD_REQUEST)
    }
    
  }

  async loginUser(email: string){
    try {
      const userForFind= await this.prismaService.user.findFirst({
        where:{userEmail: email},
        select:{
          userEmail:true,
          userPassword:true
        }
      })
      if (!userForFind) {
        throw new HttpException("Usuário não encontrado!",HttpStatus.NOT_FOUND)
      }

      return userForFind

    } catch (err) {
      console.log(err)
      throw new HttpException("Error while finding user",HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async getUserById(id:number){
    try {
      const userForFind= await this.prismaService.user.findFirst({
        where:{id},
        select:{
          id:true,
          userEmail:true,
          username:true,
          createdAt:true,
          userRoleAtributed:true,
          userPassword:true
        }
      })

      if (!userForFind) {
        throw new HttpException("Usuário não encontrado!",HttpStatus.NOT_FOUND)
      }

      return userForFind

    } catch (err) {
      console.log(err)
      throw new HttpException("Error while finding user",HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async deleteUserById2(id:number){
    try {
      console.log("entrei aqui")
      const userForDelete = await this.prismaService.user.findUnique(
        {
          where: {id:id}
        }
      )
      console.log("entrei aqui 2")
      if (userForDelete?.username){
        await this.prismaService.user.delete(
          {
          where:{
            id:userForDelete.id
          }
          }
        )
        return{
          message: "User deleted with success"
        }
      }
    } catch (error) {
      console.log(error)
      throw new HttpException('Fail to delete the user!', HttpStatus.BAD_REQUEST)
    }
  }

  async updateUserById(id:number, updateUserDto: UpdateUserDto){
    try{
      const userForUpdate = await this.prismaService.user.findUnique({
        where:{id: id}
      })

      if (!userForUpdate) {
        throw new HttpException("Usuário não encontrado!",HttpStatus.NOT_FOUND)
      }

      const dataUser: { username?: string, userPassword?: string } = { username: updateUserDto.username ?? userForUpdate.username }

      const newUserUpdated = await this.prismaService.user.update({
        where:{
          id: userForUpdate.id
        },
        data: {
          username: dataUser.username,
          userEmail: updateUserDto.userEmail,
          userRoleAtributed:updateUserDto.userRoleAtributed,
          userPassword: dataUser?.userPassword ?? userForUpdate.userPassword
        },
        select:{
          id: true,
          username: true,
          userEmail: true
        }
      })

      return newUserUpdated

    }catch(error){
      console.error(error)
      throw new HttpException("Fail to update the user", HttpStatus.BAD_REQUEST)
    }
  }

  async deleteUserById(id: number){
    try {
      const userForDelete = await this.prismaService.user.findUnique(
        {
          where: {id:id}
        }
      )
      if (userForDelete?.username){
        await this.prismaService.user.delete(
          {
          where:{
            id:userForDelete.id
          }
          }
        )
        return{
          message: "User deleted with success"
        }
      }
    } catch (error) {
      console.log(error)
      throw new HttpException('Fail to delete the user!', HttpStatus.BAD_REQUEST)
    }
  }

  async findByEmail(email:string){
    try {
      const user = await this.prismaService.user.findUnique({
        where: { userEmail: email },
        select: {
          id: true,
          username: true,
          userEmail: true,
          userPassword: true,
          createdAt: true,
          userRoleAtributed: true,
        }
      });

      if (!user) {
        throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
      }

      return user;
    } catch (error) {
      console.error(`Erro ao buscar usuário por email ${email}:`, error.message);
    }
  }
}
