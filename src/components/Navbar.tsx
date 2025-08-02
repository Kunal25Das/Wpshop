"use client";
import React, { useState } from "react";
import { IconX, IconMenu2 } from "@tabler/icons-react";
import useIsMobile from "@/hooks/useIsMobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const isMobile = useIsMobile();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4 md:mx-20">
        <div
          className={`backdrop-blur-md bg-black/20 border border-white/10 ${
            isOpen ? "rounded-xl" : "rounded-full"
          } px-6 py-4`}
        >
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium text-lg">
                WordPress&#x000D7;GCETTS
              </span>
            </div>

            {/* Navigation Links */}
            {!isMobile && (
              <div className="flex items-center space-x-8">
                <a
                  href="/"
                  className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
                >
                  Home
                </a>
                <a
                  href="/speakers"
                  className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
                >
                  Speakers
                </a>
              </div>
            )}

            {isMobile && (
              <button
                onClick={toggleMenu}
                className="text-white md:hidden focus:outline-none"
              >
                {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
              </button>
            )}
          </div>
          {/* Mobile Nav */}
          {isOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a
                href="/"
                className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a
                href="/speakers"
                className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                Speakers
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
