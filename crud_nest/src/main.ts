import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove chaves que não estão no DTO
      forbidNonWhitelisted: true, // retorna erro se tiver chaves que não estão no DTO
      transform: false, // transforma os tipos de acordo com o DTO
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
