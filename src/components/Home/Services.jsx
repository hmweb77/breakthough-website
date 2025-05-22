"use client";

import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Breakthrough",
      description: "One powerful session to shift a single issue fast. Immediate insight, clarity, and action.",
      price: "$997",
      duration: "Single, powerful 3-hour session",
      popular: false,
      features: [
        "Deep-dive breakthrough assessment",
        "Personalized mind-body technique",
        "Energy clearing for your specific block",
        "30-day integration support",
        "Digital resource library access",
      ],
      ctaText: "Book a Session",
    },
    {
      title: "Breakfree",
      description: "A 3-month reset to clear deep patterns and activate your next-level identity.",
      price: "$2,997",
      duration: "3-month intensive transformation",
      popular: true,
      features: [
        "Weekly 1:1 breakthrough sessions",
        "Comprehensive pattern mapping",
        "Personalized subconscious reprogramming",
        "Nervous system regulation training",
        "Daily app-based integration support",
        "Private client portal with resources",
        "Unlimited email & Voxer support",
      ],
      ctaText: "Learn More",
    },
    {
      title: "Transform",
      description: "A 6-month realignment for visionary leaders who want full-spectrum identity transformation.",
      price: "$6,997",
      duration: "6-month elite transformation",
      popular: false,
      features: [
        "Bi-weekly 90-min breakthrough sessions",
        "VIP full-day intensive (in-person)",
        "Complete life & leadership assessment",
        "Custom identity evolution framework",
        "Quantum timeline acceleration work",
        "Monthly progress integration calls",
        "Exclusive mastermind community",
        "Lifetime resource & protocol access",
      ],
      ctaText: "Learn More",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" },
    },
  };

  return (
    <section className="py-24 px-6 bg-[#212E38] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#50A7AD] font-semibold uppercase tracking-widest">Work with me</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-white">
            Choose Your Breakthrough Journey
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Select the transformational experience that aligns with your vision and commitment level.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`rounded-xl shadow-xl overflow-hidden border border-[#E2E8F0] bg-white text-[#212E38] flex flex-col justify-between ${
                service.popular ? "relative z-10 scale-105 -mt-6" : ""
              }`}
            >
              {/* Badge */}
              {service.popular && (
                <div className="absolute top-0 right-0 bg-[#50A7AD] text-white text-xs font-bold px-4 py-1 rounded-bl-md flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  MOST POPULAR
                </div>
              )}

              {/* Header */}
              <div className="p-8 bg-[#EAF2FE] border-b border-[#dfe8f2]">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-[#5C6B70] min-h-[60px]">{service.description}</p>
                <div className="mt-6">
                  <p className="text-[#417FE5] text-2xl font-bold">{service.price}</p>
                  <p className="text-sm text-[#5C6B70]">{service.duration}</p>
                </div>
              </div>

              {/* Features */}
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-sm uppercase font-semibold text-[#5C6B70] mb-4">What's included:</h4>
                <ul className="space-y-3 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[#5C6B70]">
                      <Check className="h-5 w-5 text-[#50A7AD] mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="#book-call"
                    className="block w-full text-center bg-[#50A7AD] hover:bg-[#417FE5] text-white py-3 rounded-full font-medium shadow-md transition duration-300"
                  >
                    {service.ctaText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <p className="text-white/80 max-w-xl mx-auto">
            Not sure which option is right for you? Start with a free 30-minute breakthrough call to discuss your unique situation and goals.
          </p>
          <motion.a
            href="#book-call"
            className="mt-6 inline-flex items-center justify-center px-8 py-4 bg-[#417FE5] hover:bg-[#50A7AD] text-white rounded-full text-lg font-medium shadow-md transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Free Call
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Services;
