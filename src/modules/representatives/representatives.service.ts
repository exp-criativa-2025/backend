import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { Representative } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateRepresentativeDto } from './dto/update-representative.dto';

@Injectable()
export class RepresentativesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRepresentativeDto): Promise<Representative> {
    const representativeData = {
      ...data,
      data_fundacao: new Date(data.data_fundacao),
      numero_membros: Number(data.numero_membros),
      site: data.site ?? '',
      instagram: data.instagram ?? '',
      facebook: data.facebook ?? '',
    };
    return this.prisma.representative.create({
      data: representativeData,
    });
  }

  async findAll(): Promise<Representative[]> {
    return this.prisma.representative.findMany();
  }

  async getRepresentativeById(id: number){
    try {
      const representative = await this.prisma.representative.findFirst({
        where:{id},
        select:{
          id: true,
          sigla: true,
          tipo: true,
          cnpj: true,
          nome_fantasia: true,
          razao_social: true,
          representant_id: true,
          universidade: true,
          campus: true,
          numero_membros: true,
          data_fundacao: true,
          telefone: true,
          email: true,
          site: true,
          status: true,
          cep: true,
          facebook: true,
          instagram: true,
        }
      })

        if (!representative) {
          throw new HttpException('Representante nao encontrado', HttpStatus.NOT_FOUND)
        }

      return representative
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Erro interno do servidor ao buscar representante.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateRepresentativeById(id: number, updateRepresentativeDto: UpdateRepresentativeDto) {
    try {
      const representativeForUpdate = await this.prisma.representative.findUnique({
        where: { id: id },
      });

      if (!representativeForUpdate) {
        throw new HttpException('Representante não encontrado!', HttpStatus.NOT_FOUND);
      }

      const newRepresentativeUpdated = await this.prisma.representative.update({
        where: {
          id: representativeForUpdate.id,
        },
        data: {
          ...updateRepresentativeDto,
        },
        select: {
          id: true,
          tipo: true,
          sigla: true,
          nome_fantasia: true,
          email: true,
        },
      });
      return newRepresentativeUpdated;
    } catch (error) {
      console.error(error);
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Falha ao atualizar o representante', HttpStatus.BAD_REQUEST);
    }
  }

   async deleteRepresentativeById(id: number) {
    try {
      const representativeForDelete = await this.prisma.representative.findUnique({
        where: { id: id },
      });

      if (!representativeForDelete) {
        throw new HttpException('Representante não encontrado!', HttpStatus.NOT_FOUND);
      }

      await this.prisma.representative.delete({
        where: {
          id: id,
        },
      });

      return { message: 'Representante deletado com sucesso!' };

    } catch (error) {
      console.error(error); 
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Falha ao deletar o representante!', HttpStatus.BAD_REQUEST);
    }
  }
}
