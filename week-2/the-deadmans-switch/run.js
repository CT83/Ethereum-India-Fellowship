var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

let DMSJson = require('./build/contracts/DeadmansSwitch.json')

var abi = DMSJson["abi"];
var address = DMSJson["networks"]['5777']['address'];
var contract = new web3.eth.Contract(abi, address);

var res = contract.methods.getValueOfabc().call().then(
    console.log("test")
)
