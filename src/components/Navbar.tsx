import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="text-red-500 h-12 p-4 flex justify-between items-center border-b border-b-red-500 font-semibold">
      {/* left navlinks */}
      <div className="hidden md:flex gap-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      {/* logo */}
      <div>
        {" "}
        <Link href={"/"} className="text-xl font-semibold">
          Mighty Bite Café
        </Link>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <Menu></Menu>
      </div>
      {/* Right navlinks */}
      <div className="hidden md:flex gap-4 items-center">
        <div className=" md:absolute top-1.5 r-2 lg:static flex items-center px-1 rounded-md bg-orange-500 text-white font-semibold gap-1  ">
          <Image src={"/phone.png"} height={20} width={20} alt="" />{" "}
          <span>123 456 78</span>
        </div>
        <div className="hidden md:flex gap-3">
          {!user ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <Link href={"/orders"}>Orders</Link>
          )}
          <CartIcon></CartIcon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
