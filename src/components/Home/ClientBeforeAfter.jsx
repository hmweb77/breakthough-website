"use client";

import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "João",
    beforeImg: "/manBefore.png",
    afterImg: "/manAfter.png",
    quote: "I finally feel like myself again — but stronger. The fog is gone.",
  },
  {
    name: "Ania",
    beforeImg: "/womanB.png",
    afterImg: "/womanA.png",
    quote: "My face softened. I looked younger. I felt lighter — and free.",
  },
];

const ClientBeforeAfter = () => {
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
          See the visible shifts in presence, vitality, and energy that occur after just one session.
        </motion.p>

        <div className="space-y-20">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * i, duration: 0.6 }}
              className="bg-white border border-[#e2e2e2] rounded-xl shadow-sm p-6"
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
                “{client.quote}”
              </blockquote>
              <p className="mt-2 text-sm font-medium text-[#417FE5]">{client.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientBeforeAfter;
