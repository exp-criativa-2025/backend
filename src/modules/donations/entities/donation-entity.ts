import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Organization } from '../../organizations/entities/organization-entity';
import { User } from '../../users/entities/user-entity';

@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Column({ default: 'PENDING' })
  @IsString()
  status: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  paymentMethod?: string;

  @Column({ default: false })
  @IsBoolean()
  anonymous: boolean;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  message?: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => User, user => user)
  user?: User;

  @ManyToOne(() => Organization, organization => organization)
  organization: Organization;
}
