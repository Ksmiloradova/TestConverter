import React, {useState} from 'react';
import CurrencyForm from './CurrencyForm';
import CurrencyItem from './CurrencyItem';

function CurrencyList(rates) {
    /**
     * For CurrencyForm.
     */
    const [conversions] = useState(rates.rates.valutes);
    const currencies = rates.rates.values
    /**
     * Result of convert method.
     */
    const [result, setResult] = useState('');

    /**
     * Get value of currency by its name.
     * @param inputCurrency Input char value for search in currencies.
     * @returns {DeclarationDomain.Value|UsageDomain.Value|number}
     */
    const parseCurrency = inputCurrency => {
        if (inputCurrency.toUpperCase() === 'RUB') {
            return 1;
        }
        try {
            return currencies[inputCurrency.toUpperCase()].Value;
        } catch (e) {
            return -1;
        }
    }

    const convert = todo => {
        if (!todo.text || /^\s*$/.test(todo.text) || todo.text.split(' ').length !== 4) {
            return;
        }
        const splitedInput = todo.text.split(' ')
        // Input value.
        const first = parseFloat(splitedInput[0])
        // Start valute value.
        const second = parseCurrency(splitedInput[1])
        // Result valute value.
        const third = parseCurrency(splitedInput[3])
        if (Number.isNaN(first) || second < 0 || third < 0) {
            return;
        }
        setResult((first * second / third).toFixed(2).toString() + ' ' + splitedInput[3].toUpperCase())
    };

    return (
        <>
            <h1>Currency Converter</h1>
            <CurrencyForm onSubmit={convert}/>
            <h1>{result}</h1>
            <CurrencyItem
                convertions={conversions}
            />
        </>
    );
}

export default CurrencyList;
