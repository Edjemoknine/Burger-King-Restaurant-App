import React from "react";
import Image from "next/image";
import styles from "./Hero/Hero.module.css";

const About = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1549590143-d5855148a9d5?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        // height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className={`${styles.hero} minh-h-screen py-20 my-20`}
    >
      <div className="max-w-6xl mx-auto p-4 px-8">
        <div
          className={`${styles.grid} flex md:flex-row flex-col-reverse items-center space-between gap-10 `}
        >
          <div className={styles.Left}>
            <div
              className=" w-full flex-1 h-[400px] relative after:bg-[#b66407] after:w-1/2 after:h-1/2 after:-top-5 after:-left-5 after:absolute after:-z-10 z-20 
             before:bg-[#b66407] before:w-1/2 before:h-1/2 before:-bottom-5 before:-right-5 before:absolute before:-z-10  "
            >
              <Image
                src={"/chef.jpg"}
                className={"w-full h-full object-cover"}
                alt="Hero Image"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className={styles.Info}>
            <h3>Who we are?</h3>
            <h1 className="md:text-6xl text-4xl font-bold">
              What We Believe In{" "}
            </h1>
            <p>
              A small river named Duden flows by thier place and supplies it
              with the necessary regelialia.
            </p>
            <h3>Kevin Luo</h3>
            <p>chef & Founder</p>
            <span className="text-5xl font-thin font-dancing">Kevin Loe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
