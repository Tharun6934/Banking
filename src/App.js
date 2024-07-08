import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState(900);

  const handleClick1 = () => {
    setAmount(amount - 100);
  };

  const handleClick2 = () => {
    setAmount(amount - 150);
  };

  const handleClick3 = () => {
    setAmount(amount - 200);
  };

  const handleClick4 = () => {
    setAmount(amount - 250);
  };
  return (
    <div className="flex justify-center  items-center h-screen w-full">
      <div className="bg-blue-900  p-8 rounded-2xl ">
        <p className="text-white mb-10 text-3xl"> Tharun Kumar</p>
        <div className="flex mb-10 justify-between gap-80">
          <p className="text-white text-2xl">Your Balance</p>
          <p className="text-white text-2xl "> {amount} IN RUPEES</p>
        </div>
        <h3 className="text-white font-semibold text-5xl mb-8">Withdraw</h3>
        <h3 className="text-white text-base mb-12">
          CHOOSE AMOUNT (IN RUPEES)
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            className="text-white text-3xl rounded-lg border font-bold bg-slate-400"
            onClick={handleClick1}
          >
            100
          </button>
          <button
            className="text-white text-3xl rounded-lg border font-bold bg-slate-400"
            onClick={handleClick2}
          >
            150
          </button>
          <button
            className="text-white bg-slate-400 text-3xl border font-bold rounded-lg"
            onClick={handleClick3}
          >
            200
          </button>
          <button
            className="text-white bg-slate-400 text-3xl border font-bold rounded-lg"
            onClick={handleClick4}
          >
            250
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
