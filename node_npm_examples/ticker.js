const ba = require('bitcoinaverage');

var publicKey = 'YTk4YWI0MjBiMzI4NDJjMTk2NzEwN2I5MzI0MTc4OGM';
var secretKey = 'OWQ4OWVmZmJlZjZkNDhiYzg2NDJkMzRkY2M0Zjg2OWMxNDU1NmJlNzZiYjA0ZmZiYmNhOTRkZTA5ZGU2YTcyMw';
var restClient = ba.restfulClient(publicKey, secretKey);

// Get local ticker for BTCUSD and ETHUSD
//restClient.tickerAllLocal('BTC,ETH', 'USD', function (response) {
//    console.log(response);
//});

// Get global ticker for BTCUSD and BTCEUR
//restClient.tickerAllGlobal('BTC', 'USD,EUR', function(response) {
 //   console.log(response);
//});

// Get local ticker for BTCUSD
restClient.tickerLocalPerSymbol('BTCUSD', function (response) {
    console.log(response);
});

