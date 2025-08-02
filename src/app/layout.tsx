"use client";

import { useCallback, useEffect, useState } from "react";
import { ISourceOptions, MoveDirection, type Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Particles, {initParticlesEngine } from "@tsparticles/react";
import { Geist, Geist_Mono } from "next/font/google";
import { brunoAce, orbitron, quantico, audiowide, tourney, geostarFill } from "@/styles/Fonts";
import "./globals.css";

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

  // useEffect(() => {
  //   initParticles();
  // }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await initParticles(engine); // Or loadFull/loadBasic as needed
    }).then(() => {
      setInit(true);
    });
  }, []);

  const initParticles = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setInit(true);
  }, []);

  // const particlesOptions = {
  //   background: {
  //     color: {
  //       value: '#0d0d0d',
  //     },
  //   },
  //   fpsLimit: 60,
  //   interactivity: {
  //     events: {
  //       onHover: {
  //         enable: true,
  //         mode: 'repulse',
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       repulse: {
  //         distance: 100,
  //         duration: 0.4,
  //       },
  //     },
  //   },
  //   particles: {
  //     color: {
  //       value: '#ffffff',
  //     },
  //     links: {
  //       color: '#ffffff',
  //       distance: 150,
  //       enable: true,
  //       opacity: 0.2,
  //       width: 1,
  //     },
  //     collisions: {
  //       enable: true,
  //     },
  //     move: {
  //       direction: 'none',
  //       enable: true,
  //       outModes: {
  //         default: 'bounce',
  //       },
  //       random: false,
  //       speed: 1,
  //       straight: false,
  //     },
  //     number: {
  //       density: {
  //         enable: true,
  //         area: 800,
  //       },
  //       value: 80,
  //     },
  //     opacity: {
  //       value: 0.2,
  //     },
  //     shape: {
  //       type: 'circle',
  //     },
  //     size: {
  //       value: { min: 1, max: 3 },
  //     },
  //   },
  //   detectRetina: true,
  // };

  const particlesOptions = {
    background: {
      color: {
        value: "#0d0d0d",
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
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
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
        value: 0.2,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${brunoAce.variable} ${orbitron.variable} ${quantico.variable} ${audiowide.variable} ${tourney.variable} ${geostarFill.variable} antialiased`}
      >
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
      </body>
    </html>
  );
}
