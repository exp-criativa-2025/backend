import { IsString, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCampaignDto {
  @IsString()
  name: string;

  @IsNumber()
  id: number;

  @IsNumber()
  goal: number;

  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @IsNumber()
  academicEntityId: number;
}
