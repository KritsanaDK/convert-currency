import './CurrencyComponent.css'

const CurrencyComponent = (props) => {
    const { currencyChoice, selectCurency, changeCurrency, amount, onChangeAmont } = props;


    return (
        <div className='currency'>
            <select name="" id="" value={selectCurency} onChange={changeCurrency}>

                {currencyChoice.map((choice) =>
                    <option key={choice} value={choice}>{choice}</option>
                )}
            </select>
            <input type="number" value={amount} onChange={onChangeAmont}/>

        </div>
    )
}

export default CurrencyComponent
