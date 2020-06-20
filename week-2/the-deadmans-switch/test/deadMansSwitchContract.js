const DeadMansSwitchContract = artifacts.require("DeadmansSwitch");

DeadMansSwitchContract("DeadMansSwitchContract", () => {
    it("Should deploy smart contract properly", async () => {
        const DMSContract = await DeadMansSwitchContract.deployed();
        console.log(DMSContract.address);
        assert(DMSContract.address !== '');
    })
})