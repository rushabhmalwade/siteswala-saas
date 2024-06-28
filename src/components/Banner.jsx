import React from "react";
import iphone2 from "../assets/iphone-left-2.png";
import ipad from "../assets/ipad.png";
import macbook1 from "../assets/macbook-front-2.png";
import meshBG from "../assets/mesh-28.png"

import { Link } from "react-scroll";


import { motion } from "framer-motion";
import { fadeIn } from "../variants";



const Banner = () => {
  return (
    
  
    // <div className=" h-[100vh] bg-gradient-to-b from-[#101212] relative to-[#08201D]">
        <div className=" h-fit bg-no-repeat bg-cover" style={{ backgroundImage:`url(${meshBG})` }}>

      <header
        className=" z-200 fixed inset-x-0 top-0 z-10 w-full
    bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0 flex flex-row">

                {/* <img className="w-auto h-16" src={logo} alt="" /> */}
              

              <a href="/" title="" className="flex">
                <h1 style={{"fontFamily":"'Inconsolata', monospace"}} className="shadow-xl drop-shadow-2xl  text-3xl font-bold mt-4 mr-5 bg-transparent text-[#667799]">
                  Siteswala
                </h1>
              </a>
            </div>

            <div className="  mix-blend-difference hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <Link
                to="about"
                activeClass="active"
                smooth={true}
                spy={true}
                // offset={-200}
                className="text-[#667799]  cursor-pointer text-base font-bold transition-all duration-200 hover:text-opacity-80  w-[60px] h-[60px] flex items-center justify-center "
              >
                {" "}
                About{" "}
              </Link>
              {/* <a
                href="#"
                title=""
                className=""
              >
                {" "}
                About{" "}
              </a> */}
              <Link
                to="carousel"
                activeClass="active"
                smooth={true}
                spy={true}
                // offset={-200}
                className="text-[#667799] cursor-pointer text-base font-bold transition-all duration-200 hover:text-opacity-80  w-[60px] h-[60px] flex items-center justify-center "
              >
                {" "}
                Work{" "}
              </Link>
              {/* <a
                href="#"
                title=""
                className="text-base text-white transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Work{" "}
              </a> */}
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-320}
                className="text-[#667799] cursor-pointer text-base font-bold transition-all duration-200 hover:text-opacity-80 w-[60px] h-[60px] flex items-center justify-center "
              >
                {" "}
                Contact{" "}
              </Link>
              {/* <a
                href="#"
                title=""
                className="text-base text-white transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Contact{" "}
              </a> */}
              <Link
                to="team"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                className="text-[#667799] cursor-pointer text-base font-bold transition-all duration-200 hover:text-opacity-80  w-[60px] h-[60px] flex items-center justify-center "
              >
                {" "}
                Team{" "}
              </Link>
              {/* <a
                href="#"
                title=""
                className="text-base text-white transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Team{" "}
              </a> */}
            </div>

            {/* <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
              <a
                href="#"
                title=""
                className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"
              >
                {" "}
                Log in{" "}
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg"
                role="button"
              >
                {" "}
                Log In{" "}
              </a>
            </div> */}

            {/* <button
              type="button"
              className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800"
            > */}
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              {/* <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg> */}

              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              {/* <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button> */}
          </div>
        </div>
      </header>

      <section className=" lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24 overflow-x-hidden">
        <div className=" overflow-y-hidden overflow-x-hidden absolute inset-x-0 bottom-0 z-10 hidden lg:flex">
          {/* <img className="hidden w-full lg:block" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards.png" alt="" />
            <img className="block w-full lg:hidden" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards-mobile.png" alt="" /> */}

          <div className="translate-x-[200px] translate-y-[150px]">
            <img
              className="hidden lg:block min-w-[250px]"
              src={iphone2}
              alt="iphone website mockup"
            />
          </div>

          <div
            // variants={fadeIn("up", 0.4)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.7 }}
            className=" max-w-[500px] min-w-[500px] translate-x-[350px] translate-y-[350px]"
          >
            <img className="hidden min-w-[550px] lg:block" src={ipad} alt="ipad website mockup" />
          </div>

          <div
            //   variants={fadeIn("left", 0.4)}
            //       initial="hidden"
            //       whileInView={"show"}
            //       viewport={{ once: false, amount: 0.7 }}
            className="min-w-[1200px] translate-x-[450px] -translate-y-[100px]"
          >
            <img
              //   variants={fadeIn("left", 0.4)}
              //   initial="hidden"
              //   whileInView={"show"}
              //   viewport={{ once: false, amount: 0.7 }}
              className="hidden lg:block"
              src={macbook1}
              alt="mabook website mockup"
            />
          </div>
        </div>

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-[55%] mx-auto text-center">
            <motion.h1
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-[30px] font-bold sm:text-6xl mx-auto  md:w-[700px]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white text-3xl font-bold sm:text-4xl xl:text-5xl xl:leading-tight">
                {" "}
                Unleash Your Website's Potential with Us{" "}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mt-5 text-base text-white sm:text-xl "
            >
              Transform Your Online Presence with Our Expert Website Development
              Services! Click Here to Get Started Today
            </motion.p>

            {/* <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700" role="button">
                    Apply for free
                    <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a> */}
            <div className="relative inline-flex mt-10 group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

              {/* <a
                href="#"
                title=""
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Let's Work Together
              </a> */}

              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"

                // offset={-200}
              >
                {" "}
                Let's Work Together{" "}
              </Link>
            </div>
            <div className="grid grid-cols-1 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
              <div className="flex items-center min-w-fit p-1 h-full w-full mx-auto bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
                <svg
                  className="flex-shrink-0"
                  width="31"
                  height="25"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z"
                    stroke="#28CC9D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z"
                    stroke="#28CC9D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.2231 15.8512H7.11157C3.73595 15.8512 1 18.5871 1 21.9628V22.9814C1 22.9814 4.18311 24 10.1674 24C16.1516 24 19.3347 22.9814 19.3347 22.9814V21.9628C19.3347 18.5871 16.5988 15.8512 13.2231 15.8512Z"
                    fill="#0B1715"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.07422 6.68386C5.07422 3.87152 7.35485 1.59088 10.1672 1.59088C12.9795 1.59088 15.2602 3.87152 15.2602 6.68386C15.2602 9.4962 12.9795 12.7954 10.1672 12.7954C7.35485 12.7954 5.07422 9.4962 5.07422 6.68386Z"
                    fill="#0B1715"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="ml-3 text-sm text-white">
                  Over 120 happy clients Worldwide
                </p>
              </div>

              <div
                className="flex items-center  
                    p-1 h-full w-full bg-white-400 min-w-fit rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 "
              >
                <svg
                  className="flex-shrink-0"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8335 21.9166H3.16683C2.6143 21.9166 2.08439 21.6972 1.69369 21.3065C1.30299 20.9158 1.0835 20.3858 1.0835 19.8333V3.16665C1.0835 2.61411 1.30299 2.08421 1.69369 1.69351C2.08439 1.30281 2.6143 1.08331 3.16683 1.08331H19.8335C20.386 1.08331 20.9159 1.30281 21.3066 1.69351C21.6973 2.08421 21.9168 2.61411 21.9168 3.16665V19.8333C21.9168 20.3858 21.6973 20.9158 21.3066 21.3065C20.9159 21.6972 20.386 21.9166 19.8335 21.9166Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 12.6667L9.25 15L16 8"
                    stroke="#28CC9D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="ml-3 text-sm text-white">SEO friendly websites</p>
              </div>

              <div
                className="flex items-center  
                    p-1 h-full w-full min-w-fit bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 "
              >
                <svg
                  className="flex-shrink-0"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 11H3C1.89543 11 1 11.8954 1 13V21C1 22.1046 1.89543 23 3 23H17C18.1046 23 19 22.1046 19 21V13C19 11.8954 18.1046 11 17 11Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 19C11.1046 19 12 18.1046 12 17C12 15.8954 11.1046 15 10 15C8.89543 15 8 15.8954 8 17C8 18.1046 8.89543 19 10 19Z"
                    stroke="#28CC9D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 7V6C15.0131 4.68724 14.5042 3.42303 13.5853 2.48539C12.6664 1.54776 11.4128 1.01346 10.1 1H10C8.68724 0.986939 7.42303 1.4958 6.48539 2.41469C5.54776 3.33357 5.01346 4.58724 5 5.9V7"
                    stroke="#28CC9D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="ml-3 text-sm text-white">24/7 Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Banner;
