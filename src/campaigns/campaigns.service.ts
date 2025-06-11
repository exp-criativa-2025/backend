/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { Campaign } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CampaignsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<{ id: number; totalDonations: number }[]> {
    const campaigns = await this.prisma.campaign.findMany({
      include: {
        donations: true,
        academicEntity: true,
      },
    });

    return campaigns.map((campaign) => {
      const totalDonations = campaign.donations.reduce(
        (sum, donation) => sum + donation.donated,
        0,
      );

      return {
        id: campaign.id,
        name: campaign.name,
        startDate: campaign.startDate,
        endDate: campaign.endDate,
        goal: campaign.goal,
        academicEntity: campaign.academicEntity,
        totalDonations,
      };
    });
  }

  async findById(id: number): Promise<Campaign | null> {
    return this.prisma.campaign.findUnique({
      where: { id },
    });
  }

  async create(data: Campaign): Promise<Campaign> {
    const campaignData = {
      ...data,
    };

    return this.prisma.campaign.create({
      data: campaignData,
    });
  }

  async update(id: number, data: Partial<Campaign>): Promise<Campaign> {
    return this.prisma.campaign.update({
      where: { id },
      data: {
        ...data,
      },
    });
  }

  async getTotalDonationsByCampaignId(campaignId: number): Promise<number> {
    const result = await this.prisma.donation.aggregate({
      _sum: {
        donated: true,
      },
      where: {
        campaignId,
      },
    });

    return result._sum.donated ?? 0;
  }
}
