import './App.css';
import money from './img/money.png'
import CurrentcyComponent from './components/CurrentcyComponent';

function App() {
  return (
    <div>
      <img src={money} alt="Logo" />
      <h1>แอพแปรงสกุลเงิน(API)</h1>

      <div className='container'>
        <CurrentcyComponent />
        <div className='equal'>=</div>
        <CurrentcyComponent />
      </div>

    </div>
  );
}

export default App;
