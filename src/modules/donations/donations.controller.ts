import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation-dto';
import { UpdateDonationDto } from './dto/update-donation-dto';

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  async create(@Body() createDonationDto: CreateDonationDto) {
    return this.donationsService.create(createDonationDto);
  }

  @Get()
  async findAll() {
    return this.donationsService.findAll();
  }

  @Get('organization/:id')
  async findByOrganization(@Param('id', ParseIntPipe) id: number) {
    return this.donationsService.findByOrganization(id);
  }

  @Get('user/:id')
  async findByUser(@Param('id', ParseIntPipe) id: number) {
    return this.donationsService.findByUser(id);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.donationsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDonationDto: UpdateDonationDto,
  ) {
    return this.donationsService.update(id, updateDonationDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.donationsService.remove(id);
  }
}
