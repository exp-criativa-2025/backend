/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// src/donations/donations.service.ts
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Donation } from '@prisma/client';
import { CreateDonationDto } from './dto/create-donation.dto';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Donation[]> {
    return await this.prisma.donation.findMany();
  }

  async getDonationById(id: number) {
   try {
    const donationForFind = await this.prisma.donation.findFirst(
      {
        where:{id},
        select:{
          id:true,
          donation_name:true,
          name:true,
          donated:true,
          userId:true
        }
      }
    )

    return donationForFind
   } catch (error) {
    throw new HttpException("Error while finding Donation",HttpStatus.INTERNAL_SERVER_ERROR)
   }
  }

   async createDonation(createDonationDto: CreateDonationDto): Promise<Donation> {
    const { userId, campaignId, date, ...rest } = createDonationDto;

    return this.prisma.donation.create({
      data: {
        ...rest,
        date: new Date(date),
        user: {
          connect: { id: userId },
        },
        campaign: {
          connect: { id: campaignId },
        },
      },
    });
  }

  // async updateDonationById(id: number, updateDonationDto: UpdateDonationDto) {
  //     try {
  //       const donationForUpdate = await this.prismaService.donation.findUnique({
  //         where:{id}
  //       })

  //       if (!donationForUpdate){
  //         throw new HttpException("Doação não foi encontrada!", HttpStatus.NOT_FOUND)
  //       }
  //       const newDonationUpdated = await this.prismaService.donation.update({
  //         where:{
  //           id: donationForUpdate.id
  //         },
  //         data: {
  //           typeDonation: updateDonationDto.typeDonation,
  //           valueDonation:updateDonationDto.valueDonation,
  //           birthDate: updateDonationDto.birthDate,
  //           description: updateDonationDto.description
  //         },
  //         select:{
  //           id:true,
  //           typeDonation:true,
  //           description:true
  //         }
  //       })

  //       return newDonationUpdated;
  //     } catch (error) {
  //       throw new HttpException("Fail to update the Donation", HttpStatus.BAD_REQUEST)
  //     }
  // }

  async deleteDonationById(id: number) {
    try {
      const donationForDelete = await this.prisma.donation.findUnique(
        {
          where: {id:id}
        }
      )
      if (donationForDelete?.id){
        await this.prisma.donation.delete(
          {
          where:{
            id:donationForDelete.id
          }
          }
        )
        return{
          message: "Doação deletada com sucesso"
        }
      }
    } catch (error) {
      console.log(error)
      throw new HttpException('Fail to delete the user!', HttpStatus.BAD_REQUEST)
    }
  }
}