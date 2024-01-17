import React from "react";

const ByPrice = ({ setPrice, price }) => {
  return (
    <div className="bg-[#1a1c1f] flex flex-col gap-6 mt-6 p-6">
      <h4 className="uppercase text-xl mb-3">filter by price</h4>
      <div>
        <input
          onChange={(e) => setPrice(e.target.value)}
          className="w-full cursor-pointer"
          type="range"
          min={0}
          max={20}
          value={price}
        />
        <p className="flex justify-between">
          <span>${price}</span>
          <span>$20</span>
        </p>
      </div>
      <button className="px-4 py-2 border border-gray-400 hover:bg-amber-700 duration-300 text-white ">
        FILTER
      </button>
      B
    </div>
  );
};

export default ByPrice;
