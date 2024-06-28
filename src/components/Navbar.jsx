
import React from "react";
//import icons
// import { BiHomeAlt, BiUser } from "react-icons/bi";
// import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

//link

// w-full bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100

import { Link } from "react-scroll";
const Nav = () => {
  return (
    <nav className="fixed top-0 lg:bottom-8 w-screen h-[200px] overflow-hidden ">
      <div className="container mx-auto">
        {}
        <div
          className="w-full bg-white-600 h-[126px] 
        bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30
        mx-auto flex justify-between items-center space-b text-[30px] font-medium text-black px-[100px]"
        >
          {/* <div className="w-20 h-20 m-0 "> */}
            {/* <a href="#">
          <img
            src={Logo}
            alt="siteswala official logo"
            className=" h-20 w-20 left-0"
          />
        </a> */}
          {/* </div> */}

          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            {/* <BiHomeAlt /> */}
            Home
          </Link>

          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            {/* <BiUser /> */}
            About
          </Link>

          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            {/* <BsClipboardData /> */}
            Services
          </Link>

          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            {/* <BsBriefcase /> */}
            Work
          </Link>

          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            {/* <BsChatSquare /> */}
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
