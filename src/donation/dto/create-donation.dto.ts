import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDonationDto {

  @IsString()
  @IsNotEmpty()
  readonly typeDonation: string;

  @IsNumber()
  @IsNotEmpty()
  readonly valueDonation: number;

  @IsNotEmpty()
  readonly birthDate: Date;

  @IsString()
  readonly description: string;

}
