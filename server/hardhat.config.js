require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_GOERLI_URL = process.env.ALCHEMY_GOERLI_URL
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY


module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: ALCHEMY_GOERLI_URL ,
      accounts: [ACCOUNT_PRIVATE_KEY],
    }
  }
};
