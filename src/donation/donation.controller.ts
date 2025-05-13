import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonationService } from './donation.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';

@Controller('donation')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  create(@Body() createDonationDto: CreateDonationDto) {
    return this.donationService.createDonation(createDonationDto);
  }

  @Get()
  findAll(){
    return this.donationService.findAllDonations();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.donationService.getDonationById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDonationDto: UpdateDonationDto) {
    return this.donationService.updateDonationById(+id, updateDonationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.donationService.deleteDonationById(+id);
  }
}
