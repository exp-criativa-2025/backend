/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { PrismaClient, AcademicEntityType } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  { username: "Alice", email: "alice@example.com", password: "password123", cpf: "12345678900", role: "USER", birthday: "1995-04-10T00:00:00Z" },
  { username: "Bob", email: "bob@example.com", password: "password123", cpf: "12345678901", role: "USER", birthday: "1993-07-22T00:00:00Z" },
  { username: "Carol", email: "carol@example.com", password: "password123", cpf: "12345678902", role: "ADMIN", birthday: "1988-11-30T00:00:00Z" },
  { username: "David", email: "david@example.com", password: "password123", cpf: "12345678903", role: "USER", birthday: "1990-06-15T00:00:00Z" },
  { username: "Eve", email: "eve@example.com", password: "password123", cpf: "12345678904", role: "USER", birthday: "1992-03-28T00:00:00Z" },
  { username: "Frank", email: "frank@example.com", password: "password123", cpf: "12345678905", role: "USER", birthday: "1994-12-05T00:00:00Z" },
  { username: "Grace", email: "grace@example.com", password: "password123", cpf: "12345678906", role: "USER", birthday: "1991-09-09T00:00:00Z" },
  { username: "Heidi", email: "heidi@example.com", password: "password123", cpf: "12345678907", role: "USER", birthday: "1989-07-19T00:00:00Z" },
  { username: "Ivan", email: "ivan@example.com", password: "password123", cpf: "12345678908", role: "USER", birthday: "1996-01-23T00:00:00Z" },
  { username: "Judy", email: "judy@example.com", password: "password123", cpf: "12345678909", role: "USER", birthday: "1993-05-11T00:00:00Z" },
];

const representatives = [
  {
    name: 'Bob',
    academic_entity_role: 'PRESIDENTE',
    cpf: '12345678900',
    phone: '(11) 12345-6789',
    email: 'bob@example.com',
    cep: '12345678',
    status: 'Ativo',
    
  },
  {
    name: 'Alice',
    academic_entity_role: 'SECRETÁRIO',
    cpf: '12345678901',
    phone: '(11) 98765-4321',
    email: 'alice@example.com',
    cep: '87654321',
    status: 'Ativo',
  },
  {
    name: "Tesoureiro",
    academic_entity_role: "TES",
    cpf: "33333333000100",
    phone: "(11) 33333-3333",
    email: "jose.almeida@university.edu",
    cep: "22222222",
    status: "Ativo",
  },
  {
    name: "Vice-Presidente",
    academic_entity_role: "VIC",
    cpf: "44444444000100",
    phone: "(11) 44444-4444",
    email: "ana.costa@university.edu",
    cep: "33333333",
    status: "Ativo",
  },
  {
    name: "Diretor",
    academic_entity_role: "DIR",
    cpf: "55555555000100",
    phone: "(11) 55555-5555",
    email: "paulo.souza@university.edu",
    status: "Ativo",
    cep: "44444444",
  },
  {
    name: "Coordenador",
    academic_entity_role: "COO",
    cpf: "66666666000100",
    email: "paulo.souza@university.edu",
    website: "",
    status: "Ativo",
    cep: "44444444",
  },
  {
    name: "Gerente",
    academic_entity_role: "GER",
    cpf: "55555555000100",
    phone: "(11) 55555-5555",
    email: "gerente@university.edu",
    cep: "55555555",
    status: "Ativo",
  },
];

