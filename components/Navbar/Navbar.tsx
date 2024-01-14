"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
const Links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/store" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, [pathname]);

  return (
    <header className={`${styles.Header} relative`}>
      <div className={"max-w-6xl mx-auto p-4 px-8 "}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link className={`${styles.logo} font-amita`} href={"/"}>
            <span className={styles.span}>Burger</span> king
          </Link>
          <nav className={` items-center justify-center gap-6 hidden md:flex`}>
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
          <div className={` items-center gap-6 hidden md:flex`}>
            <Link
              className={`${pathname === "/login" && styles.active}`}
              href={"/login"}
            >
              Login/Register
            </Link>
            <Link
              className={`${pathname === "/book" && styles.active}`}
              href={"/cart"}
            >
              Book Table
            </Link>
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
              open ? "-right-[200%]" : "right-0"
            } md:hidden flex flex-col duration-300 font-semibold gap-10 items-center w-full h-screen justify-center text-3xl rounded-md p-6 bg-black absolute  top-[77px]  z-50`}
          >
            {Links.map((link) => (
              <Link
                className={`${
                  pathname === link.href && styles.active
                } text-amber-700 hover:text-white duration-300`}
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className={`${pathname === "/login" && styles.active}`}
              href={"/login"}
            >
              Login/Register
            </Link>
            <Link
              className={`${pathname === "/book" && styles.active}`}
              href={"/book"}
            >
              Book Table
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
