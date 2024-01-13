import Image from "next/image";
import Link from "next/link";

import { getProducts } from "../actions/action";
const Menu = async () => {
  const data = await getProducts();

  return (
    <div className="max-w-6xl mx-auto p-4 px-8">
      <div className="text-center flex mb-16 flex-col items-center gap-4">
        <h3 className="text-sm">NOT JUST A PIZZA, BUT LIFESTYLE</h3>
        <h1 className="text-5xl font-amita">OUR MENU</h1>
        <p className="text-sm text-gray-300 max-w-xl leading-6">
          And yes, we're pizza poeple. But we're also human poeple, we lead with
          our hearts, we believe in giving back to the global communit.Join us,
          welcome to our pizzeria!
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {data.slice(0, 10).map((meal) => (
          <Link href={`/${meal.id}`} key={meal.id}>
            <div className="flex items-center gap-8">
              <div className="relative h-36 w-36">
                <Image
                  className="object-contain"
                  src={meal.images[0]}
                  alt="meal"
                  fill
                />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-white font-medium">{meal.title}</h4>
                <p className="text-xs max-w-[200px] text-gray-400">
                  {meal.description}
                </p>
                <span className="font-dancing text-amber-700 font-semibold">
                  {meal.price[0]}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
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
