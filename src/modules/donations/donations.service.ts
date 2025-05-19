import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDonationDto } from './dto/create-donation-dto';
import { UpdateDonationDto } from './dto/update-donation-dto';

@Injectable()
export class DonationsService {
  constructor(private prismaService: PrismaService) {}

  async create(createDonationDto: CreateDonationDto) {
    try {
      // Check if the organization exists
      const organization = await this.prismaService.organization.findUnique({
        where: { id: createDonationDto.organizationId },
      });

      if (!organization) {
        throw new HttpException('Organization not found', HttpStatus.NOT_FOUND);
      }

      // If userId is provided, check if the user exists
      if (createDonationDto.userId) {
        const user = await this.prismaService.user.findUnique({
          where: { id: createDonationDto.userId },
        });

        if (!user) {
          throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
      }

      const newDonation = await this.prismaService.donation.create({
        data: {
          amount: createDonationDto.amount,
          description: createDonationDto.description,
          status: createDonationDto.status ?? 'PENDING',
          paymentMethod: createDonationDto.paymentMethod,
          anonymous: createDonationDto.anonymous ?? false,
          message: createDonationDto.message,
          userId: createDonationDto.userId,
          organizationId: createDonationDto.organizationId,
        },
        include: {
          organization: {
            select: {
              id: true,
              name: true,
            },
          },
          user: createDonationDto.userId
            ? {
                select: {
                  id: true,
                  username: true,
                  userEmail: true,
                },
              }
            : false,
        },
      });

      return newDonation;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error(error);
      throw new HttpException(
        'Failed to create donation',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    try {
      return await this.prismaService.donation.findMany({
        include: {
          organization: {
            select: {
              id: true,
              name: true,
            },
          },
          user: {
            select: {
              id: true,
              username: true,
            },
          },
        },
      });
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Failed to fetch donations',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findByOrganization(organizationId: number) {
    try {
      return await this.prismaService.donation.findMany({
        where: { organizationId },
        include: {
          user: {
            select: {
              id: true,
              username: true,
            },
          },
        },
      });
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Failed to fetch donations',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findByUser(userId: number) {
    try {
      return await this.prismaService.donation.findMany({
        where: { userId },
        include: {
          organization: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Failed to fetch donations',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    try {
      const donation = await this.prismaService.donation.findUnique({
        where: { id },
        include: {
          organization: true,
          user: {
            select: {
              id: true,
              username: true,
              userEmail: true,
            },
          },
        },
      });

      if (!donation) {
        throw new HttpException('Donation not found', HttpStatus.NOT_FOUND);
      }

      return donation;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error(error);
      throw new HttpException(
        'Failed to fetch donation',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateDonationDto: UpdateDonationDto) {
    try {
      const donation = await this.prismaService.donation.findUnique({
        where: { id },
      });

      if (!donation) {
        throw new HttpException('Donation not found', HttpStatus.NOT_FOUND);
      }

      const updatedDonation = await this.prismaService.donation.update({
        where: { id },
        data: updateDonationDto,
      });

      return updatedDonation;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error(error);
      throw new HttpException(
        'Failed to update donation',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
      const donation = await this.prismaService.donation.findUnique({
        where: { id },
      });

      if (!donation) {
        throw new HttpException('Donation not found', HttpStatus.NOT_FOUND);
      }

      await this.prismaService.donation.delete({
        where: { id },
      });

      return { message: 'Donation deleted successfully' };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error(error);
      throw new HttpException(
        'Failed to delete donation',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
