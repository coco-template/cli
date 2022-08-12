import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { program } from 'commander';

import { InlineOptions, LoveModule } from './love';

program
  // 绝大部分配置来源于配置文件
  .argument('<source>', 'whatever inline arguments')
  // 持续文件同步选项
  .option('-w, --watch', 'whatever inline options')
  .action(async (source: string, options: InlineOptions) => {
    /* ==================================================== */
    /* =========== 创建 DI 容器 ========== */
    /* ==================================================== */
    const app = await NestFactory.createApplicationContext(LoveModule.forRoot(source, options), {
      // 命令行，禁用内部日志
      logger: ['error'],
    });

    /* ==================================================== */
    /* =========== 资源释放 ========== */
    /* ==================================================== */
    await app.close();
  });

program.parseAsync(process.argv);
