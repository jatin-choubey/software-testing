import React, { useState } from 'react';
import './App.css';

const rates = {
  USD: { EUR: 0.90, INR: 81.85, GBP: 0.80, YEN: 134.00 },
  EUR: { USD: 1.11, INR: 90.88, GBP: 0.89, YEN: 149.00 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0098, YEN: 2.00 },
  GBP: { USD: 1.24, EUR: 1.12, INR: 101.68, YEN: 166.00 },
  YEN: { USD: 0.00750, EUR: 0.00670, INR: 0.610, GBP: 0.00600}
};

function App() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [result, setResult] = useState('');

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleFromChange(event) {
    setFrom(event.target.value);
  }

  function handleToChange(event) {
    setTo(event.target.value);
  }

  function handleConvert() {
    if (amount === '' || isNaN(amount) || amount < 0) {
      alert('invalid');
      return;
    }

    if (from === to) {
      setResult(amount);
      return;
    }

    const converted = amount * rates[from][to];
    setResult(converted.toFixed(2));
  }

  return (
    <div className="App">
      <h1 className='h1'>Currency Converter</h1>
      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
      <br /><br />
      <label htmlFor="from">From:</label>
      <select id="from" value={from} onChange={handleFromChange}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option> 
        <option value="GBP">GBP</option>
        <option value="YEN">YEN</option>
      </select>
      <br /><br />
      <label htmlFor="to">To:</label>
      <select id="to" value={to} onChange={handleToChange}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="YEN">YEN</option>
      </select>
      <br /><br />
      <button onClick={handleConvert}>Convert</button>
      <br /><br />
      <label htmlFor="result">Result:</label>
      <input type="text" id="result" value={result} readOnly />
    </div>
  );
}

export default App;
