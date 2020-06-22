var RohunTokun = artifacts.require("RohunTokun");

module.exports = function (deployer) {
  deployer.deploy(RohunTokun, 1000);
};