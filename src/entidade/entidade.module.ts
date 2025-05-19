import { Module } from '@nestjs/common';
import { EntidadeService } from './entidade.service';
import { EntidadeController } from './entidade.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EntidadeController],
  providers: [EntidadeService],
  exports: [EntidadeService]
})
export class EntidadeModule {}
