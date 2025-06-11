import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UseFilters,
  ParseIntPipe,
} from '@nestjs/common';
import { DonationService } from './donation.service';
import { CreateDonationDto } from './dto/create-donation.dto';
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
  findAllDonations() {
    return this.donationService.findAllDonations();
  }
}
