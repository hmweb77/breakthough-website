"use client";

import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Work With Me", href: "#work-with-me" },
    { name: "Methods", href: "#methods" },
    { name: "Stories", href: "#stories" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-[#2C2C2C] font-bold text-xl tracking-tight">
          Breakthrough Methods
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-[#2C2C2C]">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-[#417FE5] transition">
              {link.name}
            </a>
          ))}
        </nav>
        <a
          href="#book-call"
          className="hidden md:inline-block bg-[#417FE5] hover:bg-[#50A7AD] text-white text-sm font-semibold px-5 py-2 rounded-full transition"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
};

export default Navbar;
