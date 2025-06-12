/*
  Warnings:

  - You are about to drop the `Donation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Entidades` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Donation";

-- DropTable
DROP TABLE "Entidades";

-- CreateTable
CREATE TABLE "Entidade" (
    "id" SERIAL NOT NULL,
    "nameEntity" TEXT NOT NULL,
    "cnpjEntity" VARCHAR(14) NOT NULL,
    "legalRepresentative" TEXT NOT NULL,
    "typeEntity" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Entidade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entidade_cnpjEntity_key" ON "Entidade"("cnpjEntity");
