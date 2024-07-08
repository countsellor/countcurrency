const fetch = require('node-fetch');

const apiKey = 'your_api_key';
const fromCurrency = 'USD';
const toCurrency = 'IDR';
const amount = 100;

fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`)
  .then(response => response.json())
  .then(data => {
    const rate = data.conversion_rates[toCurrency];
    const convertedAmount = rate * amount;
    console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`);
  })
  .catch(error => console.error('Error:', error));
