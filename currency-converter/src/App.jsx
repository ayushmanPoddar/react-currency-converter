import { useState, useEffect } from 'react'
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);

  function swapCurrencies() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  function convertCurrency() {
    const rate = currencyInfo[toCurrency.toLowerCase()];

    if (!rate) return;

    const result = amount * rate;
    setConvertedAmount(result);
  }

  return (
    // 1. Entire Screen
    <div className="min-h-screen flex justify-center items-center bg-slate-200">

      {/* 2. Main Card */}
      <div className="w-96 bg-white rounded-xl shadow-lg p-6">

        {/* 3. Heading */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Currency Converter
        </h1>

        {/* 4. FROM Section */}
        {/* User enters the amount and selects the source currency. */}
        <div className="bg-slate-100 rounded-lg p-4 mb-4">

          {/* Label Row */}
          <div className="flex justify-between mb-3">
            <label className="text-sm text-gray-600">From</label>
          </div>

          {/* Content Row */}
          {/* Contains Amount Input (left) and Currency Dropdown (right). */}
          <div className="flex justify-between items-center gap-4">

            {/* Left Side : Amount Input */}
            <div className="flex-1">
              <input
                type="number"
                onChange={(evt) => { setAmount(Number(evt.target.value)) }}
                value={amount}
                placeholder="Amount"
                className="w-full bg-transparent outline-none text-lg"
              />
            </div>

            {/* Right Side : Currency Dropdown */}
            <div>
              <select className="bg-white rounded-md p-2 border"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {Object.keys(currencyInfo).map((currency) => (
                  <option key={currency} value={currency.toUpperCase()}>
                    {currency.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

          </div>

        </div>

        {/* 5. Swap Button */}
        {/* Swaps the From and To currencies later. */}
        <div className="flex justify-center -my-2 relative z-10">
          <button
            onClick={swapCurrencies}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg border-4 border-white shadow-md"
          >
            Swap
          </button>
        </div>

        {/* 6. TO Section */}
        {/* Shows the converted amount and destination currency. */}
        <div className="bg-slate-100 rounded-lg p-4 mt-4 mb-6">

          {/* Label Row */}
          <div className="flex justify-between mb-3">
            <label className="text-sm text-gray-600">To</label>
          </div>

          {/* Content Row */}
          <div className="flex justify-between items-center gap-4">

            {/* Left Side : Converted Amount */}
            <div className="flex-1">
              <input
                type="number"
                value={convertedAmount}
                readOnly
                className="w-full bg-transparent outline-none text-lg"
              />
            </div>

            {/* Right Side : Currency Dropdown */}
            <div>
              <select
                className="bg-white rounded-md p-2 border"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {Object.keys(currencyInfo).map((currency) => (
                  <option key={currency} value={currency.toUpperCase()}>
                    {currency.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

          </div>

        </div>

        {/* 7. Convert Button */}
        {/* Will trigger the currency conversion later. */}
        <button
          onClick={convertCurrency}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Convert
        </button>

      </div>

    </div>
  )
}

export default App
