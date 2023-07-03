import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* Left Section */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >

        {/* Discount Section */}
        <motion.div initial={{x:-1000}} animate={{x: 0}} transition={{delay:0.8, duration: 1}} className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-3`}>
            <span className="text-white font-semibold">20%</span> Discount for{" "}
            <span className="text-white font-semibold">1 Month</span> Account
          </p>
        </motion.div>

        <motion.div initial={{x:-1000}} animate={{x: 0}} transition={{delay:0.8, duration: 1}} className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted></GetStarted>
          </div>

        </motion.div>

        <motion.h1 initial={{x:-1000}} animate={{x: 0}} transition={{delay:0.8, duration: 1}} className="font-poppins font-bold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method
        </motion.h1>

        <motion.p initial={{x:-1000}} animate={{x: 0}} transition={{delay:1, duration: 1}} className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </motion.p>
      </div>
      {/* End Left Section */}


      {/* Robot Image with Gradients */}
      <div className={`relative ${styles.flexCenter} md:my-0 my-10`}>
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full top-0 bottom-30 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      {/* End Robot Image */}

      {/* Get Started Components for mobile */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted></GetStarted>
      </div>
      {/* End Get Started Components for Mobile */}

    </section>
  );
};

export default Hero;
