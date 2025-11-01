import { useState } from "react";
import InputBox from "./Components/InputBox";
import "./App.css";
import useInfo from "./hooks/useInfo";

function App() {
const [amount, setAmount] = useState(0);
const [fromCurrency, setFromCurrency] = useState("usd");
const [toCurrency, setToCurrency] = useState("inr");
const [convertedAmount, setConvertedAmount] = useState(0);

const currencyInfo = useInfo(fromCurrency);
const currencyOptions = Object.keys(currencyInfo || {});

const handleSwap = () => {
setFromCurrency(toCurrency);
setToCurrency(fromCurrency);
setAmount(convertedAmount);
};

const handleConvert = () => {
if (currencyInfo && currencyInfo[toCurrency]) {
setConvertedAmount(amount * currencyInfo[toCurrency]);
}
};

// ✅ Correct way: plain URL string (not markdown link)
const backgroundImage =
"https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg";

return (
<div
className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
style={{ backgroundImage: `url(${backgroundImage})` }}
> <div className="w-full max-w-md mx-auto border border-gray-200 rounded-lg p-5 backdrop-blur-sm bg-white/30">
<form
onSubmit={(e) => {
e.preventDefault();
handleConvert();
}}
>
{/* From Currency Input */} <div className="w-full mb-3">
<InputBox
label="From"
amount={amount}
currencyOptions={currencyOptions}
onAmountChange={(value) => setAmount(value)}
onCurrencyChange={(currency) => setFromCurrency(currency)}
selectCurrency={fromCurrency}
/> </div>


      {/* Swap Button */}
      <div className="relative w-full h-0.5 my-3">
        <button
          type="button"
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
          onClick={handleSwap}
        >
          Swap
        </button>
      </div>

      {/* To Currency Input */}
      <div className="w-full mb-4">
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={currencyOptions}
          onCurrencyChange={(currency) => setToCurrency(currency)}
          selectCurrency={toCurrency}
          amountDisable
        />
      </div>

      {/* Convert Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
      >
        Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
      </button>
    </form>
  </div>
</div>


);
}

export default App;
