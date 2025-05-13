import { PartialType } from '@nestjs/mapped-types';
import { CreateDonationDto } from './create-donation.dto';
import { IsNumber } from 'class-validator';

export class UpdateDonationDto extends PartialType(CreateDonationDto) {

  @IsNumber()
  id!: number;
}
