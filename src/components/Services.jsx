import React from "react";
import { FaCode } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";
import { MdDesignServices } from "react-icons/md";

import { Link } from "react-scroll";


const Services = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-5xl text-3xl font-medium title-font text-gray-900 mb-4">
            Our <spam className="font-bold">Awesome</spam> Services
          </h1>
          {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl poast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-500 mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10"
                viewBox="0 0 24 24"
              >
              {/* //these are old icons */}
                {/* <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> */}
                <FaCode 
                    size={25}
                />
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Web Development
              </h2>
              <p class="leading-relaxed text-base">
                Our website development service include visually appealing websites for all kinds of businesses, we provide Wordpress websites, Ecommerce websites, with free domain and hosting for first year.
              </p>
              {/* <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-500 mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10"
                viewBox="0 0 24 24"
              >
                {/* <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path> */}
                <MdDesignServices 
                    size={25}
                />
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Web Design
              </h2>
              <p class="leading-relaxed text-base">
              Creating custom website designs from scratch, as well as customizing pre-built templates and themes to meet the unique requirements of each client. We optimize the website for fast loading times, mobile-friendliness, and accessibility.
 

              </p>
              {/* <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-500 mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10"
                viewBox="0 0 24 24"
              >
                {/* <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle> */}
                <HiTrendingUp
                    size={25}
                /> 
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                SEO Services
              </h2>
              <p class="leading-relaxed text-base">
              Our SEO services are designed to increase your website's visibility, traffic, and leads/sales from search engines. We follow ethical SEO practices and stay up-to-date with the latest algorithm updates and industry best practices to ensure that your website is optimized for long-term success.
              </p>
              {/* <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-fit">
        <Link 
        to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className='flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg'
                >
          {''}Learn More !{''}
        
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
