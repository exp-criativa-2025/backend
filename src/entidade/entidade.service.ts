import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEntidadeDto } from './dto/create-entidade.dto';
import { UpdateEntidadeDto } from './dto/update-entidade.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetEntidadeDto } from './dto/get-entidade.dto';

@Injectable()
export class EntidadeService {

  constructor (private prismaService: PrismaService){}

  async createEntity(createEntidadeDto: CreateEntidadeDto){
    try {
      const newEntidade = await this.prismaService.entidade.create(
        {
          data: {
            nameEntity: createEntidadeDto.nameEntity,
            cnpjEntity: createEntidadeDto.cnpjEntity,
            legalRepresentative: createEntidadeDto.legalRepresentative,
            typeEntity: createEntidadeDto.typeEntity,
            description: createEntidadeDto.description,
          }, select:{
            id: true,
            nameEntity: true,
            legalRepresentative: true
          }
        }
      )

      return newEntidade
    } catch (error) {
      console.log(error)
      throw new HttpException("Falha ao criar a entidade",HttpStatus.BAD_REQUEST)
    }
  }

  async findAllEntity(): Promise<GetEntidadeDto[]> {
    try {
      const allEntidades = await this.prismaService.entidade.findMany();
      return allEntidades.map(entidade => ({
        id: entidade.id,
        nameEntity: entidade.nameEntity,
        cnpjEntity: entidade.cnpjEntity,
        legalRepresentative: entidade.legalRepresentative,
        typeEntity: entidade.typeEntity
      }))
    } catch (error) {
      console.log(error)
      throw new HttpException('Fail to load all the user!', HttpStatus.BAD_REQUEST)
    }
  }

  async getEntityById(id: number) {
    try {
      const entityForFind = await this.prismaService.entidade.findFirst({
        where:{id},
        select: {
          id: true,
          nameEntity: true,
          legalRepresentative: true,
          typeEntity: true
        }
      })

      if (!entityForFind) {
        throw new HttpException("Entidade não encontrada!",HttpStatus.NOT_FOUND)
      }

      return entityForFind
    } catch (error) {
      console.log(error)
      throw new HttpException("Falha interna ao encontrar Entidade",HttpStatus.BAD_REQUEST)
    }
  }

  async updateEntityById(id: number, updateEntidadeDto: UpdateEntidadeDto) {
    try {
      const existingEntity = await this.prismaService.entidade.findUnique({
        where: { id: id }
      });
  
      if (!existingEntity) {
        throw new HttpException("Entidade não encontrada!", HttpStatus.NOT_FOUND);
      }
  
      const updatedEntity = await this.prismaService.entidade.update({
        where: { id: id },
        data: {
          nameEntity: updateEntidadeDto.nameEntity ?? existingEntity.nameEntity,
          cnpjEntity: updateEntidadeDto.cnpjEntity ?? existingEntity.cnpjEntity,
          legalRepresentative: updateEntidadeDto.legalRepresentative ?? existingEntity.legalRepresentative,
          typeEntity: updateEntidadeDto.typeEntity ?? existingEntity.typeEntity,
          description: updateEntidadeDto.description ?? existingEntity.description
        },
        select: {
          id: true,
          nameEntity: true,
          cnpjEntity: true,
          legalRepresentative: true,
          typeEntity: true,
          description: true
        }
      });
  
      return updatedEntity;
  
    } catch (error) {
      console.error('Error updating entity:', error);
      
      throw new HttpException(
        'Falha ao atualizar entidade', 
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async deleteEntityById(id: number) {
    try {
      const entidadeForDelete = await this.prismaService.entidade.findUnique(
        {
          where: {id:id}
        }
      )

      if (entidadeForDelete?.nameEntity){
        await this.prismaService.entidade.delete({
          where: {
            id: entidadeForDelete.id
          }
        })
      }
    } catch (error) {
      console.log(error)
      throw new HttpException('Falha ao deletar a Entidade!', HttpStatus.BAD_REQUEST)
    }
  }
}