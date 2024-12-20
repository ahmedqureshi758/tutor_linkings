import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaRegClock, FaBookOpen, FaMobileAlt } from "react-icons/fa";

function HeroSectionResources() {
  const containerRef = useRef(null);

  // Track the mouse position
  const mouseY = useMotionValue(0);
  const translateY = useTransform(mouseY, [0, 1], [-20, 20]);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (container) {
      const { top, height } = container.getBoundingClientRect();
      const mouseRelativeY = (e.clientY - top) / height;
      mouseY.set(mouseRelativeY); // Normalize the mouse Y position (0 to 1)
    }
  };

  return (
    <motion.section
      ref={containerRef}
      className="py-16 bg-white text-gray-800"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="container mx-auto px-6"
        style={{ y: translateY }}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold tracking-wide mb-4">
            Top Picks for Students
          </h2>
          <p className="text-lg text-gray-600">
            Unlock your full potential with these handpicked learning resources.
          </p>
        </motion.div>

        {/* Resource Items */}
        <motion.div
          className="flex flex-col gap-12 md:gap-16"
          style={{ y: translateY }}
        >
          {/* Resource Item 1 */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 shadow-md text-4xl"
              whileHover={{ scale: 1.2 }}
              style={{ y: translateY }}
            >
              <FaRegClock />
            </motion.div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Time Management Tools</h3>
              <p className="text-gray-600 text-base">
                Learn to organize your time efficiently with apps and strategies
                that keep you on track.
              </p>
            </div>
          </motion.div>

          {/* Resource Item 2 */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 shadow-md text-4xl"
              whileHover={{ scale: 1.2 }}
              style={{ y: translateY }}
            >
              <FaMobileAlt />
            </motion.div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Educational Apps</h3>
              <p className="text-gray-600 text-base">
                Explore engaging apps that make learning interactive, fun, and
                impactful.
              </p>
            </div>
          </motion.div>

          {/* Resource Item 3 */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-green-100 text-green-500 shadow-md text-4xl"
              whileHover={{ scale: 1.2 }}
              style={{ y: translateY }}
            >
              <FaBookOpen />
            </motion.div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Online Libraries</h3>
              <p className="text-gray-600 text-base">
                Gain access to an extensive collection of e-books, articles, and
                other learning materials.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default HeroSectionResources;
