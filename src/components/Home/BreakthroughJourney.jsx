"use client";

import { motion } from "framer-motion";
import { Flashlight, Feather, Flame } from "lucide-react";

const stages = [
  {
    icon: <Flashlight className="w-7 h-7 text-[#417FE5]" />,
    title: "Breakthrough",
    desc: "That lightning moment of truth. A sudden shift in awareness that changes everything. You see clearly what’s been holding you back — and why it no longer fits.",
    bg: "#EAF2FE",
  },
  {
    icon: <Feather className="w-7 h-7 text-[#50A7AD]" />,
    title: "Breaking Free",
    desc: "You begin to let go of the old stories, outdated roles, and subconscious patterns. You stop acting from survival — and start choosing from clarity.",
    bg: "#E4F8F9",
  },
  {
    icon: <Flame className="w-7 h-7 text-[#091683]" />,
    title: "Transformation",
    desc: "Not just a moment — a becoming. The realignment of your identity, energy, and vision. Your inner architecture upgrades. Your life starts reflecting who you truly are.",
    bg: "#E8E9FC",
  },
];

const BreakthroughJourney = () => {
  return (
    <section className="py-28 px-6 bg-[#F7F5F2]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#2C2C2C] mb-6"
        >
          The Breakthrough Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl text-[#555] max-w-2xl mx-auto mb-16"
        >
          This isn’t just coaching. It’s an evolution. A multi-phase path designed to liberate your identity and align your inner world with the life you’re here to live.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              className="rounded-xl p-6 shadow-sm border border-[#e2e2e2]"
              style={{ backgroundColor: stage.bg }}
            >
              <div className="flex items-start gap-4 mb-4">
                {stage.icon}
                <h3 className="text-xl font-semibold text-[#2C2C2C]">{stage.title}</h3>
              </div>
              <p className="text-sm text-[#555] leading-relaxed">{stage.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16"
        >
          <a
            href="/quiz"
            className="inline-block bg-[#417FE5] hover:bg-[#091683] text-white text-lg font-medium py-3 px-7 rounded-md transition"
          >
            Find Your Starting Point
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BreakthroughJourney;
