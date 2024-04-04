import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-900 h-dvh grid place-items-center">
      <div className="bg-neutral-300 text-black p-3 h-fit w-96 rounded-sm flex justify-center">
        <div className="h-full flex flex-col w-full items-center gap-2">
          <div className="flex h-fit justify-between w-full">
            <label htmlFor="currency">Account Currency: </label>
            <select name="currency" id="">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="flex h-fit justify-between w-full">
            <label htmlFor="pairs">Pair: </label>
            <select name="pairs" id="">
              <option value="EURUSD">EURUSD</option>
              <option value="EURUSD">USDJPY</option>
              <option value="EURUSD">AUDUSD</option>
            </select>
          </div>
          <div className="flex h-fit justify-between w-full">
            <label htmlFor="risk">Risk, %: </label>
            <input type="text" name="" id="" placeholder="0.5" />
          </div>
          <div className="flex h-fit justify-between w-full">
            <label htmlFor="risk">Account Balance: </label>
            <input type="text" name="" id="" placeholder="5000" />
          </div>
          <div className="flex h-fit justify-between w-full">
            <label htmlFor="risk">Stop-Loss, Pips: </label>
            <input type="text" name="" id="" placeholder="10" />
          </div>
          <div className="flex gap-2">
            <button
              type="reset"
              className="bg-zinc-300 p-1 hover:bg-zinc-400 rounded-md"
            >
              Reset
            </button>
            <button
              type="button"
              className="bg-orange-500 p-1 rounded-md hover:bg-orange-600"
            >
              Calculate
            </button>
          </div>
          <h2>Results</h2>
          <div className="flex h-fit justify-between w-full">
            <label htmlFor="risk">Money at Risk: </label>
            <input type="text" name="" id="" disabled />
          </div>
          <div className="flex h-fit justify-between w-full">
            <label htmlFor="risk">Units: </label>
            <input type="text" name="" id="" disabled />
          </div>
          <div className="flex h-fit justify-between w-full">
            <label htmlFor="risk">Standard Lot Size: </label>
            <input type="text" name="" id="" disabled />
          </div>
        </div>
      </div>
    </main>
  );
}
