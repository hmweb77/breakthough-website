"use client";

import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { motion } from "framer-motion";
import { useState } from "react";

const clients = [
  {
    name: "Joao Guerreiro - Online Business Owner",
    beforeImg: "/imgbaf/Screenshot 2025-08-11 at 22.12.23.png",
    afterImg: "/imgbaf/Screenshot 2025-08-11 at 22.14.19.png",
    quote: "With each session, I get closer and closer to who I really am",
  },
  {
    name: "Ania",
    beforeImg: "/imgbaf/Screenshot 2025-08-11 at 22.16.29.png",
    afterImg: "/imgbaf/Screenshot 2025-08-11 at 22.19.59.png",
    quote: "My face softened. I looked younger. I felt lighter — and free.",
  },
  {
    name: "Tiago",
    beforeImg: "/imgbaf/13.png",
    afterImg: "/imgbaf/Screenshot 2025-08-11 at 22.15.30.png",
    quote: "My face softened. I looked younger. I felt lighter — and free.",
  },
];

const ClientBeforeAfter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-28 px-6" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#2C2C2C] mb-10"
        >
          Before & After: Real Transformation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl text-[#555] max-w-2xl mx-auto mb-16"
        >
          Their eyes tell the story - the release of old burdens, the return of clarity, the rise of inner power. The transformation is undeniable. The tension is gone, the light is back, and the energy has shifted. It’s not just visible; it’s felt - a new presence, a deeper truth, a liberated self. Their before-and-after says more than a testimonial ever could. What you’re seeing is the embodiment of truth, power, and freedom reclaimed.
        </motion.p>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="overflow-hidden rounded-xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {clients.map((client, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="bg-white border border-[#e2e2e2] rounded-xl shadow-sm p-6 mx-2"
                  >
                    <div className="flex justify-center">
                      <ImgComparisonSlider className="w-full max-w-xl rounded-md overflow-hidden">
                        <img
                          slot="first"
                          src={client.beforeImg}
                          alt={`${client.name} before`}
                          className="w-full h-auto object-cover"
                        />
                        <img
                          slot="second"
                          src={client.afterImg}
                          alt={`${client.name} after`}
                          className="w-full h-auto object-cover"
                        />
                      </ImgComparisonSlider>
                    </div>
                    <blockquote className="mt-6 text-[#2C2C2C] italic text-base max-w-xl mx-auto">
                      "{client.quote}"
                    </blockquote>
                    <p className="mt-2 text-sm font-medium text-[#417FE5]">{client.name}</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-[#e2e2e2] rounded-full p-3 shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <svg className="w-5 h-5 text-[#2C2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-[#e2e2e2] rounded-full p-3 shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <svg className="w-5 h-5 text-[#2C2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {clients.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  i === currentSlide 
                    ? 'bg-[#417FE5] scale-110' 
                    : 'bg-[#e2e2e2] hover:bg-[#417FE5]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientBeforeAfter;