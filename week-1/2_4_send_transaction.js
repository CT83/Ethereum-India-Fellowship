var Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var signMessage = () => {
    msg="gEth is Money"
    web3.eth.sign(web3.eth.accounts[0], msg)
}
signMessage();