"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SemiCircle from "./SemiCircle";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const About = () => {
  return (
    <div className="bg-gray-100 py-24 flex justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      >
        {/* LEFT CARD */}
        <motion.div
          variants={item}
          whileHover={{
            scale: 1.04,
            rotateX: 3,
            rotateY: -3,
          }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white rounded-3xl p-6 shadow-md flex items-center justify-center [transform-style:preserve-3d]"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/3]">
            <Image
              src="/images/AboutImage.png"
              alt="about"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div variants={container} className="flex flex-col gap-6">
          {/* TOP CARD */}
          <motion.div
            variants={item}
            whileHover={{
              scale: 1.03,
              rotateX: 2,
              rotateY: 2,
            }}
            className="bg-white rounded-3xl p-6 shadow-md"
          >
            <h2 className="text-lg font-semibold mb-2">
              Yearly revenue increase
            </h2>

            <p className="text-gray-500 text-xs mb-4 max-w-xs">
              The property that suits you. Choose an apartment that adds your
              urgent requirements.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-green-100 rounded-2xl p-4 flex justify-center items-center"
            >
              <div className="w-[180px] h-[100px]">
                <SemiCircle />
              </div>
            </motion.div>
          </motion.div>

          {/* BOTTOM CARD */}
          <motion.div
            variants={item}
            whileHover={{
              scale: 1.03,
              rotate: 0.5,
            }}
            className="bg-white rounded-3xl p-6 shadow-md"
          >
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="bg-purple-200 rounded-2xl p-4 flex justify-between items-center"
            >
              <div>
                <p className="text-xs text-gray-600">
                  Our revenue increment analytics
                </p>
                <p className="text-lg font-bold">$250,862</p>
              </div>

              {/* WAVE FLOAT */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="text-xs text-gray-500"
              >
                +12%
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
