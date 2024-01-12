import React from "react";
import styles from "./Hero/Hero.module.css";
import { Facebook } from "lucide-react";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="relative">
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className={`${styles.hero}  min-h-[500px] pt-20 mt-40`}
      >
        <div className="absolute bg-black/70 inset-0"></div>

        <div className="max-w-6xl  mx-auto p-4 px-8">
          {/* Newsletter */}
          <div className="absolute md:max-w-2xl max-w-sm  w-full bg-[#0f0f0f] left-1/2 -translate-x-1/2 -top-20 border border-white p-6 px-10 flex flex-col gap-6 text-center">
            <h3>Newsletter</h3>

            <h1 className="md:text-5xl text-4xl font-dancing font-medium">
              Subscribe To Our Newsletter
            </h1>
            <p>And Never Miss latest Updates!</p>
            <div className="flex md:flex-row flex-col gap-4 w-full items-center">
              <input
                type="text"
                className="flex-1 pr-20 py-2 bg-transparent px-4 border-amber-100 rounded-sm border"
                placeholder="Enter your email address"
              />
              <button className="px-4 py-2 text-amber-700 bg-white">
                Subscribe
              </button>
            </div>
          </div>
          <div className=" max-w-4xl text-center md:mt-20 relative mt-52 mx-auto grid gap-6 md:grid-cols-3">
            <div className="flex flex-col text-sm items-center gap-4">
              <h2 className="text-xl  font-amita">Contact Us</h2>
              <div className="flex text-gray-300 flex-col gap-2">
                <p>11 W 53rd St, Chlef, Ch 10020, ALG</p>
                <span>+213 656664656</span>
                <span>+213 774664610</span>
              </div>
            </div>
            <div className="flex flex-col text-sm items-center gap-4">
              <h2 className="text-3xl font-semibold font-amita">Burger King</h2>
              <div className="max-w-xs text-gray-300">
                The Best Way To Find Yourself Is To Lose Yourself In The Service
                Of Others.
              </div>
              <div className="flex items-center gap-6 text-3xl">
                <LinkedInLogoIcon className="w-5 h-5" />
                <InstagramLogoIcon className="w-5 h-5" />
                <TwitterLogoIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col text-sm items-center gap-4">
              <h2 className="text-xl font-amita ">Working Hours</h2>
              <div className="flex text-gray-300 flex-col gap-2">
                <span>Monday-Friday:</span>
                <span>08:00 Am - 12:00 Pm</span>
              </div>
              <div className="flex text-gray-300 flex-col gap-2">
                <span>Saturday-Sunday:</span>
                <span>07:00 Am - 11:00 Pm</span>
              </div>
            </div>
          </div>
          <p className="text-center mt-10 relative text-gray-300">
            All Rights Reserved.&copy; 2024 by Moknine Birger King
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
