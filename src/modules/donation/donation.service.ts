/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Donation } from '@prisma/client';

@Injectable()
export class DonationService {
  constructor(private prismaService: PrismaService) {}

  async createDonation(createDonationDto: CreateDonationDto) {
    try {
      const newDonation = await this.prismaService.donation.create({
        data: {
          donation_name: createDonationDto.donation_name,
          name: createDonationDto.name,
          userId: createDonationDto.userId,
          campaignId: createDonationDto.campaignId,
          donated: createDonationDto.donated,
          date: createDonationDto.date,
        },
        select: {
          id: true,
        },
      });

      return newDonation;
    } catch (err) {
      console.log(err);
      throw new HttpException(
        'Falha interna ao criar a doação',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAllDonations() {
    try {
      const allDonations: Donation[] =
        await this.prismaService.donation.findMany();
      return allDonations;
    } catch (error) {
      throw new HttpException(
        'Fail to load all the donations!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
