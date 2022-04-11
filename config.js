require('dotenv').config()

module.exports = {
  deployments: {
    netId1: {
      eth: {
        instanceAddress: {
          0.1: "0x21A85A1F70Cf0EDC3ee4B91d479011deef2193F1",
          1: undefined,
          10: undefined,
          100: undefined
        },
        symbol: 'ETH',
        decimals: 18
      },
    },
    netId4: {
      eth: {
        instanceAddress: {
          0.1: "0x21A85A1F70Cf0EDC3ee4B91d479011deef2193F1",
          1: "0x2132986d56F4737920d11fCec3dCAa0e9AbE6EC9",
          10: "0x6D6Ec1443fEe828A64DaD87B28195B2661c846E8",
          100: "0x73b39BEBdfAf0bbD19bAA1a0aFE26AF9BA54c2Ea"
        },
        symbol: 'ETH',
        decimals: 18
      }
    },
    netId42: {
      eth: {
        instanceAddress: {
          0.1: "0x21A85A1F70Cf0EDC3ee4B91d479011deef2193F1",
          1: "0x2132986d56F4737920d11fCec3dCAa0e9AbE6EC9",
          10: "0x6D6Ec1443fEe828A64DaD87B28195B2661c846E8",
          100: "0x73b39BEBdfAf0bbD19bAA1a0aFE26AF9BA54c2Ea"
        },
        symbol: 'ETH',
        decimals: 18
      }
    },
    netId80001: {
      eth: {
        instanceAddress: {
          0.1: "0x21A85A1F70Cf0EDC3ee4B91d479011deef2193F1",
          1: "0x2132986d56F4737920d11fCec3dCAa0e9AbE6EC9",
          10: "0x6D6Ec1443fEe828A64DaD87B28195B2661c846E8",
          100: "0x73b39BEBdfAf0bbD19bAA1a0aFE26AF9BA54c2Ea"
        },
        symbol: 'ETH',
        decimals: 18
      }
    }
  }
}
