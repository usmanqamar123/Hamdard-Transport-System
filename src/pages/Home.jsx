import React from "react";
import { CenterLogo } from "../assets";
import { Featuresection, Featuresection2, Herosection, Platform, Platformnumber } from "../constant";
import { video } from "../assets";
import { IoDiamondOutline } from "react-icons/io5";
import { PiShuffleBold } from "react-icons/pi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AnyUser } from "../assets";
import { HamdardLogo } from "../assets";


const Home = () => {
  return (
    <>
      <div
        className="relative w-full lg:h-[110vh] md:h-[130vh] h-screen"
      >
        {/* HERO SECTION */}
        <video
          autoPlay
          loop
          className="absolute inset-0 object-cover h-full w-full z-0"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="w-full h-full flex relative">
          <div className="md:ml-24 px-6 mt-[100px] md:mt-[0px] text-white flex flex-col items-center justify-center">
            <div className="w-full flex -mt-24">
              <img
                src={CenterLogo}
                alt={CenterLogo}
                className="md:w-1/2 w-3/4"
              />
            </div>

            <div className="w-full -mt-28 lg:-mt-44 p-12 gap-6 lg:gap-14 md:gap-3 text-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Herosection.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="w-full flex flex-col ">
                    <img
                      src={item.icon}
                      alt={item.icon}
                      className="w-8 md:w-1/5"
                    />
                    <p className="md:my-5 my-3 md:text-base text-sm">
                      {item.title}
                    </p>
                    <p className="mt- text-xs md:text-base">{item.process}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border border-t-2 -mt-8 border-white w-full "></div>

          </div>
        </div>

        {/* Feature Section*/}
        <div
          className="w-full md:p-16 gap-4 p-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {Featuresection.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col justify-center pt-24 md:pt-12 items-center hover:shadow-2xl hover:shadow-black h-[30vh] md:h-[50vh] text-white hover:text-black bg-primary transition duration-300 ease-in-out hover:bg-primarytwo hover:border-2 hover:border-white transform hover:scale-105 hover:translate-x-1"
            >
              <div className="text-4xl md:text-5xl font-bold">
                {item.counts}
                <sup className="relative text-white -top-0.5em font-xs">+</sup>
              </div>
              <p className="text-sm md:text-sm text-center">{item.title}</p>
              <div className="border border-primarytwo w-5 my-4"></div>
              <img
                src={item.iconBottom}
                alt={item.iconBottom}
                className="w-24 hover:opacity-100 opacity-0"
              />
            </div>
          ))}
        </div>

        <div className="lg:w-[90%] md:w-[84%] w-[75%] flex flex-col justify-center items-center md:px-10 md:py-12 -mt-10 md:-mt-16 mx-auto border-b-4 border-primarytwo bg-secondary text-white">
          <h1 className="w-full lg:w-1/2 md:p-0 p-10  text-center text-2xl md:text-4xl font-semibold ">
            HOW <span className="text-[#fee942]">HUT</span> IS DIFFERENT FROM
            OTHERS
          </h1>

          <div className="p-10 gap-1 md:gap-1 lg:gap-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {Featuresection2.map((item) => (
              <div
                key={item.id}
                className=" w-[98%] md:gap-0 gap-3 flex flex-col items-center bg-primary "
              >
                <img src={item.icon} alt={item.icon} className="w-20 lg:w-24" />
                <div className="flex flex-col justify-center gap-3 items-center">
                  <p>
                    <span className="bg-[#fee942] text-black text-[10px] md:text-[10px] px-1 ">
                      {item.step}
                    </span>
                  </p>
                  <p className="text-lg leading-5 md:text-base text-center px-10 pb-5">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*PLATFORM FLOW*/}
        <div className="w-3/4 md:w-[85%] mx-auto flex-col justify-center items-center my-12 text-white">
          <div className="flex flex-row gap-3 items-start">
              <IoDiamondOutline size={50} className=" text-primarytwo"/>
              <h2 className="text-2xl md:text-4xl font-semibold w-1/5 ">PLATFORM FLOW</h2>  
              </div>

              <div className="w-full gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10">
                {Platform.map((item)=>(
                <div 
                key={item.id}
                className="w-full flex justify-center items-center bg-secondary text-white p-3"
                >
                  <div className="flex justify-center items-center gap-3 text-lg md:text-base">
                  {item.icon}
                  <p>{item.title}</p>
                  </div>
                </div>
               ))}
              </div>

              <div className="hidden md:block border-b-2 border-primarytwo mt-24 -mb-20"></div>
              <div className="w-full md:w-full flex md:flex-row flex-col justify-start lg:justify-center gap-6 md:gap-24 lg:gap-44 items-center text-white p-5">
                <div className="flex justify-start items-center flex-col gap-2 ">
                <img src={AnyUser} alt={AnyUser} className="w-20 md:w-24 bg-secondary p-5" />
                <p className="text-lg md:text-base">ANY USER</p>
                </div>
                <div className="w-full md:w-1/2 flex md:flex-row flex-col gap-6 md:gap-16 items-center">
                  <div className="w-full flex justify-start items-center border-8 font-semibold hover:text-white border-white hover:border-primarytwo hover:bg-secondary bg-primarytwo text-black p-5 ">
                     <PiShuffleBold className="w-20 md:w-24 font-semibold " />
                <p className="text-xl md:text-xl ">BUS</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-2 ">
                <img src={HamdardLogo} alt={HamdardLogo} className="w-24 md:w-24 text-white bg-secondary p-5" />
                <p className="text-lg md:text-base text-center">DESTINATION</p>
                </div>
                </div>
                </div>

              <div className="w-full md:w-11/12 gap-2 md:mx-auto my-10 justify-center items-center text-center text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
                {Platformnumber.map((item)=>(
                  <div key={item.id} className="w-full flex justify-center items-center px-4 py-10 bg-secondary ">
                    <p className="text-center font-bold text-4xl md:text-5xl lg:text-6xl">{item.number}</p>
                  </div>
                ))}

              </div>
              <div className="flex justify-center text-white items-center cursor-pointer">
  <span className="flex items-center text-base md:px-10 py-3 p-5 bg-secondary">
    <MdOutlineRemoveRedEye width={15} className="mr-2" />
    <p>View Points</p>
  </span>
</div>

        </div>
      </div>
    </>
  );
};

export default Home;
