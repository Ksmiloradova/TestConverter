import React, {useState, useEffect, useRef} from 'react';

function CurrencyForm(props) {
    const [input, setInput] = useState('15 usd in rub');

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="converter-form">
            {
                <>
                    <input
                        placeholder=""
                        value={input}
                        onChange={handleChange}
                        name="text"
                        className="converter-input"
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className="converter-button">
                        Convert
                    </button>
                </>
            }
        </form>
    );
}

export default CurrencyForm;
