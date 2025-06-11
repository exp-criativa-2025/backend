import { AcademicEntity } from '@prisma/client';

export class Campaign {
  id: number;
  name: string;
  goal: number;
  startDate: Date;
  endDate: Date;
  academicEntityId: number;
  academicEntity?: AcademicEntity;
}
