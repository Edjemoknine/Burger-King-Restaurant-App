import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className={` relative h-96 py-20 flex items-center px-8`}
      >
        <div className="relative z-10 flex flex-col text-center">
          <h1 className="font-dancing -mb-16 text-7xl font-bold">About Us</h1>
          <Image
            src={"/underG.png"}
            className="text-white"
            alt="about"
            width={400}
            height={200}
          />
        </div>
        <div className="absolute bg-black/70 inset-0"></div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 p-4 px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <Image
              // className="mb-6"
              src={"/knife.svg"}
              alt=""
              width={80}
              height={80}
            />
            <h1 className="text-3xl font-semibold">
              Our Restaurant Is A Collective Of Amazing People Striving To Build
              Delightful Italain Cuisine.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae, repellat velit itaque distinctio, sit debitis sunt
              perspiciatis incidunt numquam quas quae. Qui aliquam nam officiis
              mollitia repellat velit itaque distinctio, sit debitis sunt
              perspiciatis incidunt numquam quas quae. Qui aliquam nam officiis
              mollitia temporibus sint aliquid voluptate.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              sunt reiciendis animi facere laudantium architecto eveniet, qui
              aut velit fugiat esse distinctio quam repellat, hic eligendi earum
              consequatur corporis nostrum!
            </p>
          </div>
          <div className="md:flex hidden gap-6">
            <div className="relative overflow-hidden rounded-lg h-full flex-1">
              <Image
                className="object-cover w-full h-full"
                src={
                  "https://plus.unsplash.com/premium_photo-1669150849080-241bf2ec9b4a?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZvb2R8ZW58MHx8MHx8fDA%3D"
                }
                alt=""
                fill
              />
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <div className="relative overflow-hidden rounded-lg  h-1/2 flex-1">
                <Image
                  className="object-cover w-full h-full"
                  src={
                    "https://images.unsplash.com/photo-1565895405172-75376697fb03?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
                  }
                  alt=""
                  fill
                />
              </div>
              <div className="relative overflow-hidden rounded-lg h-1/2  flex-1">
                <Image
                  className="object-cover w-full h-full"
                  src={
                    "https://images.unsplash.com/photo-1572715376701-98568319fd0b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 my-16">
          <button className="px-4 py-2 hover:text-white hover:bg-amber-700  hover:border-amber-700 border-gray-400 border text-gray-400">
            BOOK NOW {">"}
          </button>
          <button className="px-4 py-2 bg-amber-700 hover:text-gray-400 hover:border-gray-400 border-amber-700 border hover:bg-transparent ">
            VIEW MENU {">"}
          </button>
        </div>

        <div className="grid md:grid-cols-3 min-h-[700px]">
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[350px] relative">
              <Image
                src={
                  "https://images.pexels.com/photos/4078054/pexels-photo-4078054.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                }
                alt=""
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center bg-[#1a1c1f] p-10 h-[350px]  items-center flex-col gap-3">
              <Image src={"/pizza-icon.svg"} alt="" width={100} height={100} />
              <h2 className="font-semibold">ORIGINAL RECIPES</h2>
              <p className="text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, incidunt?
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-col-reverse items-center text-center">
            <div className="w-full h-[350px] relative">
              <Image
                src={
                  "https://images.pexels.com/photos/5182122/pexels-photo-5182122.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                }
                alt=""
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center bg-[#1a1c1f] p-10 h-[350px] items-center flex-col gap-3">
              <Image src={"/vagan.svg"} alt="" width={100} height={100} />
              <h2 className="font-semibold">ORIGINAL RECIPES</h2>
              <p className="text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, incidunt?
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[350px] relative">
              <Image
                src={
                  "https://images.pexels.com/photos/2825226/pexels-photo-2825226.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                }
                alt=""
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex h-[350px] bg-[#1a1c1f] p-10 justify-center items-center flex-col gap-3">
              <Image src={"/truck.svg"} alt="" width={100} height={100} />
              <h2 className="font-semibold">ORIGINAL RECIPES</h2>
              <p className="text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, incidunt?
              </p>
            </div>
          </div>
        </div>
        <div className="bg-amber-700 p-6 min-h-60 text-black grid md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-8 justify-center items-center">
            <h1 className="text-3xl font-semibold font-amita">138</h1>
            <h2 className="text-xl">MENU ITEMS</h2>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <h1 className="text-3xl font-semibold font-amita">300</h1>
            <h2 className="text-xl">VISTORS EVERYDAY</h2>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <h1 className="text-3xl font-semibold font-amita">13</h1>
            <h2 className="text-xl">YEARS OF EXPERIENCE</h2>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-medium text-center my-16">
            IMAGE GALLERY
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative h-60">
              <Image
                src={
                  "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                }
                alt="Imag"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative h-60">
              <Image
                src={
                  "https://images.pexels.com/photos/2825225/pexels-photo-2825225.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                }
                alt="Imag"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative h-60">
              <Image
                src={
                  "https://images.pexels.com/photos/775863/pexels-photo-775863.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                }
                alt="Imag"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative h-60">
              <Image
                src={
                  "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                }
                alt="Imag"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative h-60">
              <Image
                src={
                  "https://images.pexels.com/photos/2412950/pexels-photo-2412950.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                }
                alt="Imag"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative h-60">
              <Image
                src={
                  "https://images.pexels.com/photos/11960537/pexels-photo-11960537.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                }
                alt="Imag"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative h-60">
              <Image
                src={
                  "https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&w=300"
                }
                alt="Imag"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative h-60">
              <Image
                src={
                  "https://images.pexels.com/photos/12645186/pexels-photo-12645186.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                }
                alt="Imag"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1572715376701-98568319fd0b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className={` relative py-16 flex items-center px-8`}
      >
        <div className="relative max-w-6xl mx-auto px-8 z-10 flex flex-col text-center">
          <div className="flex flex-col gap-6 ">
            <h3>NOT JUST A PIZZA. BUT LIFESTYLE</h3>
            <h1 className="text-3xl font-semibold">MAKE A RESERVETION</h1>
            <div />
            <p>
              And yes, we're pizza peaple, But we're human people, we lead with
              our hearts, we believe in giving back to the global community;
              join us, welcome to our pizzerias!
            </p>
            <div>
              <form className="w-full flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    className="bg-transparent px-4 py-2 border-2 border-amber-900"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="bg-transparent px-4 py-2 border-2 border-amber-900"
                    type="text"
                    placeholder="Your Phone"
                  />
                  <input
                    className="bg-transparent px-4 py-2 border-2 border-amber-900"
                    type="Date"
                    placeholder="Date"
                  />
                  <input
                    className="bg-transparent px-4 py-2 border-2 border-amber-900"
                    type="number"
                    placeholder="Number of People"
                  />
                </div>
                <textarea
                  className="w-full bg-transparent px-4 py-2 border-2 border-amber-900"
                  name=""
                  placeholder="Special Requests"
                  rows="5"
                ></textarea>
                <div className="flex justify-center pt-6">
                  <button className="px-4 py-2 bg-transparent border border-amber-900">
                    BOOK A TABLE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute bg-amber-950/90 inset-0"></div>
      </div>
    </div>
  );
};

export default page;
