const { assert } = require('console');

const DeadMansSwitchContract = artifacts.require("DeadmansSwitch");

contract("DeadMansSwitchContract", () => {
    it("Should deploy smart contract properly", async () => {
        const DMSContract = await DeadMansSwitchContract.deployed();
        assert(DMSContract.address !== '');
    })
})


contract("DeadMansSwitchContract", accounts => {
    it("Register new address successfully", async () => {
        const DMSContract = await DeadMansSwitchContract.deployed();
        assert(DMSContract.address !== '');

        // const time = Math.round(new Date().getTime() / 1000);
        await DMSContract.register(accounts[1], { from: accounts[0] });
        await DMSContract.still_alive({ from: accounts[0] });

        const res = await DMSContract.getData();
        console.log(res)
        assert(res[0] == accounts[0])
        assert(res[1] <= accounts[1])
    })
})

contract("DeadMansSwitchContract", accounts => {
    it("Check if alive beacon can be sent successfully", async () => {
        const DMSContract = await DeadMansSwitchContract.deployed();
        assert(DMSContract.address !== '');

        await DMSContract.register(accounts[1], { from: accounts[0] });
        const time = Math.round(new Date().getTime() / 1000);
        await DMSContract.still_alive({ from: accounts[0] });

        const res = await DMSContract.getData();
        console.log(res)
        assert(res[0] == accounts[0])
        assert(res[1] <= accounts[1])
        assert(res[2].toNumber() <= time + 1000)
    })
})

contract("DeadMansSwitchContract", accounts => {
    it("Check if drain on death works", async () => {
        const DMSContract = await DeadMansSwitchContract.deployed();
        assert(DMSContract.address !== '');

        await DMSContract.register(accounts[1], { from: accounts[0] });
        const time = Math.round(new Date().getTime() / 1000);
        await DMSContract.still_alive({ from: accounts[0] });

        const res = await DMSContract.getData();
        assert(res[0] == accounts[0])
        assert(res[1] <= accounts[1])
        assert(res[2].toNumber() <= time + 1000)

        await DMSContract.drainIfDead();

        const resDrained = await DMSContract.getDrained();
        assert(resDrained == false);
        const { promisify } = require('util')
        const sleep = promisify(setTimeout)

        sleep(100).then(() => {
            assert(resDrained == false);
        })

        sleep(3000).then(() => {
            assert(resDrained == true);
        })
    })
})