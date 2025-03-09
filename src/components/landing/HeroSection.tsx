import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent pb-2"
          >
            NoteDrop
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="block mt-2"
          >
            Web3 Airdrop Database
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          Track, discover, and stay updated on the latest cryptocurrency
          airdrops. Never miss an opportunity in the Web3 space again.
        </motion.p>
      </motion.div>

      {/* Animated crypto illustration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative w-full max-w-4xl mx-auto h-64 md:h-80"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Central node */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8, type: "spring" }}
            className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)] z-10"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 12L12 20L4 12L12 4Z"
                fill="white"
                fillOpacity="0.9"
              />
            </svg>
          </motion.div>

          {/* Orbiting nodes */}
          {[...Array(6)].map((_, i) => {
            const delay = 1.6 + i * 0.1;
            const angle = i * 60 * (Math.PI / 180);
            const radius = 120;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x, y }}
                transition={{ delay, duration: 0.8, type: "spring" }}
                className="absolute w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                style={{ left: "calc(50% - 20px)", top: "calc(50% - 20px)" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6L16 10H8L12 6Z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M12 18L8 14H16L12 18Z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                </svg>
              </motion.div>
            );
          })}

          {/* Connecting lines */}
          {[...Array(6)].map((_, i) => {
            const delay = 1.8 + i * 0.1;
            const angle = i * 60 * (Math.PI / 180);
            const radius = 120;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            const length = Math.sqrt(x * x + y * y);
            const rotation = Math.atan2(y, x) * (180 / Math.PI);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 0.6, scaleX: 1 }}
                transition={{ delay, duration: 0.5 }}
                className="absolute h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 origin-left"
                style={{
                  left: "50%",
                  top: "50%",
                  width: `${length}px`,
                  transform: `rotate(${rotation}deg)`,
                }}
              />
            );
          })}
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const delay = Math.random() * 2;
          const duration = Math.random() * 10 + 10;
          const initialX = Math.random() * 100 - 50;
          const initialY = Math.random() * 100 - 50;
          const x = Math.random() * 200 - 100;
          const y = Math.random() * 200 - 100;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: initialX, y: initialY }}
              animate={{
                opacity: [0, 0.5, 0],
                x: [initialX, x, initialX],
                y: [initialY, y, initialY],
              }}
              transition={{
                delay,
                duration,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute rounded-full bg-blue-400"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: "calc(50% - 1px)",
                top: "calc(50% - 1px)",
                boxShadow: `0 0 ${size * 2}px rgba(96,165,250,0.7)`,
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default HeroSection;
