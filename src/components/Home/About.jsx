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
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700"
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
            Meet Your Coach
          </h2>

          <p className="mt-6 text-[#555] text-base leading-relaxed">
            With over 15 years of experience in personal development and transformational coaching, I’ve helped hundreds of professionals, entrepreneurs, and individuals break through limitations and achieve unprecedented success.
          </p>
          <p className="mt-4 text-[#555] text-base leading-relaxed">
            My approach combines proven psychological frameworks, neuroscience-based techniques, and practical strategies that create lasting change. I believe that everyone has untapped potential waiting to be unleashed.
          </p>

          {/* Certification & Feature Columns */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div>
              <h4 className="text-[#2C2C2C] text-lg font-semibold mb-3">Certifications</h4>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start text-[#555] text-sm">
                    <Award className="h-5 w-5 text-[#417FE5] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured In */}
            <div>
              <h4 className="text-[#2C2C2C] text-lg font-semibold mb-3">Featured In</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-[#555] text-sm">
                    {feature.icon}
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
