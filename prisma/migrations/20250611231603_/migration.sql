/*
  Warnings:

  - You are about to drop the column `donation_name` on the `donations` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `donations` table. All the data in the column will be lost.
  - You are about to drop the column `campus` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `cnpj` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `data_fundacao` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `facebook` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `nome_fantasia` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `numero_membros` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `razao_social` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `representant_id` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `sigla` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `site` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `universidade` on the `representatives` table. All the data in the column will be lost.
  - You are about to drop the column `userBirthdayDate` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `userCpf` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `userEmail` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `userPassword` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `userRoleAtributed` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Donation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Entidades` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `academic_entity_role` to the `representatives` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `representatives` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `representatives` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `representatives` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "academic_entities" DROP CONSTRAINT "academic_entities_representativeId_fkey";

-- DropForeignKey
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_academicEntityId_fkey";

-- DropForeignKey
ALTER TABLE "donations" DROP CONSTRAINT "donations_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "donations" DROP CONSTRAINT "donations_userId_fkey";

-- DropIndex
DROP INDEX "users_userCpf_key";

-- DropIndex
DROP INDEX "users_userEmail_key";

-- AlterTable
ALTER TABLE "donations" DROP COLUMN "donation_name",
DROP COLUMN "name";

-- AlterTable
ALTER TABLE "representatives" DROP COLUMN "campus",
DROP COLUMN "cnpj",
DROP COLUMN "data_fundacao",
DROP COLUMN "facebook",
DROP COLUMN "instagram",
DROP COLUMN "nome_fantasia",
DROP COLUMN "numero_membros",
DROP COLUMN "razao_social",
DROP COLUMN "representant_id",
DROP COLUMN "sigla",
DROP COLUMN "site",
DROP COLUMN "telefone",
DROP COLUMN "tipo",
DROP COLUMN "universidade",
ADD COLUMN     "academic_entity_role" TEXT NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "userBirthdayDate",
DROP COLUMN "userCpf",
DROP COLUMN "userEmail",
DROP COLUMN "userPassword",
DROP COLUMN "userRoleAtributed",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "cpf" VARCHAR(11) NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "Donation";

-- DropTable
DROP TABLE "Entidades";

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");
