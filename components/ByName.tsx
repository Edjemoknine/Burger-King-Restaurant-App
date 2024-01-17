"use client";

const ByName = ({ setName }) => {
  return (
    <div className="bg-[#1a1c1f] p-6">
      <h4 className="text-2xl uppercase mb-4">Menu Categories</h4>
      <span className="flex items-center justify-between border-b border-gray-400 py-1 mt-2">
        {" "}
        <label htmlFor="pizza">Pizzas</label>
        <input
          onChange={(e) => setName("pizza")}
          type="radio"
          id="pizza"
          name="cat"
        />
      </span>
      <span className="flex items-center justify-between border-b border-gray-400 py-1 mt-2">
        {" "}
        <label htmlFor="burger">Burgers</label>
        <input
          onChange={(e) => setName("burger")}
          type="radio"
          id="burger"
          name="cat"
        />
      </span>
      <span className="flex items-center justify-between border-b border-gray-400 py-1 mt-2">
        {" "}
        <label htmlFor="dessert">Desserts</label>
        <input
          onChange={(e) => setName("dessert")}
          type="radio"
          id="dessert"
          name="cat"
        />
      </span>
      <span className="flex items-center justify-between border-b border-gray-400 py-1 mt-2">
        {" "}
        <label htmlFor="drink">Drinks</label>
        <input
          onChange={(e) => setName("drink")}
          type="radio"
          id="drink"
          name="cat"
        />
      </span>
      <span className="flex items-center justify-between border-b border-gray-400 py-1 mt-2">
        {" "}
        <label htmlFor="pasta">Pasta</label>
        <input
          onChange={(e) => setName("pasta")}
          type="radio"
          id="pasta"
          name="cat"
        />
      </span>
      <span className="flex items-center justify-between border-b border-gray-400 py-1 mt-2">
        {" "}
        <label htmlFor="salad">Salads</label>
        <input
          onChange={(e) => setName("salad")}
          type="radio"
          id="salad"
          name="cat"
        />
      </span>
      <button
        onClick={() => setName("")}
        className="px-4 py-2 border-gray-300 hover:bg-amber-700 duration-300 border mt-5 w-full"
      >
        Clear
      </button>
    </div>
  );
};

export default ByName;
