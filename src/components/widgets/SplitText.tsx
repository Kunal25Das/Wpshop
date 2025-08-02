"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants, Transition } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words";
  from?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
  to?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  onLetterAnimationComplete?: () => void;
  staggerDelay?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "elastic.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "left",
  onLetterAnimationComplete,
  staggerDelay = 0.05,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    // threshold, 
    // margin: rootMargin as MarginType,
    once: true 
  });
  const controls = useAnimation();

  // Convert HTML entities to actual characters
  const decodedText = text.replace(/&#x([0-9A-F]+);/gi, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });

  // Split text based on splitType
  const splitText = splitType === "chars" 
    ? decodedText.split("")
    : decodedText.split(" ");

  // Convert ease string to framer motion ease
  const getEaseFunction = (easeStr: string) => {
    switch (easeStr) {
      case "power3.out":
        return [0.215, 0.61, 0.355, 1];
      case "power2.out":
        return [0.25, 0.46, 0.45, 0.94];
      case "power4.out":
        return [0.165, 0.84, 0.44, 1];
      case "back.out":
        return [0.175, 0.885, 0.32, 1.275];
      case "elastic.out":
        return [0.68, -0.55, 0.265, 1.55];
      default:
        return "easeOut";
    }
  };

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        controls.start("visible");
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, controls, delay]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0,
      },
    },
  };

  const childVariants: Variants = {
    hidden: from,
    visible: {
      ...to,
      transition: {
        duration,
        ease: getEaseFunction(ease),
      }as Transition,
    },
  };

  const handleAnimationComplete = () => {
    if (onLetterAnimationComplete) {
      // Small delay to ensure all animations are complete
      setTimeout(() => {
        onLetterAnimationComplete();
      }, 100);
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ 
        textAlign,
        display: "inline-block",
        width: textAlign === "center" ? "100%" : "auto"
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        onAnimationComplete={handleAnimationComplete}
        style={{
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: textAlign === "center" ? "center" : textAlign === "right" ? "flex-end" : "flex-start",
        }}
      >
        {splitText.map((char, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{
              display: "inline-block",
              whiteSpace: char === " " ? "pre" : "normal",
              minWidth: char === " " ? "0.5em" : "auto",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default SplitText;