const ba = require('bitcoinaverage');

var publicKey = 'YTk4YWI0MjBiMzI4NDJjMTk2NzEwN2I5MzI0MTc4OGM';
var secretKey = 'OWQ4OWVmZmJlZjZkNDhiYzg2NDJkMzRkY2M0Zjg2OWMxNDU1NmJlNzZiYjA0ZmZiYmNhOTRkZTA5ZGU2YTcyMw';
var ws = ba.websocketClient(publicKey, secretKey);

// Connecting to the local ticker and printing BTCEUR price data; you can try it with 'global'
ws.connectToTickerWebsocket('global', 'BTCEUR', function (response) {
    console.log(JSON.stringify(response, null, 4));
});