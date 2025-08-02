"use client";

import React, { useEffect, useState } from "react";
import CountdownTimer from "./CountDown";

const Hero = () => {
  const targetDate = new Date("2025-08-30T11:00:00+05:30");

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white text-center">
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          WordPress x GCETTS
        </h1>
        <p className="text-lg md:text-2xl mb-8">Where Community Meets Code</p>
        <CountdownTimer targetDate={targetDate} />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
