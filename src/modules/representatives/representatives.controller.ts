import { Controller, Post, Body, Res, HttpStatus, Get, UseInterceptors, UseFilters, ParseIntPipe, Param, HttpException, Patch, UsePipes, ValidationPipe, Delete } from '@nestjs/common';
import { RepresentativesService } from './representatives.service';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { Response } from 'express';
import { SuccessInterceptor } from 'src/utils/interceptors/sucess-interceptor-interface';
import { NotFoundExceptionFilter } from 'src/filters/token-filter-not-found';
import { UpdateRepresentativeDto } from './dto/update-representative.dto';

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

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const representatives = await this.representativesService.findAll();
      return res.status(HttpStatus.OK).json({
        message: 'Representantes listados com sucesso!',
        data: representatives,
      });
    } catch (error) {
      console.error('Erro ao listar representantes:', error);
      const errorMessage =
        typeof error === 'object' && error !== null && 'message' in error
          ? (error as { message: string }).message
          : 'Unknown error';
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Erro ao listar representantes',
        error: errorMessage,
      });
    }
  }

  @Get(':id')
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)
  async getRepresentativeById(
    @Param('id', ParseIntPipe) id: number,
  ){
    if (id <= 0) {
      throw new HttpException('ID must be a positive integer', HttpStatus.BAD_REQUEST);
    }
    const representative = await this.representativesService.getRepresentativeById(id)

    return {
      message: 'Representante listado com sucesso!',
      data: representative,
    };
  }

   @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }))
  async updateRepresentative(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRepresentativeDto: UpdateRepresentativeDto,
  ) {
    if (id <= 0) {
      throw new HttpException('ID deve ser um número inteiro positivo.', HttpStatus.BAD_REQUEST);
    }
    const updatedRepresentative = await this.representativesService.updateRepresentativeById(
      id,
      updateRepresentativeDto,
    );

    return {
      message: 'Representante atualizado com sucesso!',
      data: updatedRepresentative,
    };
  }

  @Delete(':id') 
  async deleteRepresentative(@Param('id', ParseIntPipe) id: number) {
    if (id <= 0) {
      throw new HttpException('ID deve ser um número inteiro positivo.', HttpStatus.BAD_REQUEST);
    }

    const result = await this.representativesService.deleteRepresentativeById(id);
    return result;
  }
}
