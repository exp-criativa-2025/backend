import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto{

  @IsEmail()
  @IsNotEmpty()
  readonly userEmail: string;
  
    @IsNotEmpty()
    @IsString()
    readonly userPassword: string;

}