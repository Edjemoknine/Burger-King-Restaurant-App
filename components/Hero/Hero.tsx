import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={`${styles.hero} max-w-6xl mx-auto p-4 px-8`}>
      <div className={styles.grid}>
        <div className={styles.Info}>
          <h3>Welcome</h3>
          <h1 className="md:text-5xl max-w-xl leading-loose text-4xl font-bold">
            WE COOKED YOUR DESIRED PIZZA RECIPE
          </h1>
          <p className="max-w-sm">
            A small river named Duden flows by thier place and supplies it with
            the necessary regelialia.
          </p>
          <div className={styles.Button}>
            <button>Order Now</button>
            <button>View Menu</button>
          </div>
        </div>
        <div className={`${styles.Left} mt-10 md:mt-0`}>
          <div className={styles.ImgContainer}>
            <Image
              src={"/hero.jpg"}
              className={styles.Image}
              alt="Hero Image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
