# Sacred

This branch uses [Tornado's public trusted setup ceremony keys](https://github.com/tornadocash/tornado-core/releases/tag/v2.1)

## Introduction

The source code is orginiated from [tornado-core](https://github.com/tornadocash/tornado-core).

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

Deposit + Withdraw:
```bash
$ ./cli.js sacredtest eth 0.1 <CHAIN ID (42 for Kovan)> <RECIPIENT ADDR> --rpc <RPC URL>
```

Deposit:
```bash
$ ./cli.js deposit eth 0.1 --rpc <RPC URL>
```

Withdraw:
```bash
$ ./cli.js withdraw <NOTE> <RECIPIENT ADDR> --rpc <RPC URL>
```