const academicEntities = [
  {
    type: "ACADEMIC_CENTER",
    fantasyName: "Engenharia X",
    cnpj: "22345678000100",
    foundationDate: "2011-06-15T00:00:00Z",
    status: "Ativo",
    cep: "01234567",
    representativeId: 1,
  },
  {
    type: "ACADEMIC_CENTER",
    fantasyName: "Ciências Humanas",
    cnpj: "22345678000200",
    foundationDate: "2012-07-10T00:00:00Z",
    status: "Ativo",
    cep: "12345678",
    representativeId: 2,
  },
  {
    type: "ACADEMIC_CENTER",
    fantasyName: "Instituto de Biologia",
    cnpj: "22345678000300",
    foundationDate: "2013-08-05T00:00:00Z",
    status: "Ativo",
    cep: "23456789",
    representativeId: 3,
  },
  {
    type: "ACADEMIC_CENTER",
    fantasyName: "Faculdade de Direito",
    cnpj: "22345678000400",
    foundationDate: "2014-09-15T00:00:00Z",
    status: "Ativo",
    cep: "34567890",
    representativeId: 4,
  },
  {
    type: "ACADEMIC_CENTER",
    fantasyName: "Faculdade de Medicina",
    cnpj: "22345678000500",
    foundationDate: "2015-10-20T00:00:00Z",
    status: "Ativo",
    cep: "45678901",
    representativeId: 5,
  },
  {
    type: "ACADEMIC_CENTER",
    fantasyName: "Instituto de Matemática",
    cnpj: "22345678000600",
    foundationDate: "2016-11-25T00:00:00Z",
    status: "Ativo",
    cep: "56789012",
    representativeId: 6,
  },
  {
    type: "ACADEMIC_CENTER",
    fantasyName: "Faculdade de Psicologia",
    cnpj: "22345678000700",
    foundationDate: "2017-12-30T00:00:00Z",
    status: "Ativo",
    cep: "67890123",
    representativeId: 7,
  },
  {
    type: "ACADEMIC_CENTER",
    fantasyName: "Centro de Artes",
    cnpj: "22345678000800",
    foundationDate: "2018-01-15T00:00:00Z",
    status: "Ativo",
    cep: "78901234",
    representativeId: 8,
  },
  {
    type: "ACADEMIC_CENTER",
    fantasyName: "Instituto de Física",
    cnpj: "22345678000900",
    foundationDate: "2019-02-10T00:00:00Z",
    status: "Ativo",
    cep: "89012345",
    representativeId: 9,
  },
  {
    type: "ACADEMIC_CENTER",
    fantasyName: "Faculdade de Economia",
    cnpj: "22345678001000",
    foundationDate: "2020-03-05T00:00:00Z",
    status: "Ativo",
    cep: "90123456",
    representativeId: 10,
  },
];

const campaigns = [
  {
    name: "Campanha Solidária 2024",
    goal: 5000,
    startDate: "2024-01-01T00:00:00Z",
    endDate: "2024-12-31T00:00:00Z",
    academicEntityId: 1,
  },
  {
    name: "Doação de Livros",
    goal: 3000,
    startDate: "2024-03-01T00:00:00Z",
    endDate: "2024-09-30T00:00:00Z",
    academicEntityId: 2,
  },
  {
    name: "Campanha Alimentar",
    goal: 7000,
    startDate: "2024-05-01T00:00:00Z",
    endDate: "2024-11-30T00:00:00Z",
    academicEntityId: 3,
  },
  {
    name: "Campanha de Saúde",
    goal: 10000,
    startDate: "2024-06-15T00:00:00Z",
    endDate: "2024-12-15T00:00:00Z",
    academicEntityId: 4,
  },
  {
    name: "Campanha de Tecnologia",
    goal: 8000,
    startDate: "2024-07-01T00:00:00Z",
    endDate: "2024-12-31T00:00:00Z",
    academicEntityId: 5,
  },
  {
    name: "Campanha Cultural",
    goal: 6000,
    startDate: "2024-02-01T00:00:00Z",
    endDate: "2024-08-31T00:00:00Z",
    academicEntityId: 6,
  },
  {
    name: "Campanha Ambiental",
    goal: 4000,
    startDate: "2024-04-01T00:00:00Z",
    endDate: "2024-10-31T00:00:00Z",
    academicEntityId: 7,
  },
  {
    name: "Campanha Esportiva",
    goal: 9000,
    startDate: "2024-05-15T00:00:00Z",
    endDate: "2024-11-15T00:00:00Z",
    academicEntityId: 8,
  },
  {
    name: "Campanha de Infraestrutura",
    goal: 12000,
    startDate: "2024-01-10T00:00:00Z",
    endDate: "2024-12-20T00:00:00Z",
    academicEntityId: 9,
  },
  {
    name: "Campanha Educacional",
    goal: 11000,
    startDate: "2024-03-15T00:00:00Z",
    endDate: "2024-09-15T00:00:00Z",
    academicEntityId: 10,
  },
];

