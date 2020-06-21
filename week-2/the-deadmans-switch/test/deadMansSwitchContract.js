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

        const time = Math.round(new Date().getTime() / 1000);
        await DMSContract.alive(accounts[1], { from: accounts[0] });

        const res = await DMSContract.getUserData();
        assert(res[0] == accounts[1])
        assert(res[1] <= time + 1000)

    })
})

contract("DeadMansSwitchContract", () => {
    it("Check if alive beacon is sent successfully", async () => {
        const DMSContract = await DeadMansSwitchContract.deployed();
        assert(DMSContract.address !== '');
        assert(false)
        // var address = "0x4d3CC1afDACB24a0174C3DFa6B17F48d75fb6C7F";
        // var res = await DMSContract.registerAddress(address);
        // assert(res == address + " registered successfully!")
    })
})

contract("DeadMansSwitchContract", () => {
    it("Check if drain on death works", async () => {
        const DMSContract = await DeadMansSwitchContract.deployed();
        assert(DMSContract.address !== '');
        var address = "";
        assert(false)
        // var res = await DMSContract.registerAddress()();
        // assert(res == address + " registered successfully!")
    })
})