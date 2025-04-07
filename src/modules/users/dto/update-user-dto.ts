import { IsOptional } from "class-validator";

export class UpdateUserDto{

  @IsOptional()
  username: string

  @IsOptional()
  userEmail: string

  @IsOptional()
  userPassword: string

  @IsOptional()
  userRoleAtributed: string

  @IsOptional()
  active: Boolean


}