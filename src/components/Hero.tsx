'use client';

import React, { useEffect, useState } from 'react';

const Hero = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-10-26T10:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white text-center">
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          WordPress x GCETTS
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Where Community Meets Code
        </p>
        <div className="flex justify-center gap-4 md:gap-8 text-2xl md:text-4xl mb-8">
          <div>
            <div className="font-bold">{timeLeft.days || '0'}</div>
            <div className="text-sm">Days</div>
          </div>
          <div>
            <div className="font-bold">{timeLeft.hours || '0'}</div>
            <div className="text-sm">Hours</div>
          </div>
          <div>
            <div className="font-bold">{timeLeft.minutes || '0'}</div>
            <div className="text-sm">Minutes</div>
          </div>
          <div>
            <div className="font-bold">{timeLeft.seconds || '0'}</div>
            <div className="text-sm">Seconds</div>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
