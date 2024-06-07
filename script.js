const currencyList = document.getElementById('currency-list');

function fetchCurrencyRates() {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(response => response.json())
        .then(data => {
            currencyList.innerHTML = '';

            data.forEach(currency => {
                const currencyItem = document.createElement('div');
                currencyItem.classList.add('currency-item');

                const currencyCode = document.createElement('span');
                currencyCode.classList.add('currency-code');
                currencyCode.textContent = currency.cc;

                const currencyRate = document.createElement('span');
                currencyRate.classList.add('currency-rate');
                currencyRate.textContent = currency.rate.toFixed(2);

                currencyItem.appendChild(currencyCode);
                currencyItem.appendChild(currencyRate);

                currencyList.appendChild(currencyItem);
            });
        })
        .catch(error => console.log('Помилка при отриманні даних:', error));
}

setInterval(fetchCurrencyRates, 5000);

fetchCurrencyRates();
