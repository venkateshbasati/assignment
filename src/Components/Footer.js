import React from "react";
import logo from "../images/image 2.png";
import fb from "../images/Facebook - jpeg.png";
import insta from "../images/Instagram - jpeg.png";
import LinkedIn from "../images/LinkedIn - jpeg.png";
import arrow from "../images/Frame 48.png";

const Footer = () => {
  return (
    <div className="w-full bg-orange-200 py-16 px-24 ">
      <img src={logo} className="py-2"></img>
      <div className="flex ">
        <div className="grid grid-cols-3">
          <div>
            <h3 className="text-2xl font-semibold py-6">Address</h3>
            <p className="text-2xl">
              Gurukripa Career Institute(GCI) Head Office: Jyoti Nagar, Piprali
              Road, Sikar
            </p>
            <ol className="">
              <ul className="text-2xl py-1 ">Mob.: 88751-24365</ul>
              <ul className="text-2xl py-1">info@gurukripa.ac.in</ul>
              <ul className="text-2xl py-1">Phone: 88751-24365</ul>
            </ol>
          </div>
          <div>
            <h3 className="text-2xl font-bold py-6">
              Gurukripa Career Institute(GCI)
            </h3>
            <ol className="flex flex-col justify-evenly">
              <li className="text-2xl py-2 ">Home</li>
              <li className="text-2xl py-2 ">Programs</li>
              <li className="text-2xl py-2 ">E-Learning</li>
              <li className="text-2xl py-2 ">About Us</li>
              <li className="text-2xl py-2 ">Results</li>
              <li className="text-2xl py-2 ">Student Portal</li>
            </ol>
          </div>
          <div>
            <h3 className="text-3xl font-semibold py-4">Follow us on </h3>
            <div className="flex flex-row gap-4 ">
              <img src={insta}></img>
              <img src={LinkedIn}></img>
              <img src={fb} className="py-2"></img>
            </div>
          </div>
        </div>
        <img src={arrow} className="py-24  " />
      </div>
    </div>
  );
};

export default Footer;
