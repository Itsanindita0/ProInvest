"use client";
import { motion } from "framer-motion";

const SemiCircle = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative w-full h-full"
    >
      <svg viewBox="0 0 200 100" className="w-full h-full">

        {/* Gradient */}
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#86efac" />
          </linearGradient>
        </defs>

        {/* Background Arc */}
        <path
          d="M 10 100 A 90 90 0 0 1 190 100"
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth="10"
        />

        {/* Animated Arc */}
        <motion.path
          d="M 10 100 A 90 90 0 0 1 190 100"
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="10"
          strokeLinecap="round"
          variants={{
            initial: { pathLength: 0 },
            hover: { pathLength: 0.87 },
          }}
          transition={{ duration: 1 }}
        />
      </svg>

      {/* Percentage */}
      <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-gray-800">
        87%
      </div>
    </motion.div>
  );
};

export default SemiCircle;