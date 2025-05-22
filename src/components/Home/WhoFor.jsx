"use client";

import { motion } from "framer-motion";
import { HelpCircle, AlertTriangle, Target } from "lucide-react";

const bullets = [
  {
    icon: <HelpCircle className="w-6 h-6 text-[#417FE5]" />,
    title: "You’ve done the work",
    desc: "Therapy. Coaching. Mindset. And yet — the results don’t feel complete or lasting.",
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-[#50A7AD]" />,
    title: "You feel misaligned inside",
    desc: "Even with success, something still feels off — like a deeper truth is waiting to be found.",
  },
  {
    icon: <Target className="w-6 h-6 text-[#091683]" />,
    title: "You know there’s more",
    desc: "There’s a quiet voice inside that knows: you’re meant for something greater — and freer.",
  },
];

const WhoIsItFor = () => {
  return (
    <section className="relative py-28 px-6" style={{ backgroundColor: "#E4F7F9" }}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#2C2C2C]"
        >
          Who is this work really for?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto text-[#555] mb-16"
        >
          You’ve reached a level of outer success. Now it’s time for an inner breakthrough —
          one that aligns who you are with how you lead, love, and live.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {bullets.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.4 }}
              className="bg-white rounded-xl shadow-sm border border-[#EAEAEA] p-6"
            >
              <div className="flex items-start gap-4">
                {item.icon}
                <div>
                  <h4 className="text-lg font-semibold text-[#2C2C2C] mb-1">{item.title}</h4>
                  <p className="text-sm text-[#767676] leading-snug">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16"
        >
          <a
            href="/quiz"
            className="inline-block bg-[#417FE5] hover:bg-[#091683] text-white text-lg font-medium py-3 px-7 rounded-md transition"
          >
            Take the Breakthrough Quiz
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