const donations = [
  { donated: 150, date: "2024-06-01T00:00:00Z", userId: 1, campaignId: 1 },
  { donated: 200, date: "2024-06-02T00:00:00Z", userId: 2, campaignId: 1 },
  { donated: 350, date: "2024-04-15T00:00:00Z", userId: 3, campaignId: 2 },
  { donated: 180, date: "2024-05-10T00:00:00Z", userId: 4, campaignId: 3 },
  { donated: 500, date: "2024-07-05T00:00:00Z", userId: 5, campaignId: 4 },
  { donated: 420, date: "2024-08-20T00:00:00Z", userId: 6, campaignId: 5 },
  { donated: 310, date: "2024-03-22T00:00:00Z", userId: 7, campaignId: 6 },
  { donated: 290, date: "2024-04-18T00:00:00Z", userId: 8, campaignId: 7 },
  { donated: 450, date: "2024-06-25T00:00:00Z", userId: 9, campaignId: 8 },
  { donated: 600, date: "2024-02-28T00:00:00Z", userId: 10, campaignId: 9 },
];



async function main() {
  await seedUsers();
  await seedRepresentatives();
  await seedAcademicEntities();
  await seedCampaigns();
  await seedDonations();
}


async function seedUsers() {
  for (const user of users) {
    await prisma.user.create({
      data: {
        username: user.username,
        userEmail: user.email,
        userPassword: user.password,
        userBirthdayDate: new Date(user.birthday),
        userCpf: user.cpf,
        userRoleAtributed: user.role,
      },
    });
    console.log(`✅ User ${user.username} seeded.`);
  }
}

async function seedRepresentatives() {
  console.log('🌱 Seeding representatives...');
  for (const representative of representatives) {
    await prisma.representative.create({
      data: {
        name: representative.name,
        cpf: representative.cpf,
        academic_entity_role: representative.academic_entity_role,
        phone: representative.phone ?? '',
        email: representative.email,
        cep: representative.cep,
        status: representative.status,
      },
    });
  }
  console.log('✅ Representatives seeded.');
}

async function seedAcademicEntities() {
  console.log('🌱 Seeding academic entities...');
  for (const academicEntity of academicEntities) {
    await prisma.academicEntity.create({
      data: {
        type: academicEntity.type as AcademicEntityType,
        fantasyName: academicEntity.fantasyName,
        cnpj: academicEntity.cnpj,
        foundationDate: new Date(academicEntity.foundationDate),
        status: academicEntity.status,
        cep: academicEntity.cep,
        representativeId: academicEntity.representativeId,
      },
    });
  }
  console.log('✅ Academic Entities seeded.');
}

async function seedCampaigns() {
  console.log('🌱 Seeding campaigns...');
  for (const campaign of campaigns) {
    await prisma.campaign.create({
      data: {
        name: campaign.name,
        goal: campaign.goal,
        startDate: new Date(campaign.startDate),
        endDate: new Date(campaign.endDate),
        academicEntityId: campaign.academicEntityId,
      },
    });
  }
  console.log('✅ Campaigns seeded.');
}

async function seedDonations() {
  console.log('🌱 Seeding donations...');
  for (const donation of donations) {
    await prisma.donation.create({
      data: {
        donated: donation.donated,
        date: new Date(donation.date),
        userId: donation.userId,
        campaignId: donation.campaignId,
      },
    });
  }
  console.log('✅ Donations seeded.');
}
async function run() {
  try {
    await main();
    console.log('🌟 Seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

export default run;
export { prisma, main, run };
