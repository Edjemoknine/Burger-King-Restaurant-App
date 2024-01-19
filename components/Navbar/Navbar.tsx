"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { UserButton, useUser } from "@clerk/nextjs";
const Links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/store" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const { isAdmin, Quantity } = useSelector((store: any) => store.cart);
  const { user } = useUser();

  useEffect(() => {
    setOpen(true);
  }, [pathname]);

  return (
    <header
      className={`${styles.Header} z-50 bg-[#0f0f0f]   sticky top-0 left-0 w-full `}
    >
      <div className={"max-w-6xl overflow-x-hidden mx-auto p-4 px-8 "}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="overflow-x-hidden py-2"
        >
          <Link className={`${styles.logo} font-amita`} href={"/"}>
            <span className={styles.span}>Burger</span> king
          </Link>
          <nav
            className={` items-center justify-center gap-6 flex-1 hidden md:flex`}
          >
            {Links.map((link) => (
              <Link
                className={`${
                  pathname === link.href && styles.active
                } hover:text-amber-700`}
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div
            className={` items-center gap-6 flex flex-1 md:flex-initial justify-end mr-4`}
          >
            {user && isAdmin && (
              <Link
                className={`${pathname === "/login" && styles.active}`}
                href={"/admin"}
              >
                Dashboard
              </Link>
            )}

            <Link
              className={`${pathname === "/book" && styles.active} relative`}
              href={"/cart"}
            >
              <p className="text-[10px] text-white z-50 flex justify-center items-center absolute right-0 -top-2 bg-amber-700 rounded-full w-4 h-4">
                {Quantity}
              </p>
              <ShoppingCart />
              {/* <Image src={"/cart1.svg"} width={30} height={30} alt="cart" /> */}
            </Link>
            {!user && (
              <Link
                className={`${pathname === "/login" && styles.active}`}
                href={"/login"}
              >
                Login/Register
              </Link>
            )}
            <UserButton afterSignOutUrl="/" />
          </div>
          <div
            onClick={() => setOpen((prev) => !prev)}
            className={` md:hidden flex border-2 border-amber-700 rounded-md p-1`}
          >
            {!open ? (
              <Image
                src="/knife.svg"
                width={10}
                height={10}
                alt="menu"
                className="w-6 text-amber-700 cursor-pointer"
              />
            ) : (
              <Menu className="hover:text-amber-700 duration-300 cursor-pointer" />
            )}
          </div>

          <div
            className={`${
              open ? "-right-[100%]" : "right-0"
            } md:hidden flex flex-col duration-300 font-semibold gap-10 items-center w-full h-screen justify-center text-3xl rounded-md p-6 bg-black fixed  top-[77px]  z-50`}
          >
            {Links.map((link) => (
              <Link
                className={`${
                  pathname === link.href && "text-white"
                } text-amber-700 hover:text-white duration-300`}
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
