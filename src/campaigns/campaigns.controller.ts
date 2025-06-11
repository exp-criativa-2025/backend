import { Controller, Post, Body, Res, HttpStatus, Get } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { Response } from 'express';

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Post()
  async createCampaign(
    @Body() createCampaignDto: CreateCampaignDto,
    @Res() res: Response,
  ) {
    try {
      const newCampaign = await this.campaignsService.create(createCampaignDto);
      return res.status(HttpStatus.CREATED).json({
        message: 'Campaign created successfully!',
        data: newCampaign,
      });
    } catch (error: unknown) {
      console.error('Error creating campaign:', error);
      const errorMessage =
        typeof error === 'object' && error !== null && 'message' in error
          ? (error as { message: string }).message
          : 'Unknown error';
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error creating campaign',
        error: errorMessage,
      });
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const campaigns = await this.campaignsService.findAll();
      return res.status(HttpStatus.OK).json({
        message: 'Campaigns retrieved successfully!',
        data: campaigns,
      });
    } catch (error) {
      console.error('Error retrieving campaigns:', error);
      const errorMessage =
        typeof error === 'object' && error !== null && 'message' in error
          ? (error as { message: string }).message
          : 'Unknown error';
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error retrieving campaigns',
        error: errorMessage,
      });
    }
  }
}
