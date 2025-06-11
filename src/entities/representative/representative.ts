import { AcademicEntity } from '@prisma/client';

export class Representative {
  id: number;
  tipo: string;
  sigla: string;
  cnpj: number;
  nome_fantasia: string;
  razao_social: string;
  representative_id: number;
  universidade: string;
  campus: string;
  numero_membros: number;
  data_fundacao: Date;
  telefone: string;
  email: string;
  site: string;
  status: string;
  cep: string;
  facebook: string;
  instagram: string;
  academicEntities: AcademicEntity[];
}
