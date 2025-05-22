"use client";

import { motion } from "framer-motion";
import { Search, Wand2, Sparkles } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-[#417FE5]" />,
    title: "Discover",
    desc: "We identify the invisible patterns, beliefs, and emotional residues shaping your thoughts, habits, and outcomes.",
  },
  {
    icon: <Wand2 className="w-8 h-8 text-[#50A7AD]" />,
    title: "Process",
    desc: "Using neuroscience-backed methods, we dismantle the root cause of resistance — in real time — without years of talk therapy.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#091683]" />,
    title: "Integrate",
    desc: "We align your thoughts, energy, and identity with your truth — so lasting transformation becomes your new normal.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-28 px-6 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#2C2C2C] mb-6"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg sm:text-xl text-[#555] max-w-2xl mx-auto mb-16"
        >
          The transformation path: from awareness to realignment — in three grounded steps.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              className="relative flex flex-col items-center text-center bg-[#F7F5F2] p-6 rounded-xl border border-[#ddd] w-full md:max-w-[300px]"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">{step.title}</h3>
              <p className="text-sm text-[#555]">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-40px] w-8 h-[2px] bg-[#E0E0E0]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
