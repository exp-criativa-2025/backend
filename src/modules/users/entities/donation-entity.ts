import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Donation{

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @IsString()
  typeDonation: string;

  @IsNotEmpty()
  @IsNumber()
  valueDonation: number;

  @IsNotEmpty()
  @IsDateString()
  birthDate: Date;

  @IsOptional()
  @IsString()
  description: string;
}