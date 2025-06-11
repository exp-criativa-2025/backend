import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsInt,
  Min,
} from 'class-validator';

export class CreateDonationDto {
  @ApiProperty({
    description: 'Nome do tipo de doação (e.g., "Monetária", "Livros", "Roupas").',
    example: 'Monetária',
  })
  @IsNotEmpty({ message: 'O nome da doação é obrigatório.' })
  @IsString({ message: 'O nome da doação deve ser uma string.' })
  donation_name: string;

  @ApiProperty({
    description: 'Nome do doador (pode ser o nome real ou anônimo).',
    example: 'João Silva',
  })
  @IsNotEmpty({ message: 'O nome do doador é obrigatório.' })
  @IsString({ message: 'O nome do doador deve ser uma string.' })
  name: string;

  @ApiProperty({
    description: 'Valor ou quantidade doado. Para doações monetárias, o valor em R$. Para outros tipos, a quantidade.',
    example: 50.00,
  })
  @IsNotEmpty({ message: 'O valor doado é obrigatório.' })
  @IsNumber({}, { message: 'O valor doado deve ser um número.' })
  @Min(0, { message: 'O valor doado não pode ser negativo.' }) 
  donated: number;

  @ApiProperty({
    description: 'Data e hora da doação (formato ISO 8601).',
    example: '2025-06-11T10:30:00.000Z',
  })
  @IsNotEmpty({ message: 'A data da doação é obrigatória.' })
  date: string;

  @ApiProperty({
    description: 'ID do usuário que realizou a doação.',
    example: 1,
  })
  @IsNotEmpty({ message: 'O ID do usuário é obrigatório.' })
  @IsInt({ message: 'O ID do usuário deve ser um número inteiro.' })
  userId: number;

  @ApiProperty({
    description: 'ID da campanha à qual a doação está vinculada.',
    example: 101,
  })
  @IsNotEmpty({ message: 'O ID da campanha é obrigatório.' })
  @IsInt({ message: 'O ID da campanha deve ser um número inteiro.' })
  campaignId: number;
}