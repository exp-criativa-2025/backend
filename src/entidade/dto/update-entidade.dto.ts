import { PartialType } from '@nestjs/mapped-types';
import { CreateEntidadeDto } from './create-entidade.dto';
import { IsNumber } from 'class-validator';

export class UpdateEntidadeDto extends PartialType(CreateEntidadeDto) {
  @IsNumber()
  id!: number;
}