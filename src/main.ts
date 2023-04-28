import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { providePlugins } from './plugins';
import provideMiddleware from './middleware';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

const LISTEN_PORT = 8527;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 插件
  await providePlugins(app);
  // 中间件
  await provideMiddleware(app);
  await app.listen(LISTEN_PORT);
}
bootstrap().then(() =>
  Logger.log(`Listening on ${LISTEN_PORT} port`),
);

