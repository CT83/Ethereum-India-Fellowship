const dotenv = require("dotenv");
dotenv.config();

var Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var signMessage = async function () {
    await web3.eth.personal.unlockAccount(process.env.ADDRESS, process.env.PASSPHRASE, 60000)
    msg = "gEth is Money"
    signature = await web3.eth.sign(msg, process.env.ADDRESS)
    console.log(signature)

    // verify that the signature is valid
    const signingAddress = web3.eth.accounts.recover(msg, signature);
    console.log(signingAddress)
}
signMessage();