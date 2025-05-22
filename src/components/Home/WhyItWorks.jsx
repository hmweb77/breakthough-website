"use client";

import { motion } from "framer-motion";
import { Eye, Brain, Layers3 } from "lucide-react";

const reasons = [
  {
    icon: <Eye className="w-7 h-7 text-[#417FE5]" />,
    title: "It goes deeper than mindset.",
    desc: "We don’t just talk about your patterns — we dismantle them at the subconscious root where they were formed.",
  },
  {
    icon: <Brain className="w-7 h-7 text-[#50A7AD]" />,
    title: "It’s real-time neurological rewiring.",
    desc: "These methods activate the brain’s emotional coding system to unlock lasting internal change — fast.",
  },
  {
    icon: <Layers3 className="w-7 h-7 text-[#091683]" />,
    title: "It aligns all parts of you.",
    desc: "No more pushing through resistance. We bring your thoughts, emotions, and energy into harmony — so progress feels natural.",
  },
];

const WhyItWorks = () => {
  return (
    <section className="py-28 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#2C2C2C] mb-6"
        >
          Why It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg sm:text-xl text-[#555] max-w-2xl mx-auto mb-16"
        >
          Breakthrough Methods aren’t about adding more tools — they’re about removing what no longer serves you, so your clarity, confidence, and momentum can flow without friction.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="rounded-xl p-6 bg-[#F7F5F2] border border-[#E5E5E5] shadow-sm"
            >
              <div className="flex items-start gap-4 mb-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-[#2C2C2C]">{item.title}</h3>
              </div>
              <p className="text-sm text-[#555] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16"
        >
          <a
            href="/quiz"
            className="inline-block bg-[#417FE5] hover:bg-[#091683] text-white text-lg font-medium py-3 px-7 rounded-md transition"
          >
            See What’s Holding You Back
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItWorks;
