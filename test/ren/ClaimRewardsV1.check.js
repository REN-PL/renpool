// const RenToken = artifacts.require("RenToken");
// const DarknodePayment = artifacts.require("DarknodePayment");
// const DarknodePaymentStore = artifacts.require("DarknodePaymentStore");
// const ClaimlessRewards = artifacts.require("ClaimlessRewards");
// const DarknodeRegistryStore = artifacts.require("DarknodeRegistryStore");
// const DarknodeRegistryProxy = artifacts.require("DarknodeRegistryProxy");
// const DarknodeRegistryLogicV1 = artifacts.require("DarknodeRegistryLogicV1");
// const DarknodeSlasher = artifacts.require("DarknodeSlasher");
// const Protocol = artifacts.require("Protocol");
// const ClaimRewards = artifacts.require("ClaimRewards");
// const GetOperatorDarknodes = artifacts.require("GetOperatorDarknodes");
// const RenProxyAdmin = artifacts.require("RenProxyAdmin");

// const { network: { config: { chainId, build, claimRewardsAddr } } } = require('hardhat');
// const { expect } = require('chai').use(require('chai-string'));
// const ClaimRewards = require(`@renproject/sol/build/${build}/ClaimRewards.json`);
// const ClaimRewardsProxy = require(`@renproject/sol/build/${build}/ClaimRewardsProxy.json`);

// describe('RenProject/ClaimRewards contracts check', function () {

//   it(`should ensure compiled contract networks include chain ID ${chainId}`, async () => {
//     expect(Object.keys(ClaimRewards.networks)).to.include(chainId.toString());
//     expect(Object.keys(ClaimRewardsProxy.networks)).to.include(chainId.toString());
//   });

//   it(`should ensure compiled contract address is ${claimRewardsAddr}`, async () => {
//     expect(ClaimRewardsProxy.networks[chainId].address).to.equalIgnoreCase(claimRewardsAddr);
//   });

//   it(`should ensure a ClaimRewards contract is deployed at ${claimRewardsAddr}`, async () => {
//     const [signer] = await ethers.getSigners();
//     const contract = new ethers.Contract(claimRewardsAddr, ClaimRewards.abi, signer);
//     await contract.VERSION();
//     await contract.currentEpoch();
//   });

// });
