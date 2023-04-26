import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionModule } from './collection/collection.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CollectionModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
