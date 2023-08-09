import "./App.css";
import money from "./img/money.png";
import CurrencyComponent from "./components/CurrencyComponent";
import { useEffect, useState } from "react";

function App() {
  

  const [currencyChoice, setCurrencyChoice] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("THB");

  const [amount, setAmount] = useState(1);
  const [exchangerate, setExchangerate] = useState(0);
    const [checkFromCurency, setCheckFromCurency] = useState(true);

  let fromAmout, toAmout;

  if (checkFromCurency) {
    fromAmout = amount;
    toAmout = (amount * exchangerate).toFixed(2);
  }
  else { 
    toAmout = amount;
    fromAmout = (amount / exchangerate).toFixed(2);
  }

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency} `;
    fetch(url)
      .then((res) => res.json())
    // .then(data => console.log(data.rates[toCurrency]))
      .then((data) => { 
          setCurrencyChoice([...Object.keys(data.rates)])
          setExchangerate(data.rates[toCurrency])
      }
      );
  }, [fromCurrency, toCurrency]);

  const amontFromCurrency = (e) => { 
    setAmount(e.target.value)
    setCheckFromCurency(true);
    

  }

  const amontToCurrency = (e) => { 
    setAmount(e.target.value)
    setCheckFromCurency(false);
  }


  
  console.log(exchangerate)

  return (
    <div>
      <img src={money} alt="Logo" className="money-img" />
      <h1>แอพแปลงสกุลเงิน(API)</h1>

      <div className="container">
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurency={fromCurrency}
          changeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmout}
           onChangeAmont={ amontFromCurrency}
        />
        <div className="equal">=</div>
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurency={toCurrency}
          changeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmout}
          onChangeAmont={ amontToCurrency}
        />
      </div>
    </div>
  );
}

export default App;
