import React from "react";
import { Converter } from "./components/converter";

export const App = () => {
  return (
    <div>
      <div className="max-w-4xl  m-auto pb-6 pt-14">
        <div className="pt-14 bg-white px-6 pb-14 shadow rounded-md">
          <h1 className="text-black text-2xl mb-10 font-semibold">
            Currency Exchange Rate
          </h1>
          <div className="flex flex-row mb-6 gap-9 items-end">
            <Converter />
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
            <Converter />
          </div>
        </div>
      </div>
    </div>
  );
};
