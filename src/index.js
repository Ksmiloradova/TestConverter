// TODO: Generate JSDocs and add tests.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Object for search exact currency value.
 */
const rates = {}
/**
 * An array for list of currencies.
 */
let curr = []
/**
 * Get currencies data from https://www.cbr-xml-daily.ru/daily_json.js.
 */
fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(function (result) {
    return result.json()
}).then(function (data) {
    let i = 0
    for (let currency in data.Valute) {
        rates[currency] = data.Valute[currency]
        curr[i++] = data.Valute[currency]
    }
}).then(
    ReactDOM.render(
        <>
            <App valutes={curr} values={rates}/>
        </>,
        document.getElementById('root')
    ))
