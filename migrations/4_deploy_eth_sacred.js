/* global artifacts */
require('dotenv').config({ path: '../.env' })
const ETHSacred = artifacts.require('ETHSacred')
const Verifier = artifacts.require('Verifier')
const hasherContract = artifacts.require('Hasher')


module.exports = function(deployer, network, accounts) {
  return deployer.then(async () => {
    const { MERKLE_TREE_HEIGHT, ETH_AMOUNT, OPERATOR_FEE } = process.env
    const verifier = await Verifier.deployed()
    const hasherInstance = await hasherContract.deployed()
    await ETHSacred.link(hasherContract, hasherInstance.address)
    const sacred = await deployer.deploy(ETHSacred, verifier.address, ETH_AMOUNT, MERKLE_TREE_HEIGHT, accounts[0], OPERATOR_FEE)
    console.log('ETHSacred\'s address ', sacred.address)
  })
}
