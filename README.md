# Sacred

## Introduction

This is a variant of Tornado cash compatible with the [Aave protocol](https://aave.com/). The source code is orginiated from [tornado-core](https://github.com/tornadocash/tornado-core).

## Installation

### Dependencies

1. node 12
2. yarn
3. zkutil (`brew install rust && cargo install zkutil`)

### Build
Install dependencies then build:
```bash
$ yarn
$ yarn build
```

### Deploy
```bash
$ cp .env.example .env
Add all necessary parameters in .env
$ yarn migrate:kovan
```
To deploy other pool sizes, change the ETH_AMOUNT parameter.

### Test

Update contract addresses in `config.js`
```bash
$ ./cli.js sacredtest eth 0.1 <RECIPIENT ADDR> --rpc <RPC URL>
```

## Contract guidance

TBA.
