"use client";
import { motion } from "framer-motion";

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
    scale: 0.9,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Opportunity = () => {
  return (
    <div className="bg-gray-100 py-24 flex justify-center">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl w-full px-6 space-y-12"
      >

        {/*  TOP SECTION */}
        <motion.div
          variants={item}
          className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg overflow-hidden"
        >

          {/*  ANIMATED BACKGROUND SHAPE */}
          <motion.div
            initial={{ x: 200, rotate: 20, opacity: 0 }}
            whileInView={{ x: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute right-0 top-0 w-[260px] h-full bg-orange-200 rounded-l-[120px] -z-10"
          />

          {/* LEFT TEXT */}
          <div className="max-w-lg overflow-hidden">

            {/* TEXT REVEAL */}
            <motion.h1
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our investment opportunity for you
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-sm mb-6"
            >
              The property that suits you. Choose an apartment that suits your urgent requirements.
            </motion.p>

            {/*  MAGNETIC BUTTON */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 py-2 rounded-full text-sm shadow-md"
            >
              Request a call →
            </motion.button>

          </div>

          {/* FLOATING RATING CARD */}
          <motion.div
            initial={{ y: 80, rotate: 5, opacity: 0 }}
            whileInView={{ y: 0, rotate: 0, opacity: 1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-6 text-center w-[180px]"
          >
            <h2 className="text-4xl font-bold">4.9</h2>
            <p className="text-green-500 text-sm">★★★★★</p>
            <p className="text-xs text-gray-500 mt-2">
              Trustscore on 436 reviews
            </p>
          </motion.div>

        </motion.div>

        {/* BOTTOM CARDS */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >

          {["Residential", "Commercial", "Raw land"].map((title, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.04,
                rotate: i === 1 ? 1 : -1,
              }}
              className="bg-white rounded-2xl p-6 shadow-md relative overflow-hidden"
            >

              {/* COLOR BLOB */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full ${
                  i === 0
                    ? "bg-purple-200"
                    : i === 1
                    ? "bg-cyan-200"
                    : "bg-green-200"
                }`}
              />

              <div className="w-8 h-8 border rounded-full flex items-center justify-center mb-4 text-sm">
                0{i + 1}
              </div>

              <h3 className="font-semibold mb-2">{title} property</h3>

              <p className="text-xs text-gray-500 mb-4">
                Providing private investors with investment opportunities.
              </p>

              <motion.span
                whileHover={{ x: 5 }}
                className="text-sm font-medium inline-block"
              >
                View More →
              </motion.span>

            </motion.div>
          ))}

        </motion.div>

      </motion.div>
    </div>
  );
};

export default Opportunity;