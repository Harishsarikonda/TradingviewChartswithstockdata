const ba = require('bitcoinaverage');

var publicKey = 'YTk4YWI0MjBiMzI4NDJjMTk2NzEwN2I5MzI0MTc4OGM';
var secretKey = 'OWQ4OWVmZmJlZjZkNDhiYzg2NDJkMzRkY2M0Zjg2OWMxNDU1NmJlNzZiYjA0ZmZiYmNhOTRkZTA5ZGU2YTcyMw';
var ws = ba.websocketClient(publicKey, secretKey);

// Connecting to the Exchange websocket and printing Bitstamp data
ws.connectToExchangeWebsocket('bitstamp', function (response) {
    console.log(JSON.stringify(response, null, 4));
});
