import React from "react";
import { CenterLogo } from "../assets";
import { Featuresection, Featuresection2, Herosection } from "../constant";
import { video } from "../assets";

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
                    <p className="md:my-6 my-3 md:text-base text-sm">
                      {item.title}
                    </p>
                    <div className="border border-primary w-3/4 "></div>
                    <p className="mt-3 text-xs md:text-base">{item.process}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Section*/}
        <div
          className="md:w-[82%] w-[82%] lg:mx-24 md:p-16 gap-4 p-10 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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

        <div className="lg:w-[72%] md:w-[64%] w-[63%] flex flex-col justify-center items-center md:px-10 md:py-12 -mt-10 md:-mt-16 mx-20 md:mx-28 lg:mx-40 border-b-4 border-primarytwo bg-secondary  text-white">
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
                    {" "}
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
        <div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
