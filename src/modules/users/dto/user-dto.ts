import { IsDate, IsEmail, IsIn, IsNotEmpty, IsString, IsStrongPassword, MinLength } from "class-validator";
import { UserRole } from "./CONSTANTS/user-dto-roles";

export class UserDto{
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  readonly username: string;

  @IsEmail()
  readonly userEmail: string;

  @IsStrongPassword({
    minLength: 7,
    minLowercase:1,
    minNumbers:1,
    minSymbols:1
  })
  @IsNotEmpty()
  @IsString()
  readonly userPassword: string;
  
  @IsNotEmpty()
  @IsString()
  readonly userCpf: string; 

  @IsIn([UserRole.ADMIN, UserRole.USER])
  @IsNotEmpty()
  readonly userRoleAtributed: string;

  @IsDate()
  readonly userBirthdayDate: Date;
}