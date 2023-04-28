import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionModule } from './collection/collection.module';
import { PrismaModule } from './prisma/prisma.module';
import allModules from './modules';

@Module({
  imports: [CollectionModule, PrismaModule, ...allModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
