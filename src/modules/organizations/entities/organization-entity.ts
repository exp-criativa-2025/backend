import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  phone?: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  cnpj: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsUrl()
  website?: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  logo?: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  address?: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  city?: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  state?: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  zipCode?: string;

  @Column({ default: true })
  active: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
