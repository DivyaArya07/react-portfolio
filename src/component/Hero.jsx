import React from "react";
import { HERO_CONTENT } from "../constants";
import ProfilePic from "../assets/Dprofile.png";
import { delay, motion } from "framer-motion";
import resume from "../../public/DResume.pdf";
import { a } from "framer-motion/client";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="pb-16 text-6xl  font-thin tracking-tight lg:mt-16 lg:text-5xl"
            >
              Divya AG
            </motion.h1>
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className=" bg-gradient-to-r from-pink-300 via-slate-500
            to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Front End Developer
            </motion.span>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="my-4"
            >
              <h2>East West Collage of Management -Bangalore</h2>
              <h1>Master of Computer Application(MCA) - 2022/2024</h1>
              <h1>CPGA-7.62/10</h1>
            </motion.div>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="h-1/4 w-60 flex justify-center items-center">
              <a
                href="DResume.pdf" // Update with your resume file's path
                download="My_Resume" // Optional: Sets the downloaded file's name
              >
                <button className="bg-slate-400 px-20 py-2 rounded text-stone-700 my-6">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
        {/*adding  top right side profile img*/}
        <div className="w-full lg:w-1/4 lg:p-6">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className=" flex justify-center"
          >
            <img
              className="rounded-full w-50 h-50 object-cover animate-slide-in-left"
              src={ProfilePic}
              alt="Dprofile.png"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
