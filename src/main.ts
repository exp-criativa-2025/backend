import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.enableCors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific methods
    allowedHeaders: 'Content-Type, Authorization', // Allow specific headers
  });

  const configSwaggewr = new DocumentBuilder()
  .setTitle('TREKO API Backend')
  .setDescription('Documentação oficial da API do TREKO')
  .setVersion('1.0')
  .build();

  const documentFactory = SwaggerModule.createDocument(app, configSwaggewr);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap().catch((error) => {
  console.error(error);
});
