import { Test, TestingModule } from '@nestjs/testing';

import { Hostess } from './hostess';

describe('Hostess', () => {
  let provider: Hostess;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Hostess],
    }).compile();

    provider = module.get<Hostess>(Hostess);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should make simple speech', () => {
    expect(provider.speech()).toEqual('hello world!');
  });
});
