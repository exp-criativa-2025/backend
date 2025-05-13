import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Donation } from '@prisma/client';

@Injectable()
export class DonationService {

  constructor(private prismaService: PrismaService){}

  async createDonation(createDonationDto: CreateDonationDto) {
    try {
      const newDonation = await this.prismaService.donation.create(
        {
          data:{
              typeDonation: createDonationDto.typeDonation,
              valueDonation: createDonationDto.valueDonation,
              birthDate:createDonationDto.birthDate,
              description:createDonationDto.description 
          }, select:{
            id: true,
            typeDonation:true,
            description:true
          }
        }
      )

      return newDonation;
    } catch (err) {
      console.log(err);
      throw new HttpException("Failed to create the user",HttpStatus.BAD_REQUEST)
    }
  }

  async findAllDonations(){
    try {
      const allDonations: Donation [] = await this.prismaService.donation.findMany();
      return allDonations;
    } catch (error) {
      throw new HttpException('Fail to load all the donations!', HttpStatus.BAD_REQUEST)
    }
  }

  async getDonationById(id: number) {
   try {
    const donationForFind = await this.prismaService.donation.findFirst(
      {
        where:{id},
        select:{
          id:true,
          typeDonation:true,
          description:true
        }
      }
    )
   } catch (error) {
    throw new HttpException("Error while finding Donation",HttpStatus.INTERNAL_SERVER_ERROR)
   }
  }

  async updateDonationById(id: number, updateDonationDto: UpdateDonationDto) {
      try {
        const donationForUpdate = await this.prismaService.donation.findUnique({
          where:{id}
        })

        if (!donationForUpdate){
          throw new HttpException("Doação não foi encontrada!", HttpStatus.NOT_FOUND)
        }
        const newDonationUpdated = await this.prismaService.donation.update({
          where:{
            id: donationForUpdate.id
          },
          data: {
            typeDonation: updateDonationDto.typeDonation,
            valueDonation:updateDonationDto.valueDonation,
            birthDate: updateDonationDto.birthDate,
            description: updateDonationDto.description
          },
          select:{
            id:true,
            typeDonation:true,
            description:true
          }
        })

        return newDonationUpdated;
      } catch (error) {
        throw new HttpException("Fail to update the Donation", HttpStatus.BAD_REQUEST)
      }
  }

  async deleteDonationById(id: number) {
    try {
      const donationForDelete = await this.prismaService.donation.findUnique(
        {
          where: {id:id}
        }
      )
      if (donationForDelete?.id){
        await this.prismaService.donation.delete(
          {
          where:{
            id:donationForDelete.id
          }
          }
        )
        return{
          message: "User deleted with success"
        }
      }
    } catch (error) {
      console.log(error)
      throw new HttpException('Fail to delete the user!', HttpStatus.BAD_REQUEST)
    }
  }
}
