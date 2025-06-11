import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEntidadeDto {

  @IsString()
  @IsNotEmpty()
  nameEntity !: string;

  @IsNotEmpty()
  @IsString()
  cnpjEntity!: string;

  @IsNotEmpty()
  @IsString()
  legalRepresentative: string;

  @IsString()
  @IsNotEmpty()
  typeEntity: string;

  @IsOptional()
  @IsString()
  description?: string | null

}
