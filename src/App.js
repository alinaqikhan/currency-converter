import React, { useEffect, useState } from "react";
import axios from "axios";
import { Converter } from "./components/converter";

const URL =
  "http://api.exchangeratesapi.io/v1/latest?access_key=3005f50d2e88f6b23f2698283d9f900a";

export const App = () => {
  const [currentOptions, setCurrentOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(URL);
        const { data } = response;
        setCurrentOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(Object.keys(data.rates)[0]);
        setExchangeRate(data.rates[Object.keys(data.rates)[0]]);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      async function getLatestData() {
        try {
          const response = await axios.get(
            `${URL}&base=${fromCurrency}&symbols=${toCurrency}`
          );
          const { data } = response;
          setExchangeRate(data.rates[toCurrency]);
        } catch (error) {
          console.error(error);
        }
      }
      getLatestData();
    }
  }, [amount, fromCurrency, toCurrency]);

  const HandleFromAmountChange = (event) => {
    setAmount(event.target.value);
    setAmountInFromCurrency(true);
  };

  const HandleToAmountChange = (event) => {
    setAmount(event.target.value);
    setAmountInFromCurrency(false);
  };

  return (
    <div>
      <div className="max-w-4xl  m-auto pb-6 pt-14">
        <div className="pt-14 bg-white px-6 pb-14 shadow rounded-md">
          <h1 className="text-black text-2xl mb-10 font-semibold">
            Currency Exchange Rate
          </h1>
          <div className="flex flex-row mb-6 gap-9 items-end">
            <Converter
              currentOptions={currentOptions}
              selectedCurrency={fromCurrency}
              onChangeCurrencyHandler={(event) =>
                setFromCurrency(event.target.value)
              }
              amount={fromAmount}
              onChangeAmountHandler={HandleFromAmountChange}
            />
            <div className="border-2 rounded-full p-4 cursor-pointer border-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 17"
                aria-hidden="true"
                className="w-4 h-4 text-blue-500 miscellany___StyledIconSwap-sc-1r08bla-1 fZJuOo"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M11.726 1.273l2.387 2.394H.667V5h13.446l-2.386 2.393.94.94 4-4-4-4-.94.94zM.666 12.333l4 4 .94-.94L3.22 13h13.447v-1.333H3.22l2.386-2.394-.94-.94-4 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <Converter
              currentOptions={currentOptions}
              selectedCurrency={toCurrency}
              onChangeCurrencyHandler={(event) =>
                setToCurrency(event.target.value)
              }
              amount={toAmount}
              onChangeAmountHandler={HandleToAmountChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
