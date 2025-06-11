import {
  IsString,
  IsNotEmpty, // Embora usado no Create, não usaremos para tornar opcional aqui
  IsInt,
  IsEmail,
  IsUrl,
  IsOptional, // Este é o cara!
  IsDateString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateRepresentativeDto {
  @IsOptional()
  @IsString({ message: 'O tipo deve ser uma string.' })
  tipo?: string;

  @IsOptional()
  @IsString({ message: 'A sigla deve ser uma string.' })
  sigla?: string;

  @IsOptional()
  @IsString({ message: 'O CNPJ deve ser uma string.' })
  @MinLength(14, { message: 'O CNPJ deve ter 14 caracteres.' })
  @MaxLength(14, { message: 'O CNPJ deve ter 14 caracteres.' })
  cnpj?: string;

  @IsOptional()
  @IsString({ message: 'O nome fantasia deve ser uma string.' })
  nome_fantasia?: string;

  @IsOptional()
  @IsString({ message: 'A razão social deve ser uma string.' })
  razao_social?: string;

  @IsOptional()
  @IsString({ message: 'O ID do representante deve ser uma string.' })
  representant_id?: string;

  @IsOptional()
  @IsString({ message: 'A universidade deve ser uma string.' })
  universidade?: string;

  @IsOptional()
  @IsString({ message: 'O campus deve ser uma string.' })
  campus?: string;

  @IsOptional()
  @IsInt({ message: 'O número de membros deve ser um número inteiro.' })
  @Type(() => Number) // Garante que o valor seja convertido para número, se presente
  numero_membros?: number;

  @IsOptional()
  @IsDateString({}, { message: 'A data de fundação deve ser uma data válida.' })
  data_fundacao?: string; // Ou Date, dependendo de como você quer receber

  @IsOptional()
  @IsString({ message: 'O telefone deve ser uma string.' })
  telefone?: string;

  @IsOptional()
  @IsEmail({}, { message: 'O email deve ser um endereço de email válido.' })
  email?: string;

  @IsOptional()
  @IsUrl({}, { message: 'O site deve ser uma URL válida.' })
  site?: string;

  @IsOptional()
  @IsString({ message: 'O status deve ser uma string.' })
  status?: string;

  @IsOptional()
  @IsString({ message: 'O CEP deve ser uma string.' })
  cep?: string;

  @IsOptional()
  @IsUrl({}, { message: 'O Facebook deve ser uma URL válida.' })
  facebook?: string;

  @IsOptional()
  @IsUrl({}, { message: 'O Instagram deve ser uma URL válida.' })
  instagram?: string;
}