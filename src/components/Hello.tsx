"use client";
import React, { useState, useEffect } from "react";

import SplitText from "./widgets/SplitText";
import useIsMobile from "@/hooks/useIsMobile";
const Hello = () => {
  const [showHello, setShowHello] = useState(true);
  const isMobile = useIsMobile();

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
    setShowHello(false);
  };

  useEffect(() => {
    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer");
    if (showHello) {
      document.body.style.overflow = "hidden";
      if (nav) nav.style.display = "none";
      if (footer) footer.style.display = "none";
    } else {
      document.body.style.overflow = "auto";
      if (nav) nav.style.display = "block";
      if (footer) footer.style.display = "block";
    }
  }, [showHello]);

  if (!showHello) return null;

  return (
    <div className="fixed inset-0 z-60 flex-col flex items-center justify-center bg-[#060010] h-screen">
      {!isMobile && (
        <SplitText
          text="Welcome to WordPress &#x000D7; GCETTS"
          className="text-4xl font-semibold text-center text-white text-wrap"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      )}
      {isMobile && (
        <>
          <SplitText
            text="Welcome to"
            className="text-4xl font-semibold text-center text-white text-wrap"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="WordPress"
            className="text-4xl font-semibold text-center text-white text-wrap"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="&#x000D7;"
            className="text-4xl font-semibold text-center text-white text-wrap"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="GCETTS!"
            className="text-4xl font-semibold text-center text-white text-wrap"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </>
      )}
    </div>
  );
};

export default Hello;
