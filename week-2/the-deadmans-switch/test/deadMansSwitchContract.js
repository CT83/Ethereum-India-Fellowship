const DeadMansSwitchContract = artifacts.require("DeadmansSwitch");

contract ("DeadMansSwitchContract", () => {
    it("Should deploy smart contract properly", async () => {
        const DMSContract = await DeadMansSwitchContract.deployed();
        console.log(DMSContract.address);
        assert(DMSContract.address !== '');

        var res = await DMSContract.getValueOfabc();
        assert(res == "Hello")
    })
})