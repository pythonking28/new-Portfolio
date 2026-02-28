"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHeader, setActiveHeader] = useState("Home");

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }} // Reduced from 0.5 to 0.3
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }} // Reduced delay
            >
              <a href="/" className="flex items-center space-x-2 group">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src="/logo.png" alt="Logo" className="w-32 md:w-40" />
                </motion.div>
              </a>
            </motion.div>

            {/* Desktop Nav */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }} // Reduced delay
              className="hidden md:flex items-center space-x-1"
            >
              {["Home", "Tech Stack", "Projects"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.15 + index * 0.05 }} // Faster stagger
                  onClick={() =>
                    setActiveHeader(item.toLowerCase().replace(" ", "-"))
                  }
                  className={`text-slate-400 hover:text-orange-400 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-orange-500/10 ${activeHeader === item.toLowerCase().replace(" ", "-") ? "bg-orange-400 text-white" : ""}`}
                >
                  {item}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.3 }} // Reduced delay
                className="ml-3 bg-lienar-to-r from-orange-500 to-amber-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/30"
              >
                Contact
              </motion.a>
            </motion.div>

            {/* Mobile button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-orange-400 hover:bg-orange-500/10"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0.8 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0.8 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Nav */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                  opacity: { duration: 0.3 },
                }}
                className="md:hidden border-t border-slate-800"
                style={{ overflow: "hidden" }}
              >
                <motion.div className="flex flex-col space-y-2 py-4">
                  {["Home", "Tech Stack", "Projects", "Contact"].map(
                    (item, index) => (
                      <motion.a
                        key={item}
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        onClick={() => setIsMenuOpen(false)}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            delay: index * 0.08,
                            duration: 0.3,
                            ease: "easeOut",
                          },
                        }}
                        exit={{
                          opacity: 0,
                          x: -20,
                          transition: {
                            delay: (3 - index) * 0.05,
                            duration: 0.2,
                          },
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          item === "Contact"
                            ? "bg-lienar-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30"
                            : "text-slate-300 hover:text-orange-400 hover:bg-orange-500/10"
                        }`}
                      >
                        {item}
                      </motion.a>
                    ),
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Spacer div to prevent content overlap */}
      <div className="h-16" />
    </>
  );
};

export default Header;
