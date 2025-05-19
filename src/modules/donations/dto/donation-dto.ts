import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class DonationDto {
  @IsNotEmpty()
  @IsNumber()
  readonly amount: number;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsString()
  readonly status?: string;

  @IsOptional()
  @IsString()
  readonly paymentMethod?: string;

  @IsOptional()
  @IsBoolean()
  readonly anonymous?: boolean;

  @IsOptional()
  @IsString()
  readonly message?: string;

  @IsNotEmpty()
  @IsNumber()
  readonly organizationId: number;

  @IsOptional()
  @IsNumber()
  readonly userId?: number;
}
