import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDonationDto {
  @IsNotEmpty()
  @IsNumber()
  donated: number;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  campaignId: number;
  donation_name: any;
  name: any;
}
