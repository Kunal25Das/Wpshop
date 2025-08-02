import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconCode } from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-red-100 border-t border-slate-800/50 py-12 z-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <IconCode className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Entropy
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
              <span className="text-slate-900 font-bold text-sm">COLLEGE</span>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-slate-800/50">
            <p className="text-gray-400">
              &copy; 2024 CodeClub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
