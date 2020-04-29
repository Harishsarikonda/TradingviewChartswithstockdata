const ba = require('bitcoinaverage');

var publicKey = 'YTk4YWI0MjBiMzI4NDJjMTk2NzEwN2I5MzI0MTc4OGM';
var secretKey = 'OWQ4OWVmZmJlZjZkNDhiYzg2NDJkMzRkY2M0Zjg2OWMxNDU1NmJlNzZiYjA0ZmZiYmNhOTRkZTA5ZGU2YTcyMw';
var restClient = ba.restfulClient(publicKey, secretKey);

restClient.allSymbols(function (response) {
    console.log(response);
});

restClient.symbolsLocal(function (response) {
    console.log(response);
});

restClient.symbolsGlobal(function(response) {
    console.log(response);
});

restClient.exchangeRatesLocal(function(response) {
    console.log(response);
});

restClient.exchangeRatesGlobal(function(response) {
    console.log(response);
});

restClient.serverTime(function(response) {
    console.log(response);
});