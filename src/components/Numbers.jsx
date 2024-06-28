import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";


const Numbers = () => {
    const [ref, inView] = useInView({
      threshold: 0.5,
    });
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24" ref={ref}>
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-5xl lg:text-5xl">
            Numbers tell our story
          </h2>
          <p className="mt-3 sm:text-xl leading-relaxed text-gray-600 md:mt-8">
          We've delivered numerous successful web development projects to clients across various industries. Our experienced team works tirelessly to deliver high-quality, custom solutions on time and within budget. Let our track record speak for itself - we're ready to take on your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                       {inView ? <CountUp start={0} end={6} duration={1} /> : null}+

              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Years in business
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Creating the successful path
            </p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                {" "}
                {inView ? <CountUp start={0} end={4821} duration={2} /> : null}{" "}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Projects delivered
            </p>
            <p className="text-base mt-0.5 text-gray-500">In last 6 years</p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                {" "}
                {inView ? <CountUp start={0} end={50} duration={1} /> : null}+{" "}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Team members
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Working for your success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
