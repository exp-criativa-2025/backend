
import { PartialType } from '@nestjs/swagger';
import { CreateRepresentativeDto } from './create-representative.dto';
import { IsDefined } from 'class-validator';

export class UpdateRepresentativeDto extends PartialType(CreateRepresentativeDto) {
  @IsDefined()
  id!: number
}