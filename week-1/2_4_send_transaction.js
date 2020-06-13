const dotenv = require("dotenv");
dotenv.config();

var Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var sendEth = async function () {
    var tx = {
        from: process.env.ADDRESS,
        to: "0xafa3f8684e54059998bc3a7b0d2b0da075154d66",
        value: web3.utils.toWei("0.02", "ether")
    }
    var res = await web3.eth.personal.sendTransaction(tx,process.env.PASSPHRASE,)
    console.log(res)
}
sendEth();