// --- Unit Conversion Data ---
const conversionRates = {
    mass: {
        'kg': 1,
        'g': 1000,
        'lb': 2.20462,
    },
    length: {
        'm': 1,
        'cm': 100,
        'in': 39.3701,
        'ft': 3.28084,
    }
};

// --- Unit Conversion Functions ---

function populateUnits() {
    const categorySelect = document.getElementById('unit-category');
    const fromSelect = document.getElementById('unit-from');
    const toSelect = document.getElementById('unit-to');
    const category = categorySelect.value;
    const units = conversionRates[category];

    // Clear existing options
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';

    // Populate new options
    for (const unit in units) {
        const optionFrom = new Option(unit, unit);
        const optionTo = new Option(unit, unit);
        fromSelect.add(optionFrom);
        toSelect.add(optionTo);
    }
}

function convertUnit() {
    const category = document.getElementById('unit-category').value;
    const value = parseFloat(document.getElementById('unit-input').value);
    const fromUnit = document.getElementById('unit-from').value;
    const toUnit = document.getElementById('unit-to').value;
    const resultDisplay = document.getElementById('unit-result');

    if (isNaN(value) || value === null) {
        resultDisplay.textContent = 'Result: Please enter a valid number.';
        return;
    }

    const rates = conversionRates[category];
    const baseValue = value / rates[fromUnit]; // Convert to base unit (e.g., kg or m)
    const result = baseValue * rates[toUnit]; // Convert from base unit to target unit

    resultDisplay.textContent = `Result: ${value} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
}

// Initialize units on load
document.addEventListener('DOMContentLoaded', populateUnits);


// --- Currency Conversion Data (Mock Rates) ---
// Base: 1 USD
const mockCurrencyRates = {
    'USD': 1.0,
    'EUR': 0.92, // 1 USD = 0.92 EUR
    'INR': 83.00, // 1 USD = 83.00 INR
};

// --- Currency Conversion Functions ---

function convertCurrency() {
    const amount = parseFloat(document.getElementById('currency-input').value);
    const from = document.getElementById('currency-from').value;
    const to = document.getElementById('currency-to').value;
    const resultDisplay = document.getElementById('currency-result');

    if (isNaN(amount) || amount === null) {
        resultDisplay.textContent = 'Result: Please enter a valid amount.';
        return;
    }

    const rateFrom = mockCurrencyRates[from];
    const rateTo = mockCurrencyRates[to];

    // Convert 'from' currency to the base (USD)
    const baseAmount = amount / rateFrom;

    // Convert base (USD) amount to 'to' currency
    const result = baseAmount * rateTo;

    resultDisplay.textContent = `Result: ${amount} ${from} = ${result.toFixed(2)} ${to}`;
}