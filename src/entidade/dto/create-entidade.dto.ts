export class CreateEntidadeDto {
  nameEntity !: string;
}

// model Entidade {
//   id Int @id @default(autoincrement())
//   nameEntity String
//   cnpjEntity String  @unique @db.VarChar(14)
//   legalRepresentative String
//   typeEntity String
//   description String

//   @@map("Entidades")
// }
