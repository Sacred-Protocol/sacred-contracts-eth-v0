require('dotenv').config()

module.exports = {
  deployments: {
    netId1: {
      eth: {
        instanceAddress: {
          '0.1': undefined,
          '1': undefined,
          '10': undefined,
          '100': undefined
        },
        symbol: 'ETH',
        decimals: 18
      },
    },
    netId42: {
      eth: {
        instanceAddress: {
          '0.1': '0x3e35bb3D9536298F0b2D87347ad15147C068547B',
          '1': '0x802d24797E19480f93aEaF8d3e5E0115e2A507F9',
          '10': '0x08035984E42705E18fE1b5AA29AEE91d75f6b842',
          '100': '0xD8bA5d188B082Cd9959c0242f37405c4B84Cb72E'
        },
        symbol: 'ETH',
        decimals: 18
      },
      ceth: {
        instanceAddress: {
          '1': '0x6504342B28d20853f87BC3E2e63012c30AB8080C',
        },
        tokenAddress: '0x41b5844f4680a8c38fbb695b7f9cfd1f64474a72',
        symbol: 'cETH',
        decimals: 8
      },
    },
    netId80001: {
      eth: {
        instanceAddress: {
          '0.1': '0xA64101A1e0527B6057C22cB132b7E79E7351340A',
          '1': '0x26fb1eD6B478176ce73b5fb4B351dC066BbF77A8',
          '10': '0xa49Bd69F7a2FF83d7E0EDd7F6F51FdE9C771e67c',
          '100': '0x3FAc4fCa73dCaE1E8bDa5A51DB32E88E8F07230a'
        },
        symbol: 'ETH',
        decimals: 18
      }
    }
  }
}
