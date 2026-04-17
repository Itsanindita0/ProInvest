"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const properties = [
  {
    id: 1,
    title: "Residential property",
    location: "Manchester",
    image: "/images/photo.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Modern House",
    location: "California",
    image: "/images/photo1.jpg",
    size: "medium",
  },
  {
    id: 3,
    title: "Apartment",
    location: "New York",
    image: "/images/photo2.jpg",
    size: "small",
  },
  {
    id: 4,
    title: "Villa",
    location: "Miami",
    image: "/images/photo3.jpg",
    size: "medium",
  },
  {
    id: 5,
    title: "Villa",
    location: "Miami",
    image: "/images/photo4.jpg",
    size: "medium",
  },
];

export default function Gallery() {
  const controls = useAnimation();
  const [isHover, setIsHover] = useState(false);

  // duplicate items for seamless loop
  const loopItems = [...properties, ...properties];

  useEffect(() => {
    if (!isHover) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        },
      });
    } else {
      controls.stop();
    }
  }, [isHover, controls]);

  return (
    <section className="py-16 px-4 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-400 uppercase tracking-widest">
          Gallery
        </p>
        <h2 className="text-3xl font-bold">
          Most investment properties
        </h2>
      </div>

      {/* 🔥 Infinite Scroll Wrapper */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >

        {/* Gradient fade (modern effect) */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scroll Track */}
        <motion.div
          animate={controls}
          className="flex gap-6 w-max"
        >
          {loopItems.map((item, index) => {
            const sizeClasses =
              item.size === "large"
                ? "w-[350px] h-[260px]"
                : item.size === "medium"
                ? "w-[260px] h-[260px]"
                : "w-[200px] h-[260px]";

            return (
              <motion.div
                key={index}
                className={`relative ${sizeClasses} rounded-2xl overflow-hidden flex-shrink-0`}
                whileHover={{
                  scale: 1.08,
                  rotateY: -5,
                  boxShadow: "0px 25px 50px rgba(0,0,0,0.4)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                />

                {/* text */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{item.title} →</h3>
                  <p className="text-sm text-white/80">
                    {item.location}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}