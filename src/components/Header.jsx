import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return   <nav className=" w-full flex  bg-blue-300 text-black p-10 " >
  <h1 className=" w-[50%] flex  justify-end ml-4 font-bold  text-1.5xl text-red-700">LOGO</h1>
  <div className=" w-[50%] flex gap-[50px]">
    <Link to ="/" className="font-semibold text-md text-red-500 hover:text-red-800 hover:border-b-2 hover:border-red-800"> Home</Link>
    <Link to ="/about" className="font-semibold text-md text-red-500 hover:text-red-800 hover:border-b-2 hover:border-red-800"> About</Link>
    <Link to ="/service" className="font-semibold text-md text-red-500 hover:text-red-800 hover:border-b-2 hover:border-red-800"> Service</Link>
    <Link to ="/contact" className="font-semibold text-md text-red-500 hover:text-red-800 hover:border-b-2 hover:border-red-800"> Contact</Link>
  </div>
</nav>;
};

export default Header;
