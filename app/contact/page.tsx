import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div>
      {" "}
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1843655/pexels-photo-1843655.jpeg?auto=compress&cs=tinysrgb&w=300')",
          width: "100%",
          backgroundSize: "cover",

          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className={` relative h-96 py-20 flex items-center px-8`}
      >
        <div className="relative z-10 flex flex-col text-center">
          <h1 className="font-dancing mb-6 text-4xl  md:text-7xl font-bold">
            Book a Table.
          </h1>
          <h1 className="font-dancing -mb-10 text-4xl md:text-7xl font-bold">
            +213 65699349
          </h1>
          <Image
            src={"/underG.png"}
            className="text-white -mb-10"
            alt="about"
            width={400}
            height={100}
          />
        </div>
        <div className="absolute bg-black/70 inset-0"></div>
      </div>
      <div className="grid md:grid-cols-2 ">
        <div
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2551794/pexels-photo-2551794.jpeg?auto=compress&cs=tinysrgb&w=300')",
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
          className={` relative py-16 flex items-center px-8`}
        >
          <div className="relative z-10 flex flex-col text-center">
            <div className="flex flex-col gap-6 ">
              <h3>NOT JUST A PIZZA. BUT LIFESTYLE</h3>
              <h1 className="text-3xl font-semibold">MAKE A RESERVETION</h1>
              <div />
              <p>
                And yes, we are pizza peaple, But we are human people, we lead
                with our hearts, we believe in giving back to the global
                community; join us, welcome to our pizzerias!
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
                    rows={5}
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
        <div className="h-full w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103068.11618584486!2d1.35737585!3d36.169507949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12840e802595ec23%3A0x343dccf4a3049e3e!2sChlef!5e0!3m2!1sfr!2sdz!4v1705155287789!5m2!1sfr!2sdz"
            // width="600"
            // height="450"
            className="w-full h-full"
            style={{ border: "0" }}
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 p-4 px-8">
        <div>
          <h1 className="text-3xl font-medium text-center my-16">
            OUR BRANCHES
          </h1>
          <div className="grid md:grid-cols-2 gap-10 min-h-[700px]">
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-1/2 relative">
                <Image
                  src={
                    "https://images.pexels.com/photos/1841184/pexels-photo-1841184.jpeg?auto=compress&cs=tinysrgb&w=300"
                  }
                  alt=""
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center p-6 h-1/2 items-center flex-col gap-6">
                {/* <Image src={"/vagan.svg"} alt="" width={100} height={100} /> */}
                <h2 className="font-semibold text-xl">ALGER</h2>
                <p className="text-gray-300">
                  Bab azour PI/Zone 44 AV,MOURAD RAIS, AL 11212, ALG <br />
                  +213 69344033435 moknine@gmail.com
                </p>
                <button className="px-4 py-2 border-2 border-gray-400 text-gray-400">
                  GET DIRECTIONS {">"}
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-1/2 relative">
                <Image
                  src={
                    "https://plus.unsplash.com/premium_photo-1670984939096-f3cfd48c7408?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJlc3R1cmFudHN8ZW58MHx8MHx8fDA%3D"
                  }
                  alt=""
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center p-6 h-1/2 items-center flex-col gap-6">
                {/* <Image src={"/vagan.svg"} alt="" width={100} height={100} /> */}
                <h2 className="font-semibold text-xl">CHLEF</h2>
                <p className="text-gray-300">
                  Chlef center PI/Zone Ouled Mohamed AV, CH 11212, ALG <br />
                  +213 69344033435 moknine@gmail.com
                </p>
                <button className="px-4 py-2 border-2 border-gray-400 text-gray-400">
                  GET DIRECTIONS {">"}
                </button>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;
