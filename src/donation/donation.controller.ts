import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseFilters, ParseIntPipe } from '@nestjs/common';
import { DonationService } from './donation.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { NotFoundExceptionFilter } from 'src/filters/token-filter-not-found';
import { SuccessInterceptor } from 'src/utils/interceptors/sucess-interceptor-interface';

@Controller('donation')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)  
  createDonation(@Body() createDonationDto: CreateDonationDto) {
    return this.donationService.createDonation(createDonationDto);
  }

  @Get()
  findAllDonations(){
    return this.donationService.findAllDonations();
  }

  @Get(':id')
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)
  findDonationById(@Param('id', ParseIntPipe) id: number) {
    return this.donationService.getDonationById(+id);
  }

  @Patch(':id')
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)
  updateDonationById(@Param('id', ParseIntPipe) id: number, @Body() updateDonationDto: UpdateDonationDto) {
    return this.donationService.updateDonationById(+id, updateDonationDto);
  }

  @Delete(':id')
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(NotFoundExceptionFilter)
  deleteDonationById(@Param('id', ParseIntPipe) id: number) {
    return this.donationService.deleteDonationById(+id);
  }
}
