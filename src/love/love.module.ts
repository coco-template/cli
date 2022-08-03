import { DynamicModule, Inject, Module, OnApplicationBootstrap } from '@nestjs/common';
import path from 'path';

import { Hostess } from './hostess';
import { InlineOptions } from './interface/inline-options.interface';
import type { MatureOptions } from './interface/mature-options.interface';
import { MATURE_OPTIONS } from './mature-options';

@Module({})
export class LoveModule implements OnApplicationBootstrap {
  static forRoot(source: string, options: InlineOptions): DynamicModule {
    const cwd = process.cwd();

    return {
      module: LoveModule,
      providers: [
        {
          provide: MATURE_OPTIONS,
          useValue: {
            source: path.resolve(cwd, source),
            watch: !!options.watch,
          },
        },
        Hostess,
      ],
    };
  }

  // 非 class 依赖注入，使用更自然的属性注入
  @Inject(MATURE_OPTIONS) private readonly matureOptions: MatureOptions;

  constructor(private readonly hostess: Hostess) {}

  async onApplicationBootstrap() {
    console.log(this.hostess.speech());
  }
}
