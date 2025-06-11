import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseFilters, ParseIntPipe } from '@nestjs/common';
import { EntidadeService } from './entidade.service';
import { CreateEntidadeDto } from './dto/create-entidade.dto';
import { UpdateEntidadeDto } from './dto/update-entidade.dto';
import { SuccessInterceptor } from 'src/utils/interceptors/sucess-interceptor-interface';
import { NotFoundExceptionFilter } from 'src/filters/token-filter-not-found';
import { GetEntidadeDto } from './dto/get-entidade.dto';

@Controller('entidade')
export class EntidadeController {
  constructor(private readonly entidadeService: EntidadeService) {}

  @Post()
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)
  async createEntity(@Body() createEntidadeDto: CreateEntidadeDto) {
    return this.entidadeService.createEntity(createEntidadeDto);
  }

  @Get()
  async findAll():Promise<GetEntidadeDto[]> {
    return this.entidadeService.findAllEntity();
  }

  @Get(':id')
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.entidadeService.getEntityById(+id);
  }

  @Patch(':id')
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)
  async updateEntityById(
    @Param('id',ParseIntPipe) id: number, @Body() updateEntidadeDto: UpdateEntidadeDto
  ) {
    return this.entidadeService.updateEntityById(+id, updateEntidadeDto);
  }

  @Delete(':id')
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)
  async deleteEntityById(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.entidadeService.deleteEntityById(+id);
  }
}
