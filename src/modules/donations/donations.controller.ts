/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// src/donations/donations.controller.ts
import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { Response } from 'express';

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

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
}