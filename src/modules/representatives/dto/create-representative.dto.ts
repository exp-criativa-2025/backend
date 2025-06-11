import { ApiProperty } from '@nestjs/swagger'; // Importe este decorador
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
  @ApiProperty({
    description: 'Tipo de representante (e.g., Entidade Estudantil, Empresa Júnior)',
    example: 'Entidade Estudantil'
  })
  @IsNotEmpty({ message: 'O tipo é obrigatório.' })
  @IsString({ message: 'O tipo deve ser uma string.' })
  tipo: string;

  @ApiProperty({
    description: 'Sigla do representante',
    example: 'CECOMP'
  })
  @IsNotEmpty({ message: 'A sigla é obrigatória.' })
  @IsString({ message: 'A sigla deve ser uma string.' })
  sigla: string;

  @ApiProperty({
    description: 'CNPJ do representante (apenas números)',
    example: '12345678901234'
  })
  @IsNotEmpty({ message: 'O CNPJ é obrigatório.' })
  @IsString({ message: 'O CNPJ deve ser uma string.' })
  @MinLength(14, { message: 'O CNPJ deve ter 14 caracteres.' })
  @MaxLength(14, { message: 'O CNPJ deve ter 14 caracteres.' })
  cnpj: string;

  @ApiProperty({
    description: 'Nome fantasia do representante',
    example: 'Centro de Estudos de Computação'
  })
  @IsNotEmpty({ message: 'O nome fantasia é obrigatório.' })
  @IsString({ message: 'O nome fantasia deve ser uma string.' })
  nome_fantasia: string;

  @ApiProperty({
    description: 'Razão social do representante',
    example: 'Centro de Estudos de Computação Ltda.'
  })
  @IsNotEmpty({ message: 'A razão social é obrigatória.' })
  @IsString({ message: 'A razão social deve ser uma string.' })
  razao_social: string;

  @ApiProperty({
    description: 'ID interno do representante',
    example: 'REP00123'
  })
  @IsNotEmpty({ message: 'O ID do representante é obrigatório.' })
  @IsString({ message: 'O ID do representante deve ser uma string.' })
  representant_id: string;

  @ApiProperty({
    description: 'Nome da universidade à qual o representante está vinculado',
    example: 'Universidade Federal do Paraná'
  })
  @IsNotEmpty({ message: 'A universidade é obrigatória.' })
  @IsString({ message: 'A universidade deve ser uma string.' })
  universidade: string;

  @ApiProperty({
    description: 'Nome do campus da universidade',
    example: 'Centro Politécnico'
  })
  @IsNotEmpty({ message: 'O campus é obrigatório.' })
  @IsString({ message: 'O campus deve ser uma string.' })
  campus: string;

  @ApiProperty({
    description: 'Número de membros da entidade/representante',
    example: 150
  })
  @IsNotEmpty({ message: 'O número de membros é obrigatório.' })
  @IsInt({ message: 'O número de membros deve ser um número inteiro.' })
  @Type(() => Number)
  numero_membros: number;

  @ApiProperty({
    description: 'Data de fundação do representante (formato ISO 8601)',
    example: '2010-05-15T00:00:00.000Z'
  })
  @IsNotEmpty({ message: 'A data de fundação é obrigatória.' })
  @IsDateString({}, { message: 'A data de fundação deve ser uma data válida.' })
  data_fundacao: string;

  @ApiProperty({
    description: 'Telefone de contato do representante (apenas números)',
    example: '41998765432'
  })
  @IsNotEmpty({ message: 'O telefone é obrigatório.' })
  @IsString({ message: 'O telefone deve ser uma string.' })
  telefone: string;

  @ApiProperty({
    description: 'Endereço de email de contato do representante',
    example: 'contato@cecomp.ufpr.br'
  })
  @IsNotEmpty({ message: 'O email é obrigatório.' })
  @IsEmail({}, { message: 'O email deve ser um endereço de email válido.' })
  email: string;

  @ApiProperty({
    description: 'URL do site oficial do representante (opcional)',
    example: 'https://www.cecomp.ufpr.br',
    required: false
  })
  @IsOptional()
  @IsUrl({}, { message: 'O site deve ser uma URL válida.' })
  site?: string;

  @ApiProperty({
    description: 'Status atual do representante (e.g., Ativo, Inativo, Em processo)',
    example: 'Ativo'
  })
  @IsNotEmpty({ message: 'O status é obrigatório.' })
  @IsString({ message: 'O status deve ser uma string.' })
  status: string;

  @ApiProperty({
    description: 'CEP do endereço do representante (apenas números)',
    example: '81531980'
  })
  @IsNotEmpty({ message: 'O CEP é obrigatório.' })
  @IsString({ message: 'O CEP deve ser uma string.' })
  cep: string;

  @ApiProperty({
    description: 'URL do perfil do Facebook (opcional)',
    example: 'https://www.facebook.com/cecomp.ufpr',
    required: false
  })
  @IsOptional()
  @IsUrl({}, { message: 'O Facebook deve ser uma URL válida.' })
  facebook?: string;

  @ApiProperty({
    description: 'URL do perfil do Instagram (opcional)',
    example: 'https://www.instagram.com/cecomp.ufpr',
    required: false
  })
  @IsOptional()
  @IsUrl({}, { message: 'O Instagram deve ser uma URL válida.' })
  instagram?: string;
}