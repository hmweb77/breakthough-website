"use client";

import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Work With Me", href: "#work-with-me" },
    { name: "Methods", href: "#methods" },
    { name: "Success Stories", href: "#stories" },
    { name: "Resources", href: "#resources" },
    { name: "About", href: "#about" },
  ];

  const programs = [
    { name: "Breakthrough", href: "#services" },
    { name: "Breakfree", href: "#services" },
    { name: "Transform", href: "#services" },
    { name: "Corporate Training", href: "#" },
    { name: "Speaking Engagements", href: "#" },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Youtube className="h-5 w-5" />, href: "#" },
  ];

  return (
    <footer className="bg-[#50A7AD] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Breakthrough Methods</h3>
            <p className="text-white/80">
              Transformational coaching for professionals and individuals seeking extraordinary results in their personal and professional lives.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-[#EAF2FE] transition"
                  aria-label={`Social link ${index}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/90">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-white/90">
              {programs.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-white/90 text-sm">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-white mr-3 mt-0.5" />
                <span>hello@breakthroughmethods.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-white mr-3 mt-0.5" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-white mr-3 mt-0.5" />
                <span>123 Transformation Way<br />San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/30 pt-6 text-center text-sm text-white/70">
          <p>&copy; {currentYear} Breakthrough Methods. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
