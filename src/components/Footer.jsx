import React from "react";
import { Link } from "react-router-dom";
import { Footer_Links } from "../constant";
import { HU_logo } from "../assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // <footer className="Footer">
    <div className=" bottom-0 bg-primary w-full flex flex-col items-center text-sm text-white p-4  ">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-10">
        <div>
          <Link to="/">
            <div className="w-3/4 md:w-full cursor-pointer">
              <img src={HU_logo} alt="Logo" width={300} height={300} />
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <ul className="flex gap-6">
            {Footer_Links.map((item) => (
              <Link to={item.link} target="_blank">
                <li
                  key={item.id}
                  className="text-[11px] md:text-xl font-semibold  "
                >
                  <p> {item.title} </p>
                </li>
              </Link>
            ))}
          </ul>
          <div className="w-full border border-primarytwo my-2"></div>
          <div>
            <ul className="flex items-center list-disc gap-5 text-[8px] md:text-xs">
              <li className="md:pb-0 pb-1">
                <Link href="/privacy" className="hover:text-primarytwo">
                  Privacy Statements
                </Link>
              </li>
              <li>
                <Link href="/termsofuse" className="hover:text-primarytwo">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="/documents" className="hover:text-primarytwo">
                  Documents
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-[8px] md:text-xs mt-10 hover:text-primarytwo">
        Copyright &copy; {currentYear} | Powered by Hamdard University, Karachi
      </div>
    </div>
    // </footer>
  );
};

export default Footer;
