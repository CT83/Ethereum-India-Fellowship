const { assert } = require('console');

const RohunTokunContract = artifacts.require("RohunTokun");

contract("RohunTokunContract", () => {
    it("Should deploy smart contract properly", async () => {
        const RTContract = await RohunTokunContract.deployed();
        assert(RTContract.address !== '');
    })
})


contract("RohunTokunContract", accounts => {
    it("should transfer balance succesfully", async () => {
        const RTContract = await RohunTokunContract.deployed();
        assert(RTContract.address !== '');

        var oldSupply = await RTContract.totalSupply();
        oldSupply = oldSupply.toNumber();
        assert(oldSupply == 1000);

        await RTContract.transfer(accounts[1], 2, { from: accounts[0] });
        const acc1Bal = await RTContract.getBalance(accounts[1]);
        assert(acc1Bal == 2);
    })
})
