"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Who It's For", href: "#who-its-for" },
    { name: "Why It Works", href: "#why-it-works" },
    { name: "The Process", href: "#process" },
    { name: "Work With Me", href: "#work-with-me" },
    { name: "About", href: "#about" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-[#B0CCC2]/20" 
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/" 
                className="flex items-center gap-3 text-[#2C2C2C] font-bold text-xl lg:text-2xl tracking-tight group"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-[#68A1A7] to-[#447087] flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="text-white" size={18} />
                </motion.div>
                <span className="group-hover:text-[#68A1A7] transition-colors duration-300">
                  Breakthrough Methods
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  onClick={closeMenu}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 text-sm font-medium text-[#2C2C2C] hover:text-[#68A1A7] transition-colors duration-300 rounded-xl group"
                >
                  {link.name}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#68A1A7] to-[#447087] group-hover:w-full transition-all duration-300 rounded-full"
                  />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <motion.a
              href="#quiz"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(68, 112, 135, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}  
              className="hidden lg:inline-flex items-center gap-2 bg-[#50A7AC] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg overflow-hidden relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10">Take the Quiz</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight size={16} />
              </motion.div>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-xl bg-[#F0F1F0] hover:bg-[#B0CCC2]/20 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="text-[#2C2C2C]" size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="text-[#2C2C2C]" size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-lg border-l border-[#B0CCC2]/20 z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#B0CCC2]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#68A1A7] to-[#447087] flex items-center justify-center">
                      <Sparkles className="text-white" size={16} />
                    </div>
                    <span className="font-bold text-[#2C2C2C]">Menu</span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={closeMenu}
                    className="p-2 rounded-xl hover:bg-[#F0F1F0] transition-colors"
                  >
                    <X className="text-[#2C2C2C]" size={20} />
                  </motion.button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 px-6 py-8 space-y-2">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-4 px-4 py-4 text-[#2C2C2C] hover:text-[#68A1A7] hover:bg-[#F0F1F0] rounded-xl transition-all duration-300 font-medium group"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#B0CCC2] group-hover:bg-[#68A1A7] transition-colors duration-300" />
                      {link.name}
                      <ArrowRight 
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                        size={16} 
                      />
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <div className="p-6 border-t border-[#B0CCC2]/20">
                  <motion.a
                    href="#quiz"
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#447087] to-[#68A1A7] text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <Sparkles className="relative z-10" size={18} />
                    <span className="relative z-10">Take the Quiz</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Navbar;