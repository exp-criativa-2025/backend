import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

export interface AggregatedDonationData {
  date: string;
  totalDonations: number;
}

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getTotalDonationsByDate(): Promise<AggregatedDonationData[]> {
    const result: { date: string; sum: number }[] = await this.prisma.$queryRaw(
      Prisma.sql`
        SELECT
          TO_CHAR(date, 'YYYY-MM-DD') as date,
          SUM(donated) as sum
        FROM donations
        GROUP BY TO_CHAR(date, 'YYYY-MM-DD')
        ORDER BY date ASC;
      `,
    );

    return result.map((row) => ({
      date: row.date,
      totalDonations: Number(row.sum),
    }));
  }
}
