import React from "react";

export const Converter = () => {
  return (
   
        <div className="flex-1">
          <label className="font-bold text-sm mb-3 block" htmlFor="text">
            Amount
          </label>
          <div className="flex">
          <input
            type="number"
            className="focus:outline-none w-full border-2 rounded-l-lg min-h-50 pl-3 pr-10 py-2"
            size="lg"
            placeholder="Enter amount"
          />
          <select className="bg-blue-500 focus:outline-none p-1 rounded-r-lg text-white">
              <option value="PKR">PKR</option>
          </select>
          </div>
          
        </div>
  );
};