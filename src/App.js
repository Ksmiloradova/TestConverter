import React from 'react';
import './App.css';
import CurrencyList from './components/CurrencyList';

function App(valutes, values) {
    return (
        <div className="converter-app">
            <CurrencyList rates={valutes} currencies={values}/>
        </div>
    );
}

export default App;
