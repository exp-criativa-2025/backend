import { Representative } from '@prisma/client';

export class AcademicEntity {
  id: number;
  type: string;
  fantasyName: string;
  cnpj: number;
  foundationDate: Date;
  status: string;
  cep: string;
  representativeId: number;
  representative: Representative;
}
