var BetaToken = artifacts.require("BetaToken");

module.exports = function (deployer) {
    deployer.deploy(BetaToken);
};