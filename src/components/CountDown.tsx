"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TimeLeft } from "@/types/TimeLeft";

export default function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  // Calculate time difference
  useEffect(() => {
    const getTimeLeft = () => {
      const now = new Date().getTime();
      const distance = Math.max(0, new Date(targetDate).getTime() - now);

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      };
    };

    const tick = () => setTimeLeft(getTimeLeft());
    tick(); // initial render
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="flex justify-center items-center gap-6 px-4 py-2 bg-transparent text-white text-sm font-medium">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={value} // animate on value change
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="text-xl font-semibold"
            >
              {String(value).padStart(2, "0")}
            </motion.div>
          </AnimatePresence>
          <div className="text-xs text-gray-400 capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
}
