// src/donations/donations.module.ts
import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsController } from './donations.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Adicione PrismaModule aqui
  controllers: [DonationsController],
  providers: [DonationsService],
})
export class DonationsModule {}
