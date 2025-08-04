"use client";

import React from "react";
import CountdownTimer from "@/components/widgets/CountDown";
import Script from "next/script";

const Hero = () => {
  const targetDate = new Date("2025-08-30T11:00:00+05:30");

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white text-center">
      <div className="relative z-10 p-4 overflow-x-hidden">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-bruno-ace text-pretty">
          WordPress Community Kolkata <br/> X <br/> G.C.E.T.T.S
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-audiowide">Coming Soon at G.C.E.T.T.S. <br/> #SpreadTheWord.</p>
        <CountdownTimer targetDate={targetDate} />
        <button className="my-4">
          <a
            href="https://lu.ma/event/evt-zVPefEq1DHDLDCm"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-black font-semibold px-6 py-3 rounded-lg transition duration-300 w-[10rem] text-center"
            data-luma-action="checkout"
            data-luma-event-id="evt-zVPefEq1DHDLDCm"
          >
            Register Now
          </a>
        </button>

        {/* <Script
          id="luma-checkout"
          src="https://embed.lu.ma/checkout-button.js"
        /> */}
      </div>
    </section>
  );
};

export default Hero;