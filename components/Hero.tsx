"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import MapWidget from "./MapWidget";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/images/Home123.jpg"
        alt="hero"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0">
        {/* Border */}
        <div className="absolute inset-4 sm:inset-6 md:inset-10 border-4 border-white/70 rounded-[30px] sm:rounded-[40px]" />

        {/* Navbar wrapper — sits inside the border frame */}
        <div className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 right-4 sm:right-6 md:right-10 z-10">
          <Navbar />
        </div>
      </div>

      {/* hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute  inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10"
      >
        {/* ── MAP WIDGET — bottom left ── */}
        <div className="hidden md:block">
          <MapWidget />
        </div>
        {/* Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=" text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-black"
        >
          Find Your <br className="hidden sm:block" />
          Perfect <span className="text-yellow-300">Space</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-xs sm:max-w-md md:max-w-2xl"
        >
          Discover handpicked luxury cabins in breathtaking locations. Unplug,
          unwind, and reconnect with what matters most.
        </motion.p>
      </motion.div>

      {/* Floating Tags */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.8,
            },
          },
        }}
        className="absolute bottom-44 sm:bottom-48 left-1/2 -translate-x-1/2 flex flex-wrap gap-3 justify-center px-4"
      >
        {/* Tag 1 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs sm:text-sm"
        >
          Wi-Fi 100 Mbps
        </motion.div>

        {/* Tag 2 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs sm:text-sm"
        >
          Self Check-in
        </motion.div>

        {/* Tag 3 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs sm:text-sm"
        >
          Pet Friendly
        </motion.div>
      </motion.div>

      {/* Rating */}
      <div className="absolute bottom-36 sm:bottom-40 right-4 sm:right-10 text-white text-right">
        <div className="text-xl sm:text-3xl font-bold mr-9">⭐ 4.9</div>
        <p className="text-xs sm:text-sm text-white/70 mr-6">
          from 2,400+ stays
        </p>
      </div>

      {/* Booking Bar */}

      <div className=" hidden lg:flex absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[80%] bg-white rounded-2xl lg:rounded-full shadow-lg flex-col lg:flex-row items-center justify-between px-4 py-2 gap-3">
        <div className="flex flex-col text-xs sm:text-sm">
          <span className="text-gray-400">Room</span>
          <span className="font-medium">Pine Log</span>
        </div>

        <div className="flex flex-col text-xs sm:text-sm">
          <span className="text-gray-400">Check-in</span>
          <span className="font-medium">15 Mar 2025</span>
        </div>

        <div className="flex flex-col text-xs sm:text-sm">
          <span className="text-gray-400">Check-out</span>
          <span className="font-medium">30 Mar 2025</span>
        </div>

        <div className="flex flex-col text-xs sm:text-sm">
          <span className="text-gray-400">Guests</span>
          <span className="font-medium">4 Adults</span>
        </div>

        <button className="bg-yellow-200 hover:bg-yellow-300 transition px-5 py-2 rounded-full text-sm font-medium">
          Book Your Stay
        </button>
      </div>
    </div>
  );
};

export default Hero;
