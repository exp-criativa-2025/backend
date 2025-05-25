import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { RepresentativesService } from './representatives.service';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { Response } from 'express';

@Controller('representatives')
export class RepresentativesController {
  constructor(
    private readonly representativesService: RepresentativesService,
  ) {}

  @Post()
  async create(
    @Body() createRepresentativeDto: CreateRepresentativeDto,
    @Res() res: Response,
  ) {
    try {
      const newRepresentative = await this.representativesService.create(
        createRepresentativeDto,
      );
      return res.status(HttpStatus.CREATED).json({
        message: 'Representante criado com sucesso!',
        data: newRepresentative,
      });
    } catch (error: unknown) {
      console.error('Erro ao criar representante:', error);
      const errorMessage =
        typeof error === 'object' && error !== null && 'message' in error
          ? (error as { message: string }).message
          : 'Unknown error';
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Erro ao criar representante',
        error: errorMessage,
      });
    }
  }
}
