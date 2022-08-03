## Description

命令行核心模块独立，参数拆分：

- `inline options` 命令行用户直接传入参数
- `mature options` 预处理参数

预处理后参数使用依赖注入，统一使用模块 `forRoot` 静态函数处理。

简单场景，直接使用 `Nest Module` 生命周期钩子执行核心逻辑。

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn build:watch
```

## Test

```bash
# unit tests
$ yarn test
```

## License

Nest is [MIT licensed](LICENSE).
