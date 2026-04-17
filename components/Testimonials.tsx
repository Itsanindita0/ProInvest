"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7 },
  },
};

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-24 flex justify-center">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl w-full px-6 space-y-12"
      >

        {/* 🔥 HEADER */}
        <motion.div variants={item} className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400 mb-2">TESTIMONIAL</p>
            <h1 className="text-3xl md:text-4xl font-bold">
              Investor is our priority
            </h1>
          </div>

          {/* ARROWS */}
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border flex items-center justify-center">
              ←
            </button>
            <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
              →
            </button>
          </div>
        </motion.div>

        {/* 🔥 MAIN CONTENT */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >

          {/* LEFT RATING CARD */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="bg-green-100 p-6 rounded-3xl flex justify-center items-center"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 text-center shadow-md w-[200px]"
            >
              <h2 className="text-4xl font-bold">4.9</h2>
              <p className="text-green-500 text-sm">★★★★★</p>
              <p className="text-xs text-gray-500 mt-2">
                Trustscore on 436 reviews
              </p>

              {/* AVATARS */}
              <div className="flex justify-center mt-4 -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                ))}
                <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-xs border-2 border-white">
                  1M+
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div variants={item} className="relative">

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Communication is so important when you invest big sums of money, it’s that feeling
              of security. In addition, the money I am due has always arrived on time. There are
              no excuses for late payment.
            </p>

            {/* QUOTE ICON */}
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute right-0 bottom-0 text-7xl text-purple-200 font-bold"
            >
              “
            </motion.div>

            {/* AUTHOR */}
            <p className="text-sm text-gray-500 mt-4">
              <span className="font-semibold">Tarik Eamin</span> / CEO at WhiteFrame Creative
            </p>

          </motion.div>

        </motion.div>

        {/* 🔥 BOTTOM LINE */}
        <div className="border-t border-gray-200 pt-6"></div>

      </motion.div>
    </div>
  );
};

export default Testimonial;