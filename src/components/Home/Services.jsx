"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Crown, Sparkles, RotateCcw, ExternalLink } from "lucide-react";

const services = [
  {
    title: "Breakthrough",
    subtitle: "Targeted Inner Shifts: One Powerful Session at a Time",
    bestFor: "Clearing a specific block, gaining instant clarity and activating fast-forward momentum",
    commitment: "Book one session or a few",
    expect:
      "A powerful breakthrough on a focused issue – deep insight, emotional release, and clear next steps, all in a single session",
    linkText: "Back",
    linkText1: "more about the method",
    popular: false,
    icon: Zap,
    gradient: "from-[#68A1A7] to-[#447087]"
  },
  {
    title: "Breakfree",
    subtitle: "Total Reset: A 3-Month Inner Journey to Reclaim Your Power and Truth",
    bestFor:
      "Clearing deep-rooted emotional baggage, breaking long-standing patterns, and upgrading your inner operating system",
    commitment: "10 transformational sessions + a 2.5-day immersive Recalibration Intensive",
    expect:
      "Rewired emotional patterns, a renewed self-identity, and noticeable shifts in your confidence, choices, and outcomes",
    linkText: "Back",
    linkText1: "more about the method",
    popular: true,
    icon: Crown,
    gradient: "from-[#447087] to-[#B0CCC2]"
  },
  {
    title: "Transform",
    subtitle: "Full Realignment: A 6-Month Deep Dive Into Identity, Power & Purpose",
    bestFor:
      "Visionaries, leaders, and founders ready for total internal realignment, embodied leadership, and full-spectrum integration across life and work",
    commitment:
      "26 transformational sessions, a 2.5-day immersive Recalibration Intensive, and high-touch support throughout",
    expect:
      "Deep structural shifts, sustainable personal power, and unshakable clarity that fuels aligned results in every domain of your life and business",
    linkText: "Back",
    linkText1: "more about the method",
    popular: false,
    icon: Sparkles,
    gradient: "from-[#B0CCC2] to-[#68A1A7]"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const ServicesCards = () => {
  return (
    <section className="py-24 px-4 bg-[#212E38] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#50A7AD] rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-[#50A7AD] rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 border border-[#50A7AD] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-[#50A7AD] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 bg-[#50A7AD]/20 backdrop-blur-sm border border-[#50A7AD]/30 rounded-full px-6 py-3 mb-6"
          >
            <Crown className="text-[#50A7AD]" size={18} />
            <span className="text-[#50A7AD] font-semibold uppercase tracking-widest text-sm">Work with me</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Choose Your
            <br />

              Breakthrough Journey
           
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Select the transformational experience that aligns with your vision and commitment level.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={cardVariants}>
              <FlipCard service={service} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FlipCard = ({ service, index }) => {
  const [flipped, setFlipped] = useState(false);
  const IconComponent = service.icon;

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <motion.div
      className="relative h-[480px] w-full group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      style={{ perspective: "1200px" }}
    >
      {/* Popular Badge */}
      {service.popular && (
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
          className="absolute -top-3 -right-3 bg-gradient-to-r from-[#50A7AD] to-[#447087] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg z-30 border-2 border-white"
        >
          Most Popular
        </motion.div>
      )}

      <motion.div
        className="relative w-full h-full rounded-2xl shadow-2xl"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 bg-white rounded-2xl p-8 flex flex-col justify-between border border-gray-100 overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Background Gradient */}
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.gradient} opacity-10 rounded-bl-full`} />
          
          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg mb-6`}
            >
              <IconComponent className="text-white" size={28} />
            </motion.div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-[#212E38] mb-3">{service.title}</h3>
            <p className="text-base text-[#5C6B70] leading-relaxed mb-6">{service.subtitle}</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-[#212E38] mb-2 uppercase tracking-wide">Best for:</h4>
                <p className="text-sm text-[#5C6B70] leading-relaxed">{service.bestFor}</p>
              </div>
            </div>
          </div>

          {/* Front Button */}
          <motion.button
            onClick={flipCard}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn relative w-full bg-[#68A1A7] text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Learn More
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </span>
          </motion.button>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#EAF2FE] to-[#F0F1F0] rounded-2xl p-8 flex flex-col justify-between border border-gray-100 overflow-hidden"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden"
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 right-4 w-8 h-8 border border-[#50A7AD] rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border border-[#50A7AD] rounded-full"></div>
          </div>

          <div className="relative z-10 space-y-6">
            {/* Back Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#212E38]">{service.title}</h3>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  flipCard();
                }}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors z-20"
              >
                <RotateCcw className="text-[#5C6B70]" size={16} />
              </motion.button>
            </div>

            {/* Commitment */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-[#5C6B70] mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#50A7AD] rounded-full"></div>
                Commitment
              </h4>
              <p className="text-sm text-[#212E38] leading-relaxed bg-white/60 p-4 rounded-xl">
                {service.commitment}
              </p>
            </div>

            {/* Expectations */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-[#5C6B70] mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#447087] rounded-full"></div>
                What you can expect
              </h4>
              <p className="text-sm text-[#212E38] leading-relaxed bg-white/60 p-4 rounded-xl">
                {service.expect}
              </p>
            </div>
          </div>

          {/* Back Buttons */}
          <div className="flex gap-3 relative z-10">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                flipCard();
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 text-center py-3 px-4 bg-[#68A1A7] text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <ArrowRight size={16} className="rotate-180" />
              Back
            </motion.button>
            <motion.a
              href="#methods"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 text-center py-3 px-4 bg-gradient-to-r bg-[#68A1A7] text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              Learn Method
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesCards;