var DeadmansSwitch = artifacts.require("DeadmansSwitch");

module.exports = function (deployer) {
  deployer.deploy(DeadmansSwitch);
};