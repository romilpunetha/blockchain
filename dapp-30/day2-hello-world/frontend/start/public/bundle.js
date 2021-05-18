var helloWorldABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function",
      "signature": "0x19ff1d21"
    }
  ];
  
  var helloWorldAddress = '0x87aeFBF2A50319626d38b02B9376A455b1dF0730';
  var web3 = new Web3('http://localhost:9545');
  var helloWorld = new web3.eth.Contract(helloWorldABI, helloWorldAddress);
  
  document.addEventListener('DOMContentLoaded', () => {
    helloWorld.methods.hello().call()
    .then(result => {
      document.getElementById('hello').innerHTML = result;
    });
  });
  