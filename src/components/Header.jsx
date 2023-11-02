import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'

const Header = () => {
  const[isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu =() =>{
    setMobileMenuOpen(!isMobileMenuOpen)

  };


  const location =useLocation();
  const isActive = (path) =>{
    return location.pathname === path
    ? "text-red-500 font-semibold  border-b-2 border-red-500 w-fit":""
    
  };
  return(

<>
<nav className=" w-full sm:flex hidden bg-blue-300 text-black p-10 ">
  <h1 className=" w-[50%] flex px-4 py-4 font-bold  text-1.5xl text-red-700">LOGO</h1>
  <div className=" w-[50%] flex gap-[50px] ">
    <Link to ="/" className={` font-bold text-1.5xl text-red-600  hover:text-red-800 hover:border-b-4 hover:border-red-800 ${isActive('/')}`}> Home</Link>
    <Link to ="/about" className={`font-bold text-1.5xl text-red-600 hover:text-red-800 hover:border-b-4 hover:border-red-800 ${isActive('/about')}`}> About</Link>
    <Link to ="/service" className={`font-bold text-1.5xl text-red-600 hover:text-red-800 hover:border-b-4 hover:border-red-800 ${isActive('/service')}`}> Service</Link>
    <Link to ="/contact" className={`font-bold text-1.5xl text-red-600 hover:text-red-800 hover:border-b-4 hover:border-red-800 ${isActive('/contact')}`}> Contact</Link>
  </div>
</nav>
    <div className="sm:hidden flex justify-between items-center px-4  bg-cyan-300 h-[60px]">
      <h1 className=" flex px-8 py-4 font-bold text-1.5xl ">Logo</h1>
        {/* <button className="flex  mt-2" onClick={toggleMenu}>
          {isMobileMenuOpen ?   
            <FaTimes>:<FaBars/>
         }
        </button> */}
    </div>
      {isMobileMenuOpen &&(
      <div className="flex flex-col gap-4 pb-4 bg-cyan-200 absolute top-0 h-screen w-[240px] px-8">
       <Link to="/"  className="mx-4 my-4 font-bold text-1.5xl">Logo</Link>
        <Link to="/" className="font-bold text-1.5xl">Home</Link>
        <Link to="/about" className="font-bold text-1.5xl">About</Link>
        <Link to="/contact" className="font-bold text-1.5xl">Contacts</Link>
        <Link to="/service" className="font-bold text-1.5xl">Services</Link>




        
      </div>
      )}
</>
  )};

export default Header;
