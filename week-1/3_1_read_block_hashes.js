var Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var readHashes = async function () {
    console.log(`id, size`);
    for (let i = 0; i <= 128; i++) {
        await web3.eth.getBlock(i).then((block) => {
            console.log(block.hash);
        })
    }
}
readHashes();