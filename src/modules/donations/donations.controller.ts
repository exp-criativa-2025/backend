/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// src/donations/donations.controller.ts
import { Controller, Get, Res, HttpStatus, Post, HttpCode, UseInterceptors, UseFilters, Body } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { Response } from 'express';
import { SuccessInterceptor } from 'src/utils/interceptors/sucess-interceptor-interface';
import { NotFoundExceptionFilter } from 'src/filters/token-filter-not-found';
import { CreateDonationDto } from './dto/create-donation.dto';
import { Donation } from '@prisma/client';

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) 
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)  
  async createDonation(
    @Body() createDonationDto: CreateDonationDto): Promise<Donation> {
    return this.donationsService.createDonation(createDonationDto);
  }

  // @Get(':id')
  // @UseInterceptors(SuccessInterceptor)
  // @UseFilters(NotFoundExceptionFilter)
  // findDonationById(@Param('id', ParseIntPipe) id: number) {
  //   return this.donationService.getDonationById(+id);
  // }

  @Get() 
  async findAll(@Res() res: Response) {
    try {
      const donations = await this.donationsService.findAll();
      return res.status(HttpStatus.OK).json({
        message: 'Doações listadas com sucesso!',
        data: donations,
      });
    } catch (error) {
      console.error('Erro ao listar doações:', error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Erro ao listar doações',
        error: error.message,
      });
    }
  }

  // @Patch(':id')
  // @UseInterceptors(SuccessInterceptor)
  // @UseFilters(NotFoundExceptionFilter)
  // updateDonationById(@Param('id', ParseIntPipe) id: number, @Body() updateDonationDto: UpdateDonationDto) {
  //   return this.donationService.updateDonationById(+id, updateDonationDto);
  // }

  // @Delete(':id')
  // @UseInterceptors(SuccessInterceptor)
  // @UseFilters(NotFoundExceptionFilter)
  // deleteDonationById(@Param('id', ParseIntPipe) id: number) {
  //   return this.donationService.deleteDonationById(+id);
  // }
}