import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto{

  @ApiProperty({
      description: 'Endereço de e-mail único do usuário.',
      example: 'fulano.detal@example.com',
    })
    @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
    @IsEmail({}, { message: 'O e-mail deve ser um endereço de e-mail válido.' })
  readonly userEmail: string;
  
    
    @ApiProperty({
    description: 'Senha única do usuário.',})
    @IsNotEmpty({ message: 'A senha é obrigatória.' })
    @IsString({ message: 'A senha deve ser uma string.' })
    readonly userPassword: string;

}
