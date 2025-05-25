import { Module } from '@nestjs/common';
import { RepresentativesService } from './representatives.service';
import { RepresentativesController } from './representatives.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RepresentativesController],
  providers: [RepresentativesService],
})
export class RepresentativesModule {}
