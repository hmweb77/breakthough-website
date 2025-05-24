"use client";

import { motion } from "framer-motion";
import { 
  Eye, 
  Brain, 
  Layers3, 
  ArrowRight, 
  Zap, 
  Target,
  TrendingUp,
  Unlock,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const reasons = [
  {
    icon: Eye,
    title: "It goes deeper than mindset",
    desc: "We don't just talk about your patterns — we dismantle them at the subconscious root where they were formed.",
    benefit: "Real transformation at the source",
    gradient: "from-[#68A1A7] to-[#50A7AC]",
    accent: "#68A1A7"
  },
  {
    icon: Brain,
    title: "It's real-time neurological rewiring",
    desc: "These methods activate the brain's emotional coding system to unlock lasting internal change — fast.",
    benefit: "Immediate & measurable shifts",
    gradient: "from-[#447087] to-[#50A7AC]",
    accent: "#447087"
  },
  {
    icon: Layers3,
    title: "It aligns all parts of you",
    desc: "No more pushing through resistance. We bring your thoughts, emotions, and energy into harmony — so progress feels natural.",
    benefit: "Effortless sustained growth",
    gradient: "from-[#B0CCC2] to-[#68A1A7]",
    accent: "#B0CCC2"
  },
];

const proofPoints = [
  { text: "Zero resistance or self-sabotage", icon: CheckCircle2 },
  { text: "Immediate clarity on next steps", icon: Target },
  { text: "Natural confidence in decisions", icon: TrendingUp },
  { text: "Energy aligned with purpose", icon: Zap }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 10px 30px rgba(80, 167, 172, 0.2)",
      "0 20px 50px rgba(80, 167, 172, 0.4)",
      "0 10px 30px rgba(80, 167, 172, 0.2)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const WhyItWorks = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-[#50A7AC]/5 via-[#F0F1F0] to-[#B0CCC2]/10">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-16 left-10 w-72 h-72 bg-[#50A7AC]/8 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-20 right-16 w-96 h-96 bg-[#68A1A7]/6 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/3 w-48 h-48 bg-[#B0CCC2]/4 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#50A7AC]/20 to-[#68A1A7]/20 backdrop-blur-sm border border-[#50A7AC]/30 rounded-full px-8 py-4 mb-10"
          >
            <Unlock className="text-[#447087]" size={22} />
            <span className="text-[#447087] font-bold text-base tracking-wide uppercase">Proven Science</span>
          </motion.div>

          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-10 leading-tight">
            <span className="bg-gradient-to-r from-[#2C2C2C] to-[#447087] bg-clip-text text-transparent">
              Why It
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[#50A7AC] relative"
            >
              Works
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-[#50A7AC] to-[#68A1A7] rounded-full origin-left opacity-70"
              />
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-2xl sm:text-3xl text-[#2C2C2C]/80 max-w-5xl mx-auto leading-relaxed font-light"
          >
            Breakthrough Methods aren't about adding more tools — they're about 
            <span className="font-bold text-[#447087]"> removing what no longer serves you</span>, 
            so your clarity, confidence, and momentum can 
            <span className="font-bold text-[#50A7AC]"> flow without friction</span>.
          </motion.p>
        </motion.div>

        {/* Main Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-12 mb-24"
        >
          {reasons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative bg-white/95 backdrop-blur-sm rounded-4xl shadow-xl hover:shadow-2xl border border-[#B0CCC2]/20 p-10 overflow-hidden"
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* Floating accent elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-[#B0CCC2]/10 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />

                <div className="relative z-10">
                  {/* Enhanced Icon */}
                  <motion.div
                    className="relative mb-8"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div 
                      className={`flex items-center justify-center w-20 h-20 rounded-3xl shadow-xl bg-gradient-to-br ${item.gradient} relative`}
                    >
                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100"
                        style={{ borderColor: item.accent }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0, 0.5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <IconComponent className="text-white relative z-10" size={32} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className="text-2xl font-bold text-[#2C2C2C] mb-4 group-hover:text-[#447087] transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg text-[#2C2C2C]/70 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    {item.desc}
                  </motion.p>

                  {/* Benefit highlight */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} bg-opacity-10 border border-current`}
                    style={{ borderColor: item.accent + "40", color: item.accent }}
                  >
                    <Sparkles size={16} />
                    <span className="font-semibold text-sm">{item.benefit}</span>
                  </motion.div>

                  {/* Animated accent line */}
                  <motion.div
                    className={`mt-8 h-1 bg-gradient-to-r ${item.gradient} rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#50A7AC]/10 to-[#68A1A7]/10 backdrop-blur-sm border border-[#50A7AC]/20 rounded-4xl p-12">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold mb-8 text-[#2C2C2C]"
            >
              What This Means for 
              <span className="bg-gradient-to-r from-[#447087] to-[#50A7AC] bg-clip-text text-transparent"> You</span>
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            >
              {proofPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-[#B0CCC2]/20"
                  >
                    <IconComponent className="text-[#50A7AC] flex-shrink-0" size={24} />
                    <span className="text-[#2C2C2C] font-medium text-sm">{point.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-xl text-[#447087] font-medium leading-relaxed"
            >
              When internal resistance dissolves, everything becomes possible — and easier.
            </motion.p>
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-12"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Target className="text-[#50A7AC]" size={48} />
            </motion.div>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mb-4">
              Ready to experience this for yourself?
            </h3>
            <p className="text-xl text-[#447087] max-w-3xl mx-auto leading-relaxed">
              Discover exactly what's been holding you back and how to dissolve it — permanently.
            </p>
          </motion.div>

          <motion.div
            variants={pulseVariants}
            animate="animate"
            className="relative inline-block"
          >
            <motion.a
              href="/quiz"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#50A7AC] to-[#68A1A7] text-white text-2xl font-bold py-6 px-12 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#68A1A7] to-[#50A7AC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <span className="relative z-10">See What's Holding You Back</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight size={28} />
              </motion.div>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
                animate={{ x: [-120, 320] }}
                transition={{ duration: 3, repeat: Infinity, delay: 4 }}
              />
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-8 text-[#50A7AC] font-semibold text-lg"
          >
            ✨ Personalized breakthrough insights • Science-backed methods
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItWorks;