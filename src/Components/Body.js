import React from "react";
import group from "../images/Frame 27.png";
import pic1 from "../images/Group.png";
import pic2 from "../images/Frame 28.png";
import ranker1 from "../images/Frame 58.png";
import ranker2 from "../images/Frame 59.png";
import ranker3 from "../images/Frame 60.png";
import ranker4 from "../images/Frame 61.png";
import ranker5 from "../images/Frame 62.png";
import course1 from "../images/Frame 69.png";
import course2 from "../images/Frame 70.png";
import course3 from "../images/Frame 71.png";
import course4 from "../images/Frame 72.png";
import course5 from "../images/Frame 73.png";
import course6 from "../images/Frame 74.png";
import india from "../images/Frame 85.png";
import hyd from "../images/Frame 84.png";
import gurukripa from "../images/WHY GURUKRIPA_.png";
import slide from "../images/Slide 16_9 - 2.png";
import lady from "../images/portrait-woman-glasses-holding-laptop-pointing-screen-showing-her-work-computer-standing_1258-86046-removebg-preview 1.png";
import expert from "../images/Frame 68 (1).png";
import expertFrame from "../images/Rectangle 43.png";
import expertFrame2 from "../images/Frame 95.png";
import expertCard from "../images/Frame 97.png";
import elearing from "../images/E -Learning.png";
import elearnlogo from "../images/Frame 16.png";
import anime from "../images/image 21.png";
import iit from "../images/material-symbols_engineering-outline-rounded.png";
import neet from "../images/solar_medical-kit-broken.png";
import foundation from "../images/tabler_school.png";
import testimonal from "../images/Frame 19 (2).png";
import hosp1 from "../images/Frame 98.png";
import hosp2 from "../images/Frame 99.png";



const Body = () => {
  return (
    <>
      <div className="mt-10 mx-16">
        <img className=" relative my-4  w-full h-[630px] " src={group} />
        <img className="relative  mx-auto -top-20 -mt-52" src={pic1} />
        <img className="relative  w-2/3 mx-auto  -mt-20" src={pic2} />
      </div>
      <div className="py-4 mt-24 ml-24 flex items-center ">
        <span className="font-bold px-2 text-5xl"> Results</span>
        <span className="font-bold px-2 text-blue-400/90 text-5xl">
          Speak the Loudest
        </span>
        <span className=" align-middle  text-blue-400/80 text-2xl font-bold   px-14  py-3  mx-8  border-2 border-cyan-500 rounded-full  ">
          {" "}
          Join Us
        </span>
      </div>
      <div className="flex overflow-x-scroll no-scrollbar gap-6 py-8 my-10">
        <img className="shadow-xl" src={ranker1} alt="rankers" />
        <img src={ranker2} alt="rankers" />
        <img src={ranker4} alt="rankers" />
        <img src={ranker5} alt="rankers" />
        <img src={ranker1} alt="rankers" />
        <img src={ranker2} alt="rankers" />
        <img src={ranker4} alt="rankers" />
        <img src={ranker5} alt="rankers" />
        <img src={ranker1} alt="rankers" />
        <img src={ranker2} alt="rankers" />
      </div>

      <div>
        <h2 className="py-5 text-center font-bold text-5xl my-6">
          {" "}
          Our Courses
        </h2>
        <div className="grid grid-flow-col items-center justify-around  gap-x-6 gap-y-6 auto-cols-auto ">
          <img src={course1} className="col-start-1 col-end-2 "></img>
          <img src={course2} className="col-start-2 col-end-3"></img>
          <img src={course3} className="col-start-3 col-end-4"></img>
          <img src={course4} className="col-start-1 col-end-2"></img>
          <img src={course5} className="col-start-2 col-end-3"></img>
          <img src={course6} className="col-start-3 col-end-4"></img>
        </div>
      </div>
      <div className="flex">
        <div className="pl-32  mt-20 ml-16 pt-40 pb-20 w-1/2 border-2 rounded-3xl border-gray-500">
          <p className=" relative  text-blue-500  mx-auto leading-10 -mt-10 font-semibold text-3xl w-1/2 ">
            Take the first few steps which can help you take the giant strides
            in you career
          </p>
          <p className="text-2xl p-2 mt-10 font-medium text-gray-500">Name</p>
          <input
            type="text"
            value=""
            placeholder="Enter your FullName"
            className="py-5 px-8 text-2xl w-11/12  rounded-2xl mb-10 border-gray-400 border-2 "
          ></input>
          <p className="text-2xl p-2 font-medium text-gray-500">Email-Id</p>
          <input
            type="email"
            placeholder="Enter your Email-id"
            className="py-5 px-8 text-2xl w-11/12  rounded-2xl mb-10 border-gray-400 border-2 "
          ></input>
          <p className="text-2xl p-2 font-medium text-gray-500">
            {" "}
            Phone Number
          </p>
          <input
            type="number"
            placeholder="Enter your Phone Number"
            className="py-5 px-8 text-2xl w-11/12  rounded-2xl border-gray-400 border-2 "
          ></input>
          <p className="py-2 text-lg text-gray-400 mb-10">
            {" "}
            By clicking Register now you will agree to the terms and conditions
          </p>
          <div className="w-11/12 ">
            <button className="bg-blue-400/90  w-full  text-2xl text-white py-4  px-6 rounded-2xl">
              Register
            </button>
          </div>
        </div>
        <img className="h-1/3 m-auto relative" src={lady}></img>
      </div>
      <div>
        <div className="px-2 py-20 ml-16">
          <span className="text-5xl font-bold  ">Discover Our Center in </span>
          <span className="text-5xl font-bold text-blue-500/80">Your City</span>
        </div>
        <div className="flex justify-between ">
          <img src={india} className=" px-20 -ml-10"></img>
          <div className="p-32 m-auto ">
            <div className="  py-16 px-12 bg-gray-200  ">
              <div className="py-10 ">
                <span className="text-3xl font-semibold">
                  We are available in{" "}
                </span>
                <span className="text-3xl font-semibold text-blue-400/80">
                  {" "}
                  60+ Cities{" "}
                </span>
                <span className="text-3xl font-semibold underline  relative -right-32">
                  {" "}
                  View All
                </span>
              </div>

              <div className=" relative grid grid-cols-3 gap-8">
                <img src={hyd}></img>
                <img src={hyd}></img>
                <img src={hyd}></img>
                <img src={hyd}></img>
                <img src={hyd}></img>
                <img src={hyd}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-16">
        <img className="mx-auto" src={gurukripa}></img>
        <img className=" px-20 mx-auto  w-full " src={slide}></img>
      </div>
      <div className="">
        <div className=" text-center py-16">
          <span className="text-5xl font-bold">Meet our </span>
          <span className="text-5xl font-bold text-blue-400/90">
            Master Minds
          </span>
        </div>
        <div className="flex   justify-around py-20 px-8">
          <div className="flex gap-8   w-2/3">
            <img className=" " src={expert} />

            <img className=" " src={expert} />

            <img className="" src={expert} />
          </div>
          <img className="mx-10 w-1/2" src={expertCard}></img>
        </div>
      </div>
      <div className="mx-24 ">
        <img className="mx-auto" src={elearing}></img>
        <div className="flex">
          <div className="w-1/2 border-gray-500 border-2  mx-8 relative -top-16 bg-white  rounded-3xl py-10 px-24 ">
            <img src={elearnlogo}></img>
            <div className="flex justify-between">
              <div className="">
                <p className="text-5xl w-2/3 text-blue-600/90 font-bold  py-10  leading-snug">
                  Pre Engineering Division
                </p>
                <p className="text-2xl w-3/5 text-gray-600 font-normal leading-6 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,{" "}
                </p>
                <button className="bg-black text-white text-xl  my-10 rounded-2xl py-4 px-20">
                  Register
                </button>
              </div>
              <img className=" p-10 " src={anime}></img>
            </div>
          </div>
          <div className="w-1/2 border-gray-500 border-2  mx-8  relative -top-16 bg-white  rounded-3xl py-10 px-24 ">
            <img src={elearnlogo}></img>
            <div className="flex justify-between">
              <div className="">
                <p className="text-5xl w-2/3 text-blue-600/90 font-bold  py-10  leading-snug">
                  Pre Engineering Division
                </p>
                <p className="text-2xl w-3/5 text-gray-600 font-normal leading-6 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,{" "}
                </p>
                <button className="bg-black text-white text-xl  my-10 rounded-2xl py-4 px-20">
                  Register
                </button>
              </div>
              <img className=" p-10 " src={anime}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="py-14">
        <p className="font-bold text-5xl mb-16 text-center">
          {" "}
          Our Class Room Programs
        </p>
        <div className=" mx-24">
          <div className="flex">
            <div className="p-12  w-1/3 rounded-3xl border-gray-400 border-2 mx-8 ">
              <img classname="bg-green-100 mx-6 py-10" src={iit} />

              <p className="text-4xl text-blue-600/90 mt-4  py-4 font-bold">
                IIT
              </p>
              <p className="text-2xl py-4  leading-6 ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <p className="text-4xl text-orange-400 font-bold">Explore</p>
            </div>
            <div className="p-12  w-1/3 rounded-3xl border-gray-400 border-2 mx-8 ">
              <img classname="bg-green-100 mx-6 py-10" src={neet} />

              <p className="text-4xl text-blue-600/90 mt-4  py-4 font-bold">
                NEET
              </p>
              <p className="text-2xl py-4  leading-6 ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <p className="text-4xl text-orange-400 font-bold">Explore</p>
            </div>
            <div className="p-12  w-1/3 rounded-3xl border-gray-400 border-2 mx-8 ">
              <img classname="bg-green-100 mx-6 py-10" src={foundation} />

              <p className="text-4xl text-blue-600/90 mt-4  py-4 font-bold">
                FOUNDATION
              </p>
              <p className="text-2xl py-4  leading-6 ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <p className="text-4xl text-orange-400 font-bold">Explore</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16 mx-24 flex ">
        <div className="w-1/3 m-auto px-4 ">
          <h2 className="font-bold text-6xl py-8 "> Our Testimonals</h2>
          <p className="leading-6 text-2xl w-4/5 ">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,{" "}
          </p>
        </div>
        <img className="w-2/3" src={testimonal}></img>
      </div>
      <div className="py-16 mx-24  ">
        <p className="mx-auto text-center text-5xl font-bold">
          Exploring Our Multifaceted Services
        </p>
        <p className="mx-auto  text-center text-5xl text-blue-400/90 font-bold">
          Our Diverse Offerings
        </p>
        <div className="flex  py-10 ">
          <img className=" w-1/2 mx-5" src={hosp1}></img>
          <img className="w-1/2 mx-5" src={hosp2}></img>
        </div>
      </div>
    </>
  );
};

export default Body;
