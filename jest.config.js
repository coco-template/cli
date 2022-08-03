/** @type {import("ts-jest").InitialOptionsTsJest} */
module.exports = {
  rootDir: 'src',
  moduleFileExtensions: ['js', 'json', 'ts', 'node'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'html'],
  // ts-jest 保持 typescript 编译配置一致性
  globals: {
    'ts-jest': {
      tsconfig: require('./tsconfig.json').compilerOptions,
    },
  },
};
