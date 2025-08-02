"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ISourceOptions,
  MoveDirection,
  type Engine,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Geist, Geist_Mono } from "next/font/google";
import {
  brunoAce,
  orbitron,
  quantico,
  audiowide,
  tourney,
  geostarFill,
} from "@/styles/Fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await initParticles(engine); // Or loadFull/loadBasic as needed
    });
  });

  const initParticles = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setInit(true);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "black",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: [ "#cc79f9", "#11c0fa", "#bf3eff", "#ff77ff", "#cba0f4", "#79dcff", "#5a4fcf", "#f542a7", "#58427c" ]
        },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 2,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: MoveDirection["none"],
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${brunoAce.variable} ${orbitron.variable} ${quantico.variable} ${audiowide.variable} ${tourney.variable} ${geostarFill.variable} antialiased`}
      >
        <Navbar/>
        {init && (
          <Particles
            id="tsparticles"
            options={particlesOptions as ISourceOptions}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
        )}
        <div className="relative z-1">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
