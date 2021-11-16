require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

const networks = {
  kovan: {
    url: `https://eth-kovan.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
    contracts: {
      renTokenAddr: '0x2CD647668494c1B15743AB283A0f980d90a87394',
      renBTCAddr: '0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f',
      topRenTokenHolderAddr: '0xfd974e09363f7f823ce360d2a2006733aeb3e297',
      darknodeRegistryAddr: '0x9954C9F839b31E82bc9CA98F234313112D269712',
      darknodeRegistryStoreAddr: '0x9daa16aA19e37f3de06197a8B5E638EC5e487392',
      darknodePaymentAddr: '0x023f2e94C3eb128D3bFa6317a3fF860BF93C1616',
      claimRewardsAddr: '0x7F8f7Aff44a63f61b7a120Ef2c34Ea2c4D9bD216',
      gatewayAddr: '0x0000000000000000000000000000000000000000',
    }
  }
};

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  networks: {
    hardhat: {
      forking: {
        url: networks.kovan.url,
        blockNumber: 28381671,
      },
      chainId: 42,
      ...networks.kovan.contracts,
    },
    mainnet: {
      forking: {
        url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
        blockNumber: 13611808,
      },
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      renTokenAddr: '0x2CD647668494c1B15743AB283A0f980d90a87394',
    },
    kovan: {
      url: networks.kovan.url,
      accounts: [process.env.PRIVATE_KEY],
      ...networks.kovan.contracts,
    },
  },
  mocha: {
    timeout: 60000
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
