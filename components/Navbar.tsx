"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Locations", "Rooms", "Experiences", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Locations");

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-8 py-5 relative z-10">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-white no-underline"
        >
          <div className="w-7 h-7 rounded-full bg-yellow-300 flex items-center justify-center">
            <svg viewBox="0 0 14 14" className="w-3.5 h-3.5" fill="#111">
              <path d="M7 1L9 5.5H13L9.5 8.5L11 13L7 10L3 13L4.5 8.5L1 5.5H5L7 1Z"
                stroke="#111" strokeWidth="0.5" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-semibold text-[17px]">Harmont</span>
        </motion.a>

        {/* Desktop Links */}
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8 list-none lg:text-lg"
        >
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                href="#"
                onClick={() => setActive(link)}
                className={`flex items-center gap-1.5 text-sm no-underline transition-colors
                  ${active === link
                    ? "text-white font-medium"
                    : "text-white/80 hover:text-white"
                  }`}
              >
                {active === link && (
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 inline-block" />
                )}
                {link}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Book Now */}
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block bg-yellow-300 hover:bg-yellow-200 text-black
                     px-5 py-2.5 rounded-full text-sm font-semibold transition-all
                     hover:scale-[1.03] active:scale-95"
        >
          Book Now
        </motion.button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300
            ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300
            ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300
            ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl
                       flex flex-col items-center justify-center gap-9"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-7 text-white text-3xl leading-none"
            >
              ✕
            </button>
            {navLinks.map((link, i) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href="#"
                  onClick={() => { setActive(link); setOpen(false); }}
                  className="text-white/80 hover:text-yellow-300 text-3xl font-medium
                             no-underline transition-colors"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setOpen(false)}
              className="bg-yellow-300 text-black px-8 py-3 rounded-full
                         text-base font-semibold mt-2"
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;