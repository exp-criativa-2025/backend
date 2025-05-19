import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create-organization-dto';
import { UpdateOrganizationDto } from './dto/update-organization-dto';

@Injectable()
export class OrganizationsService {
  constructor(private prismaService: PrismaService) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    try {
      const newOrganization = await this.prismaService.organization.create({
        data: {
          name: createOrganizationDto.name,
          description: createOrganizationDto.description,
          email: createOrganizationDto.email,
          phone: createOrganizationDto.phone,
          cnpj: createOrganizationDto.cnpj,
          website: createOrganizationDto.website,
          logo: createOrganizationDto.logo,
          address: createOrganizationDto.address,
          city: createOrganizationDto.city,
          state: createOrganizationDto.state,
          zipCode: createOrganizationDto.zipCode,
          active: createOrganizationDto.active ?? true,
        },
      });
      return newOrganization;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Failed to create organization',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    try {
      return await this.prismaService.organization.findMany({
        where: {
          active: true,
        },
        include: {
          donations: {
            select: {
              id: true,
              amount: true,
              status: true,
              createdAt: true,
            },
          },
        },
      });
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Failed to fetch organizations',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    try {
      const organization = await this.prismaService.organization.findUnique({
        where: { id },
        include: {
          donations: {
            select: {
              id: true,
              amount: true,
              description: true,
              status: true,
              paymentMethod: true,
              anonymous: true,
              message: true,
              createdAt: true,
              userId: true,
            },
          },
        },
      });

      if (!organization) {
        throw new HttpException('Organization not found', HttpStatus.NOT_FOUND);
      }

      return organization;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error(error);
      throw new HttpException(
        'Failed to fetch organization',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    try {
      const organization = await this.prismaService.organization.findUnique({
        where: { id },
      });

      if (!organization) {
        throw new HttpException('Organization not found', HttpStatus.NOT_FOUND);
      }

      const updatedOrganization = await this.prismaService.organization.update({
        where: { id },
        data: updateOrganizationDto,
      });

      return updatedOrganization;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error(error);
      throw new HttpException(
        'Failed to update organization',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
      const organization = await this.prismaService.organization.findUnique({
        where: { id },
      });

      if (!organization) {
        throw new HttpException('Organization not found', HttpStatus.NOT_FOUND);
      }

      // Soft delete by setting active to false
      await this.prismaService.organization.update({
        where: { id },
        data: { active: false },
      });

      return { message: 'Organization deactivated successfully' };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error(error);
      throw new HttpException(
        'Failed to remove organization',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
