import { IsDate, IsEmail, IsIn, IsNotEmpty, IsString, IsStrongPassword, MinLength } from "class-validator";
import { UserRole } from "./CONSTANTS/user-dto-roles";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto{

  @ApiProperty({
    description: 'Nome de usuário único para login.',
    example: 'fulanodetal',
  })
  @IsNotEmpty({ message: 'O nome de usuário é obrigatório.' })
  @IsString({ message: 'O nome de usuário deve ser uma string.' })
  @MinLength(5, { message: 'O nome de usuário deve ter no mínimo 5 caracteres.' })
  readonly username: string;

  @ApiProperty({
    description: 'Endereço de e-mail único do usuário.',
    example: 'fulano.detal@example.com',
  })
  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  @IsEmail({}, { message: 'O e-mail deve ser um endereço de e-mail válido.' })
  readonly userEmail: string;

  @ApiProperty({
    description: 'Senha única do usuário.',
    example: 'EsseBiChoTaMaluko01**',
  })
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @IsString({ message: 'A senha deve ser uma string.' })
  @IsStrongPassword({
    minLength: 7,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  }, { message: 'A senha deve ter no mínimo 7 caracteres, 1 letra minúscula, 1 número e 1 símbolo.' })
  readonly userPassword: string;
  
  @ApiProperty({
    description: 'CPF do usuário (apenas números, 11 dígitos).',
    example: '12345678901',
  })
  @IsNotEmpty({ message: 'O CPF é obrigatório.' })
  @IsString({ message: 'O CPF deve ser uma string.' })
  readonly userCpf: string; 


  @ApiProperty({
    description: 'Atribuição de papel do usuário (ADMIN ou USER).',
    enum: UserRole,
    example: UserRole.USER,
    default: UserRole.USER,
  })
  @IsNotEmpty({ message: 'O papel do usuário é obrigatório.' })
  @IsString({ message: 'O papel do usuário deve ser uma string.' })
  @IsIn([UserRole.ADMIN, UserRole.USER])
  @IsNotEmpty()
  readonly userRoleAtributed: string;

  @IsDate()
  @ApiProperty({
    description: 'Data de nascimento do usuário (formato ISO 8601).',
    example: '1990-07-20T00:00:00.000Z',
  })
  @IsNotEmpty({ message: 'A data de nascimento é obrigatória.' })
  readonly userBirthdayDate: Date;
}