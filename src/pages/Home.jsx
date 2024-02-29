import React from "react";
import { CenterLogo } from "../assets";
import { Herosection } from "../constant";
import ReactPlayer from "react-player";
import { video } from "../assets";

const Home = () => {
  return (
    <>
 <div className="relative w-full lg:h-[110vh] md:h-[130vh] h-screen">
      {/* Video Background */}
      <video autoPlay loop className="absolute inset-0 object-cover h-full w-full z-0">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>     
      
         {/* HERO SECTION */}
        <div className="w-full h-full relative">
          <div className="w-full h-full flex absolute">
            <div className="md:ml-24 px-6 text-white flex flex-col items-center justify-center">
              <div className="w-full flex">
                <img src={CenterLogo} alt={CenterLogo} className="md:w-1/2 w-3/4" />
              </div>

              <div className="w-full -mt-28  lg:-mt-44 p-12 gap-6 lg:gap-14 md:gap-3 text-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Herosection.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center items-center"
                  >
                    <div className="w-full flex flex-col ">
                      <img src={item.icon} alt={item.icon} className="w-8 md:w-1/5" />
                      <p className="md:my-6 my-3 md:text-base text-sm">{item.title}</p>
                      <div class="border border-[#748796] w-3/4 "></div>
                      <p className="mt-3 text-xs md:text-base">{item.process}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
