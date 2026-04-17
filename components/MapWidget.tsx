"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MapWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Small Map */}
      <motion.div
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-[18%] left-4 sm:left-10 md:left-14 z-50
                   w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden
                   border-2 border-white shadow-xl cursor-pointer"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          className="w-full h-full pointer-events-none"
          style={{ border: 0 }}
          loading="lazy"
        />
      </motion.div>

      {/* Expanded Map Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-[90%] md:w-[70%] h-[60%] md:h-[70%] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking map
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3000!2d-110.76!3d43.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MapWidget;
