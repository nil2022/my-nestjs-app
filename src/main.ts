import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';

async function bootstrap() {
  await ConfigModule.envVariablesLoaded;
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`\nApplication is running on: http://localhost:${PORT}`);
  });
}
bootstrap();
