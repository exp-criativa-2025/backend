import { PickType } from "@nestjs/mapped-types";
import { CreateEntidadeDto } from "./create-entidade.dto";
import { IsNumber } from "class-validator";

export class GetEntidadeDto extends PickType(CreateEntidadeDto,['nameEntity', 'cnpjEntity', 'legalRepresentative', 'typeEntity']){

  @IsNumber()
    readonly id: number;
}