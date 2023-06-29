import { INestApplication, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    // 使用中间件
    this.$use((params, next) => {
      this.useUserHook(params);
      return next(params);
    });
    Logger.log('Prisma connected to database successfully', 'PrismaDB');
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  private useUserHook(params: Prisma.MiddlewareParams) {
    // Logger.log(params)
    // if (params.model !== 'User') return;
    // if (params.action === 'findFirst') {
    //   // 密码加盐处理
    //   if (params.args.where.password) {
    //     // eslint-disable-next-line no-param-reassign
    //     params.args.where.password = encodeMD5(params.args.where.password);
    //   }
    // }
    // if (params.action === 'create') {
    //   // 密码加盐处理
    //   if (params.args.data.password) {
    //     // eslint-disable-next-line no-param-reassign
    //     params.args.data.password = encodeMD5(params.args.data.password);
    //   }
    // }
  }
}
