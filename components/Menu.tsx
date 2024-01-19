import Link from "next/link";

import { Suspense } from "react";
import MenuList from "./MenuList";
import FoodSkl from "./skeleton/FoodSkl";
const Menu = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 px-8">
      <div className="text-center flex mb-16 flex-col items-center gap-4">
        <h3 className="text-sm">NOT JUST A PIZZA, BUT LIFESTYLE</h3>
        <h1 className="text-5xl font-amita">OUR MENU</h1>
        <p className="text-sm text-gray-300 max-w-xl leading-6">
          And yes, we are pizza poeple. But we are also human poeple, we lead
          with our hearts, we believe in giving back to the global communit.Join
          us, welcome to our pizzeria!
        </p>
      </div>
      <Suspense
        fallback={
          <div className="grid gap-10 sm:grid-cols-2">
            {[...Array(6)].map((c, i) => (
              <FoodSkl key={i} />
            ))}
          </div>
        }
      >
        <MenuList />
      </Suspense>

      <div className="flex justify-center  mt-16 ">
        <Link
          className="px-4 py-2 hover:bg-transparent border border-amber-600 hover:text-amber-600 duration-300 bg-amber-600 text-black "
          href="/store"
        >
          VIEW MENU {">"}{" "}
        </Link>
      </div>
    </div>
  );
};

export default Menu;
