import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({
    origin: [
    'https://dewcntd.github.io',
    ],
    methods: ["GET", "POST"],
  });
  await app.listen(3000);
}
bootstrap();
