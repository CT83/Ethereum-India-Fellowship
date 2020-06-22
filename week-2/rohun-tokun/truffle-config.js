require('dotenv').config();
const PrivateKeyProvider = require("truffle-privatekey-provider");

console.log(process.env.INFURA_API_KEY)

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    goerli: {
      provider: () => new PrivateKeyProvider(process.env.PRIVATE_KEY, "https://goerli.infura.io/v3/" + process.env.INFURA_API_KEY),
      gasPrice: 5000000000, // 50 gwei,
      network_id: 5,
    },
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
