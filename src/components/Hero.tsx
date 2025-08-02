"use client";

import React from "react";
import CountdownTimer from "@/components/widgets/CountDown";

const Hero = () => {
  const targetDate = new Date("2025-08-30T11:00:00+05:30");

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white text-center">
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-bruno-ace">
          WordPress Community Kolkata <br/> X <br/> G.C.E.T.T.S
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-audiowide">At G.C.E.T.T.S Auditorium. Spread the Word.</p>
        <CountdownTimer targetDate={targetDate} />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Hero;