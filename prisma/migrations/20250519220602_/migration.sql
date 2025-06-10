-- CreateTable
CREATE TABLE "representatives" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "razao_social" TEXT NOT NULL,
    "representant_id" TEXT NOT NULL,
    "universidade" TEXT NOT NULL,
    "campus" TEXT NOT NULL,
    "numero_membros" INTEGER NOT NULL,
    "data_fundacao" TIMESTAMP(3) NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,

    CONSTRAINT "representatives_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "academic_centers" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "razao_social" TEXT NOT NULL,
    "representative_id" TEXT NOT NULL,
    "curso_vinculado" TEXT NOT NULL,
    "campus" TEXT NOT NULL,
    "numero_membros" INTEGER NOT NULL,
    "data_fundacao" TIMESTAMP(3) NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,

    CONSTRAINT "academic_centers_pkey" PRIMARY KEY ("id")
);
