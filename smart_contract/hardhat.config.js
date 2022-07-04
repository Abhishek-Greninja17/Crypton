// https://eth-goerli.alchemyapi.io/v2/wFiDvrkfxuVaXjL3E0vj4PMVwH01Umn5

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.alchemyapi.io/v2/wFiDvrkfxuVaXjL3E0vj4PMVwH01Umn5',
      accounts: ['e07291ebfc59b8badf7cc578d5bcf0e73e188133a8912167bb3caa12a82fdec3']
    }
  }
}
