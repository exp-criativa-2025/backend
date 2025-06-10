/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { PrismaClient, AcademicEntityType } from '@prisma/client';

const prisma = new PrismaClient();

// Data embedded directly in the file (replace with your actual data)
const users = [
  { username: "Alice", userEmail: "alice@example.com", userPassword: "password123", userCpf: "12345678900", roleAtributed: "USER", birthdayDate: "1995-04-10T00:00:00Z" },
  { username: "Bob", userEmail: "bob@example.com", userPassword: "password123", userCpf: "12345678901", roleAtributed: "USER", birthdayDate: "1993-07-22T00:00:00Z" },
  { username: "Carol", userEmail: "carol@example.com", userPassword: "password123", userCpf: "12345678902", roleAtributed: "ADMIN", birthdayDate: "1988-11-30T00:00:00Z" },
  { username: "David", userEmail: "david@example.com", userPassword: "password123", userCpf: "12345678903", roleAtributed: "USER", birthdayDate: "1990-06-15T00:00:00Z" },
  { username: "Eve", userEmail: "eve@example.com", userPassword: "password123", userCpf: "12345678904", roleAtributed: "USER", birthdayDate: "1992-03-28T00:00:00Z" },
  { username: "Frank", userEmail: "frank@example.com", userPassword: "password123", userCpf: "12345678905", roleAtributed: "USER", birthdayDate: "1994-12-05T00:00:00Z" },
  { username: "Grace", userEmail: "grace@example.com", userPassword: "password123", userCpf: "12345678906", roleAtributed: "USER", birthdayDate: "1991-09-09T00:00:00Z" },
  { username: "Heidi", userEmail: "heidi@example.com", userPassword: "password123", userCpf: "12345678907", roleAtributed: "USER", birthdayDate: "1989-07-19T00:00:00Z" },
  { username: "Ivan", userEmail: "ivan@example.com", userPassword: "password123", userCpf: "12345678908", roleAtributed: "USER", birthdayDate: "1996-01-23T00:00:00Z" },
  { username: "Judy", userEmail: "judy@example.com", userPassword: "password123", userCpf: "12345678909", roleAtributed: "USER", birthdayDate: "1993-05-11T00:00:00Z" },
];

