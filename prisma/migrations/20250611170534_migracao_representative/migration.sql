/*
  Warnings:

  - You are about to drop the `academic_centers` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "AcademicEntityType" AS ENUM ('ACADEMIC_CENTER', 'CENTRAL_DIRECTORY', 'ATHLETICS');

-- DropTable
DROP TABLE "academic_centers";

-- CreateTable
CREATE TABLE "academic_entities" (
    "id" SERIAL NOT NULL,
    "type" "AcademicEntityType" NOT NULL,
    "fantasyName" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "foundationDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "representativeId" INTEGER NOT NULL,

    CONSTRAINT "academic_entities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaigns" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "goal" DOUBLE PRECISION NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "academicEntityId" INTEGER NOT NULL,

    CONSTRAINT "campaigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donations" (
    "id" SERIAL NOT NULL,
    "donation_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "donated" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "campaignId" INTEGER NOT NULL,

    CONSTRAINT "donations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "academic_entities_cnpj_key" ON "academic_entities"("cnpj");

-- AddForeignKey
ALTER TABLE "academic_entities" ADD CONSTRAINT "academic_entities_representativeId_fkey" FOREIGN KEY ("representativeId") REFERENCES "representatives"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD CONSTRAINT "campaigns_academicEntityId_fkey" FOREIGN KEY ("academicEntityId") REFERENCES "academic_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donations" ADD CONSTRAINT "donations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donations" ADD CONSTRAINT "donations_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "campaigns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
