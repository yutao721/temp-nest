import {
  INestApplication,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { ResponseInterceptor } from '../interceptors/response.interceptor';
import { httpFilter } from '../filters/http.filter';
import provideSwaggerPlugin from './swagger.plugin';
import { validationOption } from '../config';
import * as cors from 'cors';

export async function providePlugins(app: INestApplication) {
  // 统一接口前缀
  app.setGlobalPrefix('api');
  // 接口多版本
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  // app.use(cors());
  // cors保护 允许跨域
  app.enableCors();
  // swagger文档支持
  provideSwaggerPlugin(app, {
    title: '新物集开发接口文档',
    description: '',
  });
  // 全局参数校验
  app.useGlobalPipes(
    // 入参数据验证
    new ValidationPipe(validationOption),
  );
  // 注册全局响应拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());

  // 注册全局异常过滤器
  // app.useGlobalFilters(new httpFilter());

  // 断开连接前需要关闭db连接
  // const dbService = app.get(DBService);
  // await dbService.enableShutdownHooks(app);
}
