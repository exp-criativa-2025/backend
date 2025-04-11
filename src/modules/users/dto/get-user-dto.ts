import { PickType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user-dto";
import { IsNumber } from "class-validator";

export class GetUserDto extends PickType(CreateUserDto,['username', 'userEmail','userPassword','userRoleAtributed']){

  readonly createdAt: Date;

  @IsNumber()
  readonly id: number;
}