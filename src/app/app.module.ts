import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/users/entities/user-entity';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RepresentativesModule } from 'src/modules/representatives/representatives.module';
import { DonationsModule } from 'src/modules/donations/donations.module';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      {isGlobal: true}
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nestdb',
      entities: [User],
      synchronize: true,
    }),
    PrismaModule,
    RepresentativesModule,
    DonationsModule,
    DashboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
