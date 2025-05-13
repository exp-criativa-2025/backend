-- CreateTable
CREATE TABLE "Entidades" (
    "id" SERIAL NOT NULL,
    "nameEntity" TEXT NOT NULL,
    "cnpjEntity" VARCHAR(14) NOT NULL,
    "legalRepresentative" TEXT NOT NULL,
    "typeEntity" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Entidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "typeDonation" TEXT NOT NULL,
    "valueDonation" DOUBLE PRECISION NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entidades_cnpjEntity_key" ON "Entidades"("cnpjEntity");
