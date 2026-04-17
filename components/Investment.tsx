"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Investment = () => {
  return (
    <div className="bg-gray-100 py-20">
      {/*  MAIN CONTAINER (CENTERED) */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Investment in <br /> real estate
          </h1>
          <p className="text-gray-500">
            Attractive location close to business centers provides guaranteed
            rental.
          </p>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center">
          {/* Main Image */}
          <div className="w-[280px] sm:w-[320px] md:w-[380px] h-[360px] rounded-2xl overflow-hidden bg-purple-300 relative">
            <Image
              src="/images/3rdpartimage2.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* 🔵 TOP RIGHT CARD */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="absolute top-4 right-[-20px] bg-white p-1 rounded-xl shadow-lg "
          >
            <div>
              <Image
                src="/images/3rdpartimage24.jpg"
                alt="image"
                className="object-contain"
                width={200}
                height={200}
              />
            </div>
          </motion.div>

          {/* 🟢 BOTTOM CARD */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-[-20px] bg-transparent left-1/2 -translate-x-1/2 bg-white  rounded-2xl p-1 shadow-lg "
          >
          
              <Image
                src="/images/3rdpartimage25.jpg"
                alt="image"
                className="object-contain rounded-2xl"
                width={150}
                height={150}
              />
            
          </motion.div>

          {/* ⚫ ROTATING CIRCLE */}
          <motion.div
            initial={{ rotate: 0, opacity: 0 }}
            whileInView={{ rotate: 360, opacity: 1 }}
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{
              rotate: { repeat: Infinity, duration: 10, ease: "linear" },
              scale: { repeat: Infinity, duration: 3, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
            className="absolute bottom-[-30px] left-[-50px] w-30
             w-20 h-20 lg:bottom-[-30px] lg:left-[-640px]"
          >
            <Image
              src="/images/3rdpartimage1.jpg"
              alt="circle"
              width={500}
              height={500}
              className=" object-contain rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
