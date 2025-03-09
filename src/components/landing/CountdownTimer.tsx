import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({
  targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Default: 30 days from now
  className,
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // If we've reached the target date
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Then set up interval
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "w-full max-w-[600px] mx-auto p-6 rounded-xl bg-gradient-to-br from-slate-900/90 to-purple-900/30 backdrop-blur-md border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.2)]",
        className,
      )}
    >
      <motion.h3
        variants={item}
        className="text-center text-xl font-semibold mb-6 text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Launch Countdown
      </motion.h3>

      <div className="flex justify-center items-center gap-4 text-center">
        <motion.div variants={item} className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] mb-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            <span className="text-4xl font-bold text-white relative z-10">
              {formatNumber(timeLeft.days)}
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20"></div>
          </div>
          <span className="text-sm font-medium text-white/80">Days</span>
        </motion.div>

        <motion.div
          variants={item}
          className="text-2xl font-bold text-purple-400"
        >
          :
        </motion.div>

        <motion.div variants={item} className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] mb-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            <span className="text-4xl font-bold text-white relative z-10">
              {formatNumber(timeLeft.hours)}
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20"></div>
          </div>
          <span className="text-sm font-medium text-white/80">Hours</span>
        </motion.div>

        <motion.div
          variants={item}
          className="text-2xl font-bold text-purple-400"
        >
          :
        </motion.div>

        <motion.div variants={item} className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] mb-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            <span className="text-4xl font-bold text-white relative z-10">
              {formatNumber(timeLeft.minutes)}
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20"></div>
          </div>
          <span className="text-sm font-medium text-white/80">Minutes</span>
        </motion.div>

        <motion.div
          variants={item}
          className="text-2xl font-bold text-purple-400"
        >
          :
        </motion.div>

        <motion.div variants={item} className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] mb-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            <span className="text-4xl font-bold text-white relative z-10">
              {formatNumber(timeLeft.seconds)}
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20"></div>
          </div>
          <span className="text-sm font-medium text-white/80">Seconds</span>
        </motion.div>
      </div>

      <motion.div
        variants={item}
        className="mt-6 text-center text-white/70 text-sm"
      >
        Get ready for the launch of NoteDrop - your Web3 Airdrop Database
      </motion.div>
    </motion.div>
  );
};

export default CountdownTimer;
