import React from "react";
import Trustpilot from "../assets/logo-white.svg";
import Avatar1 from "../assets/testimonial1.jpeg";
import Avatar2 from "../assets/testimonial2.jpeg";
import Avatar3 from "../assets/testimonial3.jpeg";
import Avatar4 from "../assets/testimonial4.jpeg";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Testimonials = () => {
  return (
    <section className="bg-gray-800 text-gray-100">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 xl:col-span-2 xl:text-left">
            <motion.h2
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-4xl font-bold"
            >
              What our customers say about us
            </motion.h2>
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-gray-400"
            >
              If you're looking for a reliable, professional and experienced
              website development company, look no further. Contact us today to
              discuss your website development needs and let us help you take
              your business to the next level.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex bg-transparent bg-slate-700 sm-ml-[20px] max-w-fit p-2 rounded-md"
            >
              <h1 className="font-semibold flex-nowrap pr-2">We are on </h1>
              <img className="h-6" alt="trustpilot logo" src={Trustpilot} />
            </motion.div>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.3 }}
                  className="p-6 rounded shadow-md bg-gray-900"
                >
                  <p>
                    "I had a great experience working with this website
                    development company. They were responsive, professional, and
                    delivered a website that exceeded my expectations. Their
                    attention to detail and expertise really showed in the final
                    product. Highly recommend!"
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src={Avatar1}
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Rajesh Sharma,</p>
                      <p className="text-sm text-gray-400">
                        CTO of BrightStar Co.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.3 }}
                  className="p-6 rounded shadow-md bg-gray-900"
                >
                  <p>
                    "I couldn't be happier with the website that this company
                    created for me. They really took the time to understand my
                    business and created a website that not only looks great but
                    also drives traffic and leads. I highly recommend this
                    company to anyone looking for a website for business."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src={Avatar2}
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Anjali Singh,</p>
                      <p className="text-sm text-gray-400">
                        Owner of NexGen Ltd
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="grid content-center gap-4">
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.3 }}
                  className="p-6 rounded shadow-md bg-gray-900"
                >
                  <p>
                    "The team at this company did an amazing job with both the
                    design and SEO of my website. They listened to my needs and
                    created a website that exceeded my expectations. Their SEO
                    strategies helped improve my website's search engine ranking
                    and attract more potential customers. I am very happy with
                    their services and would definitely work with them again."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src={Avatar3}
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Rakesh Patel,</p>
                      <p className="text-sm text-gray-400">
                        CEO of ApexTech Services
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.3 }}
                  className="p-6 rounded shadow-md bg-gray-900"
                >
                  <p>
                    "I was hesitant to invest in a professional website, but
                    this website development company made the process easy and
                    affordable. They created a beautiful, user-friendly website
                    that has helped me to showcase my business and attract new
                    clients. Their team was always available to answer my
                    questions and provide guidance throughout the process. I'm
                    thrilled with the end result!"
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src={Avatar4}
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Vikram Desai,</p>
                      <p className="text-sm text-gray-400">
                        CTO of NexGen Enterprises
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
