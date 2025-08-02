"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TimeLeft } from "@/types/TimeLeft";

export default function CountdownTimer({ targetDate }: { targetDate: Date }) {
const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

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
    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="flex justify-center items-center gap-2 px-4 py-2 bg-transparent text-white font-medium font-geostar-fill">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div className="flex items-center gap-2" key={unit}>
          <div className="flex flex-col items-center">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-4xl font-semibold bg-white/20 rounded px-2 py-1"
              >
                {String(value).padStart(2, "0")}
              </motion.div>
            </AnimatePresence>
            <div className="text-sm text-gray-400 capitalize">{unit}</div>
          </div>
          {index === 3 ? null : (
            <span className="text-5xl font-geostar-fill self-start"> : </span>
          )}
        </div>
      ))}
    </div>
  );
}