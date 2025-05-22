"use client"
import { motion } from "framer-motion";
import { Sparkles, Brain, Activity } from "lucide-react";

const methods = [
  {
    icon: Sparkles,
    title: "Deep Inner Reprogramming",
    description:
      "Breakthrough Methods work at the subconscious level to dissolve invisible blocks, realign your beliefs, and create sustainable change."
  },
  {
    icon: Brain,
    title: "Rooted in Neuroscience",
    description:
      "Grounded in NLP and cognitive science, this proven methodology rewires neural pathways to trigger immediate cognitive and emotional shifts."
  },
  {
    icon: Activity,
    title: "Live, Embodied Results",
    description:
      "This is more than mindset. It’s about transformation you feel — in your body, emotions, and actions — from the first session."
  }
];

export default function WhatAreBreakthroughMethods() {
  return (
    <section className="bg-[#F7F5F2] text-[#2C2C2C] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          What Are Breakthrough Methods?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg max-w-2xl mx-auto text-[#767676] mb-12"
        >
          A revolutionary transformational system that clears internal resistance, activates your true self, and aligns you with the success and freedom you’re meant to have.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {methods.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-6 text-left"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#50A7AD] rounded-full mb-4">
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#091683]">{title}</h3>
              <p className="text-[#767676] leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

