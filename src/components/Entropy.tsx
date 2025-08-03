"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useInView,
  Variants,
  Transition,
} from "framer-motion";
import { IconExternalLink } from "@tabler/icons-react";
import { AnimatedSectionProps, Event } from "@/types/Entropy";

// Component
const CodeClubAbout: React.FC = () => {
  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for "easeOut"
      } as Transition, // explicitly typed
    },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const pastEvents: Event[] = [
    {
      id: 1,
      name: "Innova 2025",
      date: "May 3, 2025",
      image: "/past/innova.jpg",
      description: "8-hour Coding marathon with amazing projects",
    },
    {
      id: 2,
      name: "VS Code Workshop",
      date: "April 24, 2025",
      image: "/past/vscode.jpg",
      description: "Development Setup fundamentals",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  // const [currentEventIndex, setCurrentEventIndex] = useState(0);

  // const nextEvent = () => {
  //   setCurrentEventIndex((prev) => (prev + 1) % pastEvents.length);
  // };

  // const prevEvent = () => {
  //   setCurrentEventIndex(
  //     (prev) => (prev - 1 + pastEvents.length) % pastEvents.length
  //   );
  // };

  // Animated Section Component
  const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className = "",
  }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className={className}
      >
        {children}
      </motion.section>
    );
  };

  return (
    <div className="min-h-screen text-white font-sans">
      {/* Header */}
      {/* Mission & Vision Section */}
      <AnimatedSection className="container mx-auto px-6 py-20 mt-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Entropy (Coding Club, GCETTS) is a passionate community of
            developers, designers, and tech enthusiasts dedicated to fostering
            innovation and collaboration. Our mission is to bridge the gap
            between academic learning and real-world application, empowering
            students to build meaningful projects and develop industry-ready
            skills.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            We envision a future where every student has access to cutting-edge
            technology education, mentorship, and opportunities to contribute to
            open-source projects that make a difference in the world.
          </motion.p>
        </motion.div>
      </AnimatedSection>

      {/* Past Events Section */}
      <AnimatedSection className="container mx-auto px-6 py-20">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Past Events
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-900/60 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700/30 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="h-48 w-full overflow-hidden z-[-1] bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center relative">
                  <Image
                    src={event.image}
                    alt={event.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* <span className="text-white font-semibold">{event.name}</span> */}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2">
                    {event.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{event.date}</p>
                  <p className="text-sm text-gray-300">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="container mx-auto px-6 py-20">
        <motion.div
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Join Us
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Ready to embark on an exciting journey of learning, building, and
            growing together? Join our community of passionate developers and
            let&apos;s create something amazing!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            <a
              href="https://forms.gle/ywCU3gV5y9jUPghN6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Involved <IconExternalLink className="inline ml-2 w-5 h-5" />
            </a>
          </motion.button>
        </motion.div>
      </AnimatedSection>

      {/* Event Modal */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 rounded-xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {selectedEvent.name}
            </h3>
            <p className="text-purple-300 mb-4">{selectedEvent.date}</p>
            <p className="text-gray-300 mb-6">{selectedEvent.description}</p>
            <Image
              src={selectedEvent.image}
              alt={selectedEvent.name}
              objectFit="cover"
              width={430}
              height={230}
            />
            <button
              onClick={() => setSelectedEvent(null)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors mt-3"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CodeClubAbout;
