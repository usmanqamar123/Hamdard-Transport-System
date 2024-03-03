import React, { useState } from "react";
import '../index.css'
import { Link } from "react-router-dom";
import { Navlink } from "../constant/index";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <header className="w-[90%] md:w-[90%] md:mx-10 lg:w-[75%] fixed lg:mx-36 mx-5 text-white bg-[#748796] my-10 z-50 rounded-md md:rounded-xl font-kenzo">
      <nav className="flex flex-row justify-between">
        <div
          className={`md:w-1/4 w-full flex items-center justify-between ${
            !toggleMenu
              ? "sm:bg-transparent sm:shadow-none rounded-lg shadow-md shadow-primarytwo"
              : ""
          } px-3 sm:p-0 z-20`}
        >
          <div className="text-[10px] pl-1 md:text-lg lg:text-3xl font-bold">
            <h2 className="flex items-center">
              <span className="text-primarytwo"> HU</span>
              <span className="">|TRANSPORT </span>
            </h2>
            <span className="lg:ml-14 md:ml-8 ml-5 font-kenzo">DEPARTMENT</span>
          </div>

          <div className="md:hidden text-3xl">
            <BiMenuAltLeft onClick={() => setToggleMenu(!toggleMenu)} />
          </div>
        </div>

        <div>
          <ul
            className={`h-screen md:h-10 lg:h-auto md:my-2 md:w-full  w-[90%] md:ml-0 ml-2 text-white lg:gap-10 flex md:flex-row bg-[#748796] md:bg-transparent flex-col items-center justify-center gap-6 lg:text-base md:gap-6 md:mx-20 text-sm font-semibold absolute md:static lg:top-[24px]
       ${
         toggleMenu ? " -left-full" : "left-0"
       } transition-all duration-200 overflow-y-auto md:pb-0 pb-20`}
          >
            {Navlink.map((item) => (
              <li
                key={item.id}
                className="flex justify-center items-center md:py-4 "
              >
                <Link
                  to={item.link}
                  className="hover:opacity-75 transition-all ease-in duration-200 lg:text-[18px] md:text-xs tracking-[1px] font-[500] "
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  {item.title}
                </Link>
              </li>
            ))}

            <div className="lg:text-base md:text-xs md:py-4">
              <button className="bg-black border-2 hover:border-opacity-80 border-primarytwo text-white md:mr-3 rounded-full md:py-2 md:px-4 lg:px-8 lg:py-2">
                Login / Register
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
