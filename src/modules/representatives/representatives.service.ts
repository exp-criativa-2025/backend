import { Injectable } from '@nestjs/common';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { Representative } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
