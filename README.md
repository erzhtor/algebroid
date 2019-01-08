# Algebroid
JavaScript library + tools for calculating math expressions from string

### Prerequisites
- Node.js version 8 or above
- [Lerna](https://github.com/lerna/lerna) installed globally (`npm i -g lerna`)

## Get Started
The repository consist of:
- [`@algebroid/core`](packages/core): library for parsing and calculating math expression from string
- [`@algebroid/cli`](apps/cli): command line interface to calculate math expressions from string
- [`@algebroid/frontend`](apps/frontend): web UI to calculate math expressions from string

> **Note:** for detailed information on each package click on the name of the package above.
### Clone
`git clone https://github.com/erzhtor/algebroid`

### Install dependencies
`lerna bootstrap`

### Run
- **Frontend**
    `npm start --prefix apps/frontend`
- **CLI (comand line interface)**
    `npm start --prefix apps/cli -- "{your expression}"`