const representatives = [
  {
    representativeName: "Presidente",
    representativeAcronym: "PRES",
    representativeCnpj: "11111111000100",
    representativeFantasyName: "Carlos Silva",
    representativeSocialReason: "Carlos Silva",
    representativeId: "rep001",
    university: "Universidade Federal X",
    campus: "Campus Central",
    membersCount: 0,
    foundationDate: "2015-01-01T00:00:00Z",
    phone: "(11) 11111-1111",
    email: "carlos.silva@university.edu",
    website: "",
    status: "Ativo",
    cep: "00000000",
    facebook: "https://facebook.com/carlos.silva",
    instagram: "https://instagram.com/carlos.silva",
  },
  {
    representativeName: "Secretário",
    representativeAcronym: "SEC",
    representativeCnpj: "22222222000100",
    representativeFantasyName: "Maria Oliveira",
    representativeSocialReason: "Maria Oliveira",
    representativeId: "rep002",
    university: "Universidade Federal X",
    campus: "Campus Central",
    membersCount: 0,
    foundationDate: "2016-02-02T00:00:00Z",
    phone: "(11) 22222-2222",
    email: "maria.oliveira@university.edu",
    website: "",
    status: "Ativo",
    cep: "11111111",
    facebook: "https://facebook.com/maria.oliveira",
    instagram: "https://instagram.com/maria.oliveira",
  },
  {
    representativeName: "Tesoureiro",
    representativeAcronym: "TES",
    representativeCnpj: "33333333000100",
    representativeFantasyName: "José Almeida",
    representativeSocialReason: "José Almeida",
    representativeId: "rep003",
    university: "Universidade Federal X",
    campus: "Campus Central",
    membersCount: 0,
    foundationDate: "2017-03-03T00:00:00Z",
    phone: "(11) 33333-3333",
    email: "jose.almeida@university.edu",
    website: "",
    status: "Ativo",
    cep: "22222222",
    facebook: "https://facebook.com/jose.almeida",
    instagram: "https://instagram.com/jose.almeida",
  },
  {
    representativeName: "Vice-Presidente",
    representativeAcronym: "VP",
    representativeCnpj: "44444444000100",
    representativeFantasyName: "Ana Costa",
    representativeSocialReason: "Ana Costa",
    representativeId: "rep004",
    university: "Universidade Federal X",
    campus: "Campus Central",
    membersCount: 0,
    foundationDate: "2018-04-04T00:00:00Z",
    phone: "(11) 44444-4444",
    email: "ana.costa@university.edu",
    website: "",
    status: "Ativo",
    cep: "33333333",
    facebook: "https://facebook.com/ana.costa",
    instagram: "https://instagram.com/ana.costa",
  },
  {
    representativeName: "Diretor",
    representativeAcronym: "DIR",
    representativeCnpj: "55555555000100",
    representativeFantasyName: "Paulo Souza",
    representativeSocialReason: "Paulo Souza",
    representativeId: "rep005",
    university: "Universidade Federal X",
    campus: "Campus Central",
    membersCount: 0,
    foundationDate: "2019-05-05T00:00:00Z",
    phone: "(11) 55555-5555",
    email: "paulo.souza@university.edu",
    website: "",
    status: "Ativo",
    cep: "44444444",
    facebook: "https://facebook.com/paulo.souza",
    instagram: "https://instagram.com/paulo.souza",
  },
  {
    representativeName: "Coordenador",
    representativeAcronym: "COO",
    representativeCnpj: "66666666000100",
    representativeFantasyName: "Fernanda Lima",
    representativeSocialReason: "Fernanda Lima",
    representativeId: "rep006",
    university: "Universidade Federal X",
    campus: "Campus Central",
    membersCount: 0,
    foundationDate: "2020-06-06T00:00:00Z",
    phone: "(11) 66666-6666",
    email: "fernanda.lima@university.edu",
    website: "",
    status: "Ativo",
    cep: "55555555",
    facebook: "https://facebook.com/fernanda.lima",
    instagram: "https://instagram.com/fernanda.lima",
  },
  {
    representativeName: "Supervisor",
    representativeAcronym: "SUP",
    representativeCnpj: "77777777000100",
    representativeFantasyName: "Ricardo Mendes",
    representativeSocialReason: "Ricardo Mendes",
    representativeId: "rep007",
    university: "Universidade Federal X",
    campus: "Campus Central",
    membersCount: 0,
    foundationDate: "2021-07-07T00:00:00Z",
    phone: "(11) 77777-7777",
    email: "ricardo.mendes@university.edu",
    website: "",
    status: "Ativo",
    cep: "66666666",
    facebook: "https://facebook.com/ricardo.mendes",
    instagram: "https://instagram.com/ricardo.mendes",
  },
  {
    representativeName: "Assessor",
    representativeAcronym: "ASS",
    representativeCnpj: "88888888000100",
    representativeFantasyName: "Luciana Ferreira",
    representativeSocialReason: "Luciana Ferreira",
    representativeId: "rep008",
    university: "Universidade Federal X",
    campus: "Campus Central",
    membersCount: 0,
    foundationDate: "2022-08-08T00:00:00Z",
    phone: "(11) 88888-8888",
    email: "luciana.ferreira@university.edu",
    website: "",
    status: "Ativo",
    cep: "77777777",
    facebook: "https://facebook.com/luciana.ferreira",
    instagram: "https://instagram.com/luciana.ferreira",
  },
  {
    representativeName: "Consultor",
    representativeAcronym: "CON",
    representativeCnpj: "99999999000100",
    representativeFantasyName: "Marcelo Ribeiro",
    representativeSocialReason: "Marcelo Ribeiro",
    representativeId: "rep009",
    university: "Universidade Federal X",
    campus: "Campus Central",
    membersCount: 0,
    foundationDate: "2023-09-09T00:00:00Z",
    phone: "(11) 99999-9999",
    email: "marcelo.ribeiro@university.edu",
    website: "",
    status: "Ativo",
    cep: "88888888",
    facebook: "https://facebook.com/marcelo.ribeiro",
    instagram: "https://instagram.com/marcelo.ribeiro",
  },
  {
    representativeName: "Diretor Administrativo",
    representativeAcronym: "DIRADM",
    representativeCnpj: "10101010000100",
    representativeFantasyName: "Patricia Alves",
    representativeSocialReason: "Patricia Alves",
    representativeId: "rep010",
    university: "Universidade Federal X",
    campus: "Campus Central",
    membersCount: 0,
    foundationDate: "2024-10-10T00:00:00Z",
    phone: "(11) 10101-0101",
    email: "patricia.alves@university.edu",
    website: "",
    status: "Ativo",
    cep: "99999999",
    facebook: "https://facebook.com/patricia.alves",
    instagram: "https://instagram.com/patricia.alves",
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
  { donation_name: "Doe Alimentos", name: "Alice Donation", donated: 150, date: "2024-06-01T00:00:00Z", userId: 1, campaignId: 1 },
  { donation_name: "Ajude a Causa", name: "Bob Donation", donated: 200, date: "2024-06-02T00:00:00Z", userId: 2, campaignId: 1 },
  { donation_name: "Livros para Todos", name: "Carol Donation", donated: 350, date: "2024-04-15T00:00:00Z", userId: 3, campaignId: 2 },
  { donation_name: "Doe Alimentos", name: "David Donation", donated: 180, date: "2024-05-10T00:00:00Z", userId: 4, campaignId: 3 },
  { donation_name: "Saúde para Todos", name: "Eve Donation", donated: 500, date: "2024-07-05T00:00:00Z", userId: 5, campaignId: 4 },
  { donation_name: "Tecnologia Solidária", name: "Frank Donation", donated: 420, date: "2024-08-20T00:00:00Z", userId: 6, campaignId: 5 },
  { donation_name: "Doe Cultura", name: "Grace Donation", donated: 310, date: "2024-03-22T00:00:00Z", userId: 7, campaignId: 6 },
  { donation_name: "Meio Ambiente", name: "Heidi Donation", donated: 290, date: "2024-04-18T00:00:00Z", userId: 8, campaignId: 7 },
  { donation_name: "Esporte para Todos", name: "Ivan Donation", donated: 450, date: "2024-06-25T00:00:00Z", userId: 9, campaignId: 8 },
  { donation_name: "Infraestrutura Já", name: "Judy Donation", donated: 600, date: "2024-02-28T00:00:00Z", userId: 10, campaignId: 9 },
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
        userEmail: user.userEmail,
        userPassword: user.userPassword,
        userBirthdayDate: new Date(user.birthdayDate),
        userCpf: user.userCpf,
        userRoleAtributed: user.roleAtributed,
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
        tipo: representative.representativeName,
        sigla: representative.representativeAcronym,
        cnpj: representative.representativeCnpj,
        nome_fantasia: representative.representativeFantasyName,
        razao_social: representative.representativeSocialReason,
        representant_id: representative.representativeId,
        universidade: representative.university,
        campus: representative.campus,
        numero_membros: representative.membersCount,
        data_fundacao: new Date(representative.foundationDate),
        telefone: representative.phone,
        email: representative.email,
        site: representative.website,
        status: representative.status,
        cep: representative.cep,
        facebook: representative.facebook,
        instagram: representative.instagram,
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
        donation_name: donation.donation_name,
        name: donation.name,
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
