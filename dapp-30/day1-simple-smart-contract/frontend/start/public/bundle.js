var contractABI = []
var contractAddress = '0x87aeFBF2A50319626d38b02B9376A455b1dF0730'
var web3 = new Web3('http://127.0.0.1:9545')
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress)

console.log(simpleSmartContract)

web3.eth.getAccounts().then(console.log)