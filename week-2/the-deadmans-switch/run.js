async function main() {

    var Web3 = require('web3');
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

    let DMSJson = require('./build/contracts/DeadmansSwitch.json')


    var abi = [
        {
            "constant": true,
            "inputs": [],
            "name": "getValueOfabc",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]

    console.log(abi);
    console.log(address);

    var address = "0x17280dC5d3da927eba1cDBE7dbf66aD6808B79FC";
    var dmsContract = new web3.eth.Contract(abi, address);

    var res = await dmsContract.methods.getValueOfabc()
    console.log(res)
}

main();