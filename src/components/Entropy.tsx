"use client"

import React, { useState, useEffect, ReactNode, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  Variants,
  Transition,
} from "framer-motion";
import {
  IconChevronDownLeft,
  IconChevronRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconCode,
  IconPalette,
  IconUsersGroup,
  IconExternalLink,
} from "@tabler/icons-react";

// Types
interface Event {
  id: number;
  name: string;
  date: string;
  image: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TechStackItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

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
      name: "Hackathon 2024",
      date: "March 15, 2024",
      image: "/api/placeholder/400/300",
      description: "24-hour coding marathon with amazing projects",
    },
    {
      id: 2,
      name: "Web Dev Workshop",
      date: "February 20, 2024",
      image: "/api/placeholder/400/300",
      description: "Full-stack development fundamentals",
    },
    {
      id: 3,
      name: "AI/ML Seminar",
      date: "January 25, 2024",
      image: "/api/placeholder/400/300",
      description: "Introduction to machine learning concepts",
    },
    {
      id: 4,
      name: "Open Source Day",
      date: "December 10, 2023",
      image: "/api/placeholder/400/300",
      description: "Contributing to open source projects",
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "President",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Sarah Chen",
      role: "Vice President",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Mike Rodriguez",
      role: "Secretary",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Emily Davis",
      role: "Joint Secretary",
      image: "/api/placeholder/200/200",
    },
    {
      name: "David Kim",
      role: "Technical Lead",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Lisa Zhang",
      role: "Event Coordinator",
      image: "/api/placeholder/200/200",
    },
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % pastEvents.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex(
      (prev) => (prev - 1 + pastEvents.length) % pastEvents.length
    );
  };

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

  const techStack: TechStackItem[] = [
    { name: "React", icon: IconCode },
    { name: "Node.js", icon: IconCode },
    { name: "Python", icon: IconCode },
    { name: "Design", icon: IconPalette },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 text-white font-sans">
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 text-white font-sans">
        {/* Header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-slate-800/50"
        >
          <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <IconCode className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                CodeClub
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["About", "Events", "Team", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">COLLEGE</span>
            </div>
          </nav>
        </motion.header>

        {/* Mission & Vision Section */}
        <AnimatedSection className="container mx-auto px-6 py-20">
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
              We are a passionate community of developers, designers, and tech
              enthusiasts dedicated to fostering innovation and collaboration.
              Our mission is to bridge the gap between academic learning and
              real-world application, empowering students to build meaningful
              projects and develop industry-ready skills.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              We envision a future where every student has access to
              cutting-edge technology education, mentorship, and opportunities
              to contribute to open-source projects that make a difference in
              the world.
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
                  <div className="h-48 bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {event.name}
                    </span>
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

        {/* Team Section */}
        <AnimatedSection className="container mx-auto px-6 py-20">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Meet the Team
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gray-900/60 rounded-xl p-6 text-center backdrop-blur-sm border border-slate-700/30 group"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <IconUsersGroup className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-300 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Tech Stack Section */}
        <AnimatedSection className="container mx-auto px-6 py-20">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Our Tech Stack
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { name: "React", icon: IconCode },
              { name: "Node.js", icon: IconCode },
              { name: "Python", icon: IconCode },
              { name: "Design", icon: IconPalette },
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                className="bg-gray-900/60 rounded-xl p-6 text-center backdrop-blur-sm border border-slate-700/30"
              >
                <tech.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <p className="text-white font-semibold">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
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
              let's create something amazing!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Involved <IconExternalLink className="inline ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="bg-gray-950/90 border-t border-slate-800/50 py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-6 md:mb-0">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <IconCode className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  CodeClub
                </span>
              </div>

              <div className="flex space-x-6 mb-6 md:mb-0">
                {[IconBrandGithub, IconBrandInstagram, IconBrandLinkedin].map(
                  (Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.2, rotateZ: 10 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )
                )}
              </div>

              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">
                  COLLEGE
                </span>
              </div>
            </div>

            <div className="text-center mt-8 pt-8 border-t border-slate-800/50">
              <p className="text-gray-400">
                &copy; 2024 CodeClub. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

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
              <button
                onClick={() => setSelectedEvent(null)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CodeClubAbout;
