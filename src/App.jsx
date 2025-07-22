import { useState } from 'react'
import './App.css'
import InputBox from "./components/inputBox.jsx"
import useCurrencyInfo from "./hooks/useCurrencyInfo.js"




function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")
  
 
  

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
   
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#020617] to-[#1e1b4b] text-white">
      {/* Floating currency icons */}
      <div className="absolute animate-pulse text-yellow-300 text-4xl left-10 top-20">$</div>
      <div className="absolute animate-bounce text-yellow-300 text-4xl right-14 top-40">€</div>
      <div className="absolute animate-spin-slow text-yellow-300 text-3xl left-1/3 bottom-32">¥</div>
      <div className="absolute animate-bounce text-yellow-300 text-4xl right-1/4 bottom-20">£</div>

      <div className="w-full min-h-screen bg-transparent flex items-center justify-center px-4">
        <div className="relative  w-full max-w-md">
          {/* Card Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl  font-bold mb-4">💱 Currency Converter 💱 </h1>
            <p className="text-xl text-yellow-100">by NamasteCode 🙏</p>
          </div>
          
          {/* Main Card */}
          <div className="w-full backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  className="bg-blend-color-burn"
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onAmountChange={(value) => setAmount(value)}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  amountDisable={false}
                  currencyDisable={false}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-1 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable={true}
                  currencyDisable={false}
                />
              </div>
              <button type="submit" className="w-full bg-blue-700 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
