import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Entidade{

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @IsString()
  nameEntity: string;

  @IsNotEmpty()
  @IsString()
  cnpjEntity: string;

  @IsNotEmpty()
  legalRepresentative:string;

  @CreateDateColumn()
  typeEntity: string;

  @IsOptional()
  @IsString()
  description: string;
}