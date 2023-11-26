import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <>
      {" "}
      <div className="bg-white shadow-md  grid grid-cols-12 sticky top-0 z-10  mb-32 mx-14 rounded-lg ">
        <img className="w-56 h-32 px-7 py-4  col-span-5" src={logo} alt="logo" />
        <div className="col-span-6">
          <li className="flex  justify-center items-center py-8 gap-14 font-montserrat  text-3xl ">
            <ul className="hover:font-bold cursor-pointer box-border">Home</ul>
            <ul className="hover:font-bold cursor-pointer">Programs</ul>
            <ul className="hover:font-bold cursor-pointer">E-learning</ul>
            <ul className="hover:font-bold cursor-pointer">About Us</ul>
            <ul className="hover:font-bold cursor-pointer">Results</ul>
            <ul className="hover:font-bold cursor-pointer">Student Portal</ul>
          </li>
        </div>
        <button className="bg-blue-400 opacity-80 rounded-xl w-48 h-14 my-6 col-span-1  font-montserrat text-white text-xl">
          Enquire Now
        </button>
      </div>
    </>
  );
};

export default Header;
