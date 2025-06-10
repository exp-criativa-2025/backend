/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// src/donations/donations.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Donation } from '@prisma/client';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Donation[]> {
    return await this.prisma.donation.findMany();
  }

}