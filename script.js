const currencyList = document.getElementById('currency-list');

function fetchCurrencyRates() {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(response => response.json())
        .then(data => {
            // Очищаємо список валют перед оновленням
            currencyList.innerHTML = '';

            // Додаємо кожну валюту до списку
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

// Оновлюємо курс валют кожні 5 секунд
setInterval(fetchCurrencyRates, 5000);

// Отримуємо курс валют при завантаженні сторінки
fetchCurrencyRates();
