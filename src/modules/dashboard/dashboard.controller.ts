import { Controller, Get } from '@nestjs/common';
import { DashboardService, AggregatedDonationData } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('total-donations-by-date')
  async getTotalDonationsByDate(): Promise<AggregatedDonationData[]> {
    return this.dashboardService.getTotalDonationsByDate();
  }
}
