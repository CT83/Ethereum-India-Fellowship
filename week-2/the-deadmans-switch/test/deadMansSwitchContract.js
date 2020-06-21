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

        //transfer balance to contract
        var Web3 = require('web3');
        const url = "http://127.0.0.1:7545";
        var web3 = new Web3(new Web3.providers.HttpProvider(url));

        let DMSJson = require('../build/contracts/DeadmansSwitch.json')

        var abi = DMSJson["abi"];
        var contractAddress = DMSContract.address;
        var dmsContract = new web3.eth.Contract(abi, contractAddress);
        let send = await web3.eth.sendTransaction({ from: accounts[0], to: contractAddress, value: web3.utils.toWei("1", "ether") });
        console.log(send)

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