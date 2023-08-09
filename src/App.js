import './App.css';
import money from './img/money.png'
import CurrencyComponent from './components/CurrencyComponent';
import { useEffect, useState } from 'react';

function App() {

  const url = 'https://api.exchangerate-api.com/v4/latest/USD';

  const [currencyChoice, setCurrencyChoice] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("THB");

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCurrencyChoice([...Object.keys(data.rates)]))
  }, []);


  return (
    <div>
      <img src={money} alt="Logo" className='money-img' />
      <h1>แอพแปลงสกุลเงิน(API)</h1>

      <div className='container'>
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurency={fromCurrency}
          changeCurrency={(e) => setFromCurrency(e.target.value)} />
        <div className='equal'>=</div>
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurency={toCurrency}
          changeCurrency={(e) => setToCurrency(e.target.value)} />
      </div>

    </div>
  );
}

export default App;
