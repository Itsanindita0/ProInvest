"use client";

import { motion } from "framer-motion";
import { Handshake } from 'lucide-react';
import { Clapperboard } from 'lucide-react';
import { Blocks } from 'lucide-react';
import { MessageSquareHeart } from 'lucide-react';




const Footer = () => {
  return (
    <footer className="bg-[#0f1b2d] text-gray-300 py-16 px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* 🔥 LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-semibold text-lg mb-2">
            ProInvest
          </h2>

          <p className="text-sm text-gray-400 mb-6">
            High-quality, sustainable property investment with one of the UK's
            finest housebuilders.
          </p>

          <h3 className="text-white font-medium mb-2">
            Subscribe our newsletter.
          </h3>

          {/* INPUT */}
          <div className="flex items-center bg-white rounded-full overflow-hidden mb-3">
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-4 py-2 text-sm text-black outline-none w-full"
            />
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-400 hover:bg-green-500 text-black px-5 py-2 rounded-full text-sm font-medium"
          >
            Subscribe Now →
          </motion.button>
        </motion.div>

        {/* 🔥 ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-white font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About us</li>
            <li>Our team</li>
            <li>Contact us</li>
          </ul>
        </motion.div>

        {/* 🔥 INVESTMENTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-white font-semibold mb-4">Investments</h4>
          <ul className="space-y-2 text-sm">
            <li>FAQs</li>
            <li>How it works</li>
            <li>Affiliates program</li>
          </ul>
        </motion.div>

        {/* 🔥 CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-white font-semibold mb-4">Contact us</h4>

          <p className="text-sm mb-2">+8801600884475</p>
          <p className="text-sm mb-2">support@proinvest.com</p>
          <p className="text-sm mb-4">info@proinvest.com</p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3">
            <div className="icon"><Handshake size={16}/></div>
            <div className="icon"><Clapperboard size={16}/></div>
            <div className="icon"><Blocks size={16}/></div>
            <div className="icon"><MessageSquareHeart size={16}/></div>
</div>

      </motion.div>
      </div>

    </footer>
  );
};

export default Footer;