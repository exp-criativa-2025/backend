import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsEmail,
  IsUrl,
  IsOptional,
  IsDateString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRepresentativeDto {
  @IsNotEmpty({ message: 'O tipo é obrigatório.' })
  @IsString({ message: 'O tipo deve ser uma string.' })
  tipo: string;

  @IsNotEmpty({ message: 'A sigla é obrigatória.' })
  @IsString({ message: 'A sigla deve ser uma string.' })
  sigla: string;

  @IsNotEmpty({ message: 'O CNPJ é obrigatório.' })
  @IsString({ message: 'O CNPJ deve ser uma string.' })
  @MinLength(14, { message: 'O CNPJ deve ter 14 caracteres.' })
  @MaxLength(14, { message: 'O CNPJ deve ter 14 caracteres.' })
  cnpj: string;

  @IsNotEmpty({ message: 'O nome fantasia é obrigatório.' })
  @IsString({ message: 'O nome fantasia deve ser uma string.' })
  nome_fantasia: string;

  @IsNotEmpty({ message: 'A razão social é obrigatória.' })
  @IsString({ message: 'A razão social deve ser uma string.' })
  razao_social: string;

  @IsNotEmpty({ message: 'O ID do representante é obrigatório.' })
  @IsString({ message: 'O ID do representante deve ser uma string.' })
  representant_id: string;

  @IsNotEmpty({ message: 'A universidade é obrigatória.' })
  @IsString({ message: 'A universidade deve ser uma string.' })
  universidade: string;

  @IsNotEmpty({ message: 'O campus é obrigatório.' })
  @IsString({ message: 'O campus deve ser uma string.' })
  campus: string;

  @IsNotEmpty({ message: 'O número de membros é obrigatório.' })
  @IsInt({ message: 'O número de membros deve ser um número inteiro.' })
  @Type(() => Number) // Garante que o valor seja convertido para número
  numero_membros: number;

  @IsNotEmpty({ message: 'A data de fundação é obrigatória.' })
  @IsDateString({}, { message: 'A data de fundação deve ser uma data válida.' })
  data_fundacao: string; // Ou Date, dependendo de como você quer receber

  @IsNotEmpty({ message: 'O telefone é obrigatório.' })
  @IsString({ message: 'O telefone deve ser uma string.' })
  telefone: string;

  @IsNotEmpty({ message: 'O email é obrigatório.' })
  @IsEmail({}, { message: 'O email deve ser um endereço de email válido.' })
  email: string;

  @IsOptional()
  @IsUrl({}, { message: 'O site deve ser uma URL válida.' })
  site?: string;

  @IsNotEmpty({ message: 'O status é obrigatório.' })
  @IsString({ message: 'O status deve ser uma string.' })
  status: string;

  @IsNotEmpty({ message: 'O CEP é obrigatório.' })
  @IsString({ message: 'O CEP deve ser uma string.' })
  cep: string;

  @IsOptional()
  @IsUrl({}, { message: 'O Facebook deve ser uma URL válida.' })
  facebook?: string;

  @IsOptional()
  @IsUrl({}, { message: 'O Instagram deve ser uma URL válida.' })
  instagram?: string;
}
