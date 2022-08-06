import React from 'react';

const CurrencyItem = ({convertions}) => {

    return convertions.map((todo) => (
        <div key={todo.ID.toString()}
             className={'converter-row'}
        >
            <div>
                {todo.CharCode}<br/>
                {parseFloat(todo.Value).toFixed(2)}
            </div>
        </div>
    ));
};

export default CurrencyItem;
