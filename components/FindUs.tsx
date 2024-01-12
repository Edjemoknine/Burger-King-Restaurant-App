import React from "react";
import Image from "next/image";
import styles from "./Hero/Hero.module.css";

const FindUs = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1481798699994-481e7c0a8282?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className={`${styles.hero} relative minh-h-screen py-20 my-20`}
    >
      <div className="absolute bg-black/70 inset-0"></div>
      <div className="max-w-6xl relative mx-auto p-4 px-8">
        <div className={`${styles.grid} `}>
          <div className={styles.Info}>
            <h3>Contact</h3>
            <h1 className="md:text-6xl text-4xl font-bold">Find Us</h1>
            <p>
              A small river named Duden flows by thier place and supplies it
              with the necessary regelialia.
            </p>
            <span className="text-3xl font-thin font-dancing">
              Openeing Hours
            </span>
            <h3>Mon-fri: 10:00 Am - 02:00 Am</h3>
            <h3>Sat-Sun: 10:00 Am - 03:00 Am</h3>
            <button className="bg-white w-fit mt-6 px-4 py-2 text-amber-700">
              Visit Us
            </button>
          </div>
          <div className={styles.Left}>
            <div
              className=" w-full flex-1 h-[400px] relative after:bg-[#b66407] after:w-1/2 after:h-1/2 after:-top-5 after:-left-5 after:absolute after:-z-10 z-20 
             before:bg-[#b66407] before:w-1/2 before:h-1/2 before:-bottom-5 before:-right-5 before:absolute before:-z-10  "
            >
              <Image
                src={
                  "https://images.unsplash.com/photo-1572715376701-98568319fd0b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                className={"w-full h-full object-cover"}
                alt="Hero Image"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
