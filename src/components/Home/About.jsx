"use client";

import { motion } from "framer-motion";
import { Award, Newspaper, Podcast } from "lucide-react";

const About = () => {
  const certifications = [
    "Certified Professional Coach (ICF)",
    "Neuro-Linguistic Programming Master",
    "Cognitive Behavioral Therapy Specialist",
  ];

  const features = [
    { name: "Forbes", icon: <Newspaper className="h-5 w-5 text-[#50A7AD] mr-2" /> },
    { name: "Entrepreneur Magazine", icon: <Newspaper className="h-5 w-5 text-[#50A7AD] mr-2" /> },
    { name: "The Growth Mindset Podcast", icon: <Podcast className="h-5 w-5 text-[#50A7AD] mr-2" /> },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          className="w-full md:w-[40%] max-w-sm mx-auto md:mx-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/aboutIMG.png"
            alt="Coach portrait"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-[60%]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#50A7AD] uppercase font-semibold text-sm">About</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#2C2C2C]">
            Meet Your Guide
          </h2>

          <p className="mt-6 text-[#2C2C2C]/90 text-base leading-relaxed">
  Known as <em>The Breakthrough Architect</em>, <span className="font-semibold">Kasia Szczesniak</span> guides high-level leaders through <span className="font-semibold">transformational experiences</span> that dismantle <span className="font-semibold">deep resistance</span> and rewire their <span className="font-semibold">internal operating system</span> for aligned <span className="font-semibold">power, clarity, and success</span>.
</p>

<p className="mt-4 text-[#2C2C2C]/90 text-base leading-relaxed">
  Backed by <span className="font-semibold">neuroscience, NLP</span>, and <span className="font-semibold">subconscious reprogramming</span>, her work fuses <em>ancient wisdom</em> with <em>modern science</em> to create <span className="font-semibold">rapid, embodied change</span> across <span className="font-semibold">identity, behavior, and results</span>.
</p>

<p className="mt-4 text-[#2C2C2C]/90 text-base leading-relaxed">
  Kasia doesn’t offer <em>surface-level shifts</em> – she <span className="font-semibold">architects breakthroughs and transformation from the inside out</span>.
</p>


          {/* Certification & Feature Columns */}
          {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"> */}
            {/* Certifications */}
            {/* <div>
              <h4 className="text-[#2C2C2C] text-lg font-semibold mb-3">Certifications</h4>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start text-[#555] text-sm">
                    <Award className="h-5 w-5 text-[#417FE5] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Featured In */}
            {/* <div>
              <h4 className="text-[#2C2C2C] text-lg font-semibold mb-3">Featured In</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-[#555] text-sm">
                    {feature.icon}
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div> */}
          {/* </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
