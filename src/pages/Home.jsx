import React, { useState } from "react";
import { CenterLogo, Right } from "../assets";
import {
  Featuresection,
  Featuresection2,
  Herosection,
  Platform,
  Platformnumber,
  Getintouch,
} from "../constant";
import { video } from "../assets";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { Progress } from "flowbite-react";
import { IoDiamondOutline } from "react-icons/io5";
import { PiShuffleBold } from "react-icons/pi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AnyUser, dotted_Background, HamdardLogo } from "../assets";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div className="w-full h-full">
        <div className="relative w-full lg:h-[110vh] md:h-[130vh] h-screen">
          {/* HERO SECTION */}
          <video
            autoPlay
            loop
            className="absolute inset-0 object-cover h-full w-full z-0"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative w-full h-full flex items-center justify-center text-white ">
            <div className="w-11/12 px-10 mt-[100px] md:mt-0 flex flex-col items-center justify-center">
              <div className="w-full flex -mt-24">
                <img
                  src={CenterLogo}
                  alt={CenterLogo}
                  className="md:w-1/2 w-3/4"
                />
              </div>

              <div className="w-full -mt-28 lg:-mt-48 p-12 gap-6 lg:gap-0 md:gap-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Herosection.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col group hover:p-8 hover:border-t-2 hover:border-primarytwo hover:bg-gray-900/20 hover:bg-blur-md hover:scale-105 hover:-translate-x-4 hover:translate-y-2 "
                  >
                    <div
                      className="w-full flex flex-col "
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="flex justify-between items-center">
                        <img
                          src={
                            hoveredIndex === item ? item.hoverIcon : item.icon
                          }
                          alt={item.icon}
                          className="w-8 md:w-1/5 hover:text-red-500"
                        />
                        <img
                          src={item.arrow}
                          alt="arrow"
                          className="w-8 md:w-1/5 opacity-0 group-hover:opacity-100 hover:cursor-pointer"
                        />
                      </div>
                      <p className="md:my-5 my-3 md:text-base text-sm">
                        {item.title}
                      </p>
                      <div className="border border-t-2 mb-3 border-white w-full"></div>

                      {/* <Stack spacing={2} sx={{ flexGrow: 1 }} className="mb-3">
                      <LinearProgress
                        variant="determinate"
                        value={15}
                        color="primary"
                        sx={{
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: 'white', // Change the color of the linear bar
                          },
                        }}
                      />
                    </Stack> */}
                      <p className="font-semibold text-xs md:text-base">
                        {item.process}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Section*/}
          <div className="w-full md:p-16 gap-4 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Featuresection.map((item, index) => (
              <div
                key={item.id}
                className="w-full h-full flex flex-col justify-center pt-24 items-center hover:shadow-2xl group hover:shadow-black text-white hover:text-black bg-primary transition duration-300 ease-in-out hover:bg-primarytwo hover:border-2 hover:border-white transform hover:scale-105 hover:translate-x-1"
              >
                <img
                  src={Right}
                  alt="right"
                  className="w-14 items-start absolute top-3 text-white opacity-0 group-hover:opacity-100"
                />
                <div className="text-4xl md:text-5xl font-bold">
                  {item.counts}
                  <sup className="relative group-hover:text-black text-primarytwo text-3xl ">
                    {item.sup}
                  </sup>
                </div>
                <p className="text-sm md:text-sm text-center">{item.title}</p>
                <div className="border border-primarytwo w-5 group-hover:hidden absolute bottom-16"></div>
                <img
                  src={item.iconBottom}
                  alt={item.iconBottom}
                  className="w-44 group-hover:opacity-100 opacity-0"
                />
              </div>
            ))}
          </div>

          <div className="lg:w-[90%] md:w-[84%] w-[81%] flex flex-col justify-center items-center md:px-10 md:py-12 -mt-10 md:-mt-16 mx-auto bg-secondary text-white" id="about">
            <h1 className="w-full lg:w-1/2 md:p-0 p-10  text-center text-2xl md:text-4xl font-semibold ">
              HOW <span className="text-[#fee942]">HUT</span> IS DIFFERENT FROM
              OTHERS
            </h1>

            <div className="p-10 gap-3 md:gap-1 lg:gap-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {Featuresection2.map((item) => (
                <div
                  key={item.id}
                  className=" w-full h-full md:gap-5 gap-3 flex flex-col items-center bg-primary "
                >
                  <img
                    src={item.icon}
                    alt={item.icon}
                    className="w-20 lg:w-22"
                  />
                  <div className="w-full flex flex-col bg-secondary/60 justify-center gap-3 items-center">
                    <p className="-mt-3 pb-3">
                      <span className="bg-[#fee942] text-black font-semibold text-[10px] md:text-[10px] px-2 ">
                        {item.step}
                      </span>
                    </p>
                    <div className="text-lg leading-5 md:text-base text-center px- pb-5">
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-3/4 text-center mx-auto border-t-2 border-[#fee942]"></div>

          {/*PLATFORM FLOW*/}
          <div className="w-3/4 md:w-[90%] mx-auto flex-col justify-center items-center my-12 text-white">
            <div className="flex flex-row gap-3">
              <IoDiamondOutline size={38} className=" text-primarytwo" />
              <h2 className="text-2xl md:text-4xl font-semibold w-1/5 ">
                PLATFORM FLOW
              </h2>
            </div>

            <div className="w-full gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10">
              {Platform.map((item) => (
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
            <div className="w-full flex md:flex-row flex-col justify-start lg:justify-center gap-6 md:gap-24 lg:gap-44 items-center text-white p-5">
              <div className="flex justify-start items-center flex-col gap-2 ">
                <img
                  src={AnyUser}
                  alt={AnyUser}
                  className="w-20 md:w-24 bg-secondary p-5"
                />
                <p className="text-lg md:text-base">ANY USER</p>
              </div>
              <div className="w-full md:w-1/2 flex md:flex-row flex-col gap-6 md:gap-16 items-center">
                <div className="w-full flex justify-start items-center border-8 font-semibold hover:text-white border-white hover:border-primarytwo hover:bg-secondary bg-primarytwo text-black p-5 ">
                  <PiShuffleBold className="w-20 md:w-24 font-semibold " />
                  <p className="text-xl ">BUS</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-2 ">
                  <img
                    src={HamdardLogo}
                    alt={HamdardLogo}
                    className="w-24 md:w-24 text-white bg-secondary p-2"
                  />
                  <p className="text-lg md:text-base text-center">
                    DESTINATION
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/4 gap-2 md:mx-auto my-10 justify-center items-center text-center text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
              {Platformnumber.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex justify-center items-center p-10 bg-secondary "
                >
                  <p className="text-center font-bold text-4xl md:text-5xl lg:text-6xl">
                    {item.number}
                  </p>
                </div>
              ))}
            </div>
            <Link to="/login">
              <div className="flex justify-center text-white items-center cursor-pointer">
                <span className="flex items-center text-base md:px-10 py-3 p-5 hover:bg-primarytwo hover:text-black bg-secondary">
                  <MdOutlineRemoveRedEye width={15} className="mr-2" />
                  <p>View Points</p>
                </span>
              </div>
            </Link>
          </div>

          {/* LATEST SECTION */}

          <div className="w-11/12 mx-auto bg-secondary rounded-xl text-white ">
            <h2 className="text-xl md:text-4xl w-full md:w-1/3 md:pb-1 font-semibold p-3 md:p-8">
              LATEST FROM UNIVERSITY
            </h2>
            <div className="flex flex-col md:flex-row gap-10 justify-between">
              <ul className="flex flex-col list-disc md:gap-6 gap-2 md:p-8 p-6 text-base md:text-lg">
                <li>EVENTS</li>
                <li>NEWS</li>
                <li>TESTIMONIALS</li>
                <li>REVIEWS</li>
              </ul>

              <div className="p-10 bg-primary w-full md:w-3/5">
                <div className="flex gap-5">
                  <p className="text-primarytwo text-xs">MAY 16TH 24</p>
                  <p className="text-xs">02:30 Pm</p>
                </div>
                <h3 className="text-xl my-5">Top 10 transport system</h3>
                <p className="text-xs md:text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat rerum eveniet deleniti laborum repellendus dolores
                  culpa maxime aperiam consectetur laboriosam corrupti repellat
                  asperiores impedit officia veritatis obcaecati, sapiente
                  placeat tempore.
                </p>
              </div>
            </div>

            <div className="flex justify-end items-end gap-1 pt-0.5">
              <div className="w-full lg:w-[29.5%] bg-primary py-5 px-2 md:p-5 md:py-10 shadow-2xl shadow-secondary hover:bg-primarytwo group text-white hover:text-black hover:border-white hover:border-4 transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-x-3">
                <p className="text-xs text-primarytwo group-hover:text-black">
                  MAY 16TH 24
                </p>
                <p className="my-5 text-sm md:text-base">
                  Journey to the modern University
                </p>
                <p className="text-xs pt-10">LEARN MORE</p>
              </div>
              <div className="w-full lg:w-[30%] bg-primary px-2 py-5 md:p-5 md:py-10 hover:bg-primarytwo shadow-2xl shadow-secondary group text-white hover:text-black hover:border-white hover:border-4 transition duration-300 ease-in-out transform hover:scale-105 hover:translate-x-3">
                <p className="text-xs text-primarytwo group-hover:text-black">
                  MAY 16TH 24
                </p>
                <p className="my-5 text-sm md:text-base">
                  How to register for the points
                </p>
                <p className="text-xs pt-10">LEARN MORE</p>
              </div>
            </div>
          </div>

          {/* GET IN TOUCH SECTION*/}

          <div className="w-full flex flex-col md:flex-col lg:flex-row my-20 ">
            <div className="w-full md:w-full lg:w-1/2 p-10 md:p-20 justify-center items-center bg-secondary border-l-2 border-primarytwo text-white">
              <h2 className="text-3xl md:text-4xl text-center font-semibold tracking-[-0.08em]">
                REACH MILLIONS!
              </h2>
              <p className="my-5 text-xs md:text-base">
                Only fill the below email of your company and brand want their
                ad on our university points only business will be reached within
                24h.
              </p>

              <form>
                <div className="flex justify-center items-center">
                  <input
                    type="email"
                    placeholder="Your Email"
                    autoComplete="off"
                    className="bg-primary p-1 md:p-3 border border-secondary text-xs md:text-base outline-none focus:border-primarytwo "
                  />
                  <button
                    type="submit"
                    className="p-1 md:p-3 bg-white text-black text-xs md:text-base hover:text-white hover:bg-primarytwo "
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full sm:w-full lg:w-1/2 bg-primary p-10 md:p-20 text-white relative">
              <div className="absolute inset-0 z-0">
                <img
                  src={dotted_Background}
                  alt="Background"
                  className="w-full h-full blur-[4px]"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold pb-10 tracking-[-0.08em]">
                GET IN TOUCH
              </h2>
              <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {Getintouch.map((item) => (
                  <div key={item.id}>
                    <Link
                      to={item.link}
                      target="_blank"
                      className="flex items-center gap-2 hover:opacity-80"
                    >
                      <item.icon className="text-2xl text-primarytwo" />
                      <p className="text-base md:text-base">{item.title}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
