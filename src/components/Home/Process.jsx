"use client"
import { motion } from "framer-motion";
import { Search, Lightbulb, Zap, Award, ArrowRight, MapPin, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Uncover",
    subtitle: "Deep Discovery Phase",
    description: "We identify your specific internal blocks using proprietary assessment methods that go beyond traditional coaching approaches to uncover what's been holding you back.",
    duration: "Week 1-2",
    outcomes: [
      "Complete subconscious pattern mapping",
      "Root cause identification",
      "Personal breakthrough blueprint"
    ],
    icon: Search,
    gradient: "from-[#68A1A7] to-[#447087]",
    accent: "#68A1A7"
  },
  {
    number: 2,
    title: "Illuminate",
    subtitle: "Awareness Activation",
    description: "We bring awareness to the subconscious patterns driving your behavior and help you see the specific neural pathways keeping you stuck in self-sabotaging cycles.",
    duration: "Week 3-4",
    outcomes: [
      "Clear pattern recognition",
      "Emotional trigger awareness",
      "Behavioral loop understanding"
    ],
    icon: Lightbulb,
    gradient: "from-[#447087] to-[#B0CCC2]",
    accent: "#447087"
  },
  {
    number: 3,
    title: "Rewire",
    subtitle: "Neural Transformation",
    description: "Using advanced neuroplasticity techniques, we help you release old patterns and create new neural pathways that support your desired outcomes and identity.",
    duration: "Week 5-8",
    outcomes: [
      "New neural pathway creation",
      "Pattern interruption mastery",
      "Identity-level shifts"
    ],
    icon: Zap,
    gradient: "from-[#B0CCC2] to-[#68A1A7]",
    accent: "#B0CCC2"
  },
  {
    number: 4,
    title: "Embody",
    subtitle: "Integration & Mastery",
    description: "We integrate your new patterns into daily life, ensuring they become your default state so you naturally operate from your new level of awareness and capability.",
    duration: "Week 9-12",
    outcomes: [
      "Automatic new behaviors",
      "Sustained transformation",
      "Breakthrough lifestyle"
    ],
    icon: Award,
    gradient: "from-[#68A1A7] to-[#50A7AC]",
    accent: "#50A7AC"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const stepVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const Process = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" style={{ backgroundColor: "#50A7AC" }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-8 py-4 mb-10"
          >
            <MapPin className="text-white" size={22} />
            <span className="text-white font-bold text-base tracking-wide uppercase">Your Journey</span>
          </motion.div>

          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight">
            The Breakthrough
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              Roadmap
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                className="absolute -bottom-3 left-0 right-0 h-2 bg-white/40 rounded-full origin-left"
              />
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light"
          >
            Our neuroscience-informed method creates lasting transformation by 
            <span className="font-semibold"> rewiring your mind</span> at the subconscious level.
          </motion.p>
        </motion.div>

        {/* Roadmap Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-white/30 transform -translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, delay: 1 }}
              className="w-full bg-gradient-to-b from-white/60 to-white/20 rounded-full"
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className={`relative flex flex-col lg:flex-row items-center gap-12 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block"
                  >
                    <div className="relative">
                      {/* Pulsing Ring */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        className="absolute inset-0 w-20 h-20 border-4 border-white/40 rounded-full"
                      />
                      
                      {/* Main Node */}
                      <div 
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl border-4 border-white/30`}
                      >
                        <IconComponent className="text-white" size={32} />
                      </div>
                      
                      {/* Step Number */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-[#2C2C2C] font-bold text-sm">{step.number}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <motion.div
                      whileHover={{ 
                        y: -8,
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 relative overflow-hidden"
                    >
                      {/* Card Background Accent */}
                      <div 
                        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${step.gradient} opacity-10 rounded-bl-full`}
                      />
                      
                      <div className="relative z-10">
                        {/* Mobile Icon */}
                        <div className="lg:hidden mb-6">
                          <div 
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg mb-4`}
                          >
                            <IconComponent className="text-white" size={28} />
                          </div>
                        </div>

                        {/* Header */}
                        <div className="mb-6">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-[#2C2C2C] flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{step.number}</span>
                            </div>
                            <span className="text-[#447087] font-semibold text-sm uppercase tracking-wide">
                              Phase {step.number} • {step.duration}
                            </span>
                          </div>
                          
                          <h3 className="text-3xl font-bold text-[#2C2C2C] mb-2">{step.title}</h3>
                          <p className="text-lg font-medium text-[#447087]">{step.subtitle}</p>
                        </div>

                        {/* Description */}
                        <p className="text-[#2C2C2C]/80 text-lg leading-relaxed mb-8">
                          {step.description}
                        </p>

                        {/* Outcomes */}
                        <div>
                          <h4 className="text-[#2C2C2C] font-bold mb-4 flex items-center gap-2">
                            <CheckCircle className="text-[#68A1A7]" size={20} />
                            Key Outcomes:
                          </h4>
                          <ul className="space-y-3">
                            {step.outcomes.map((outcome, outIndex) => (
                              <motion.li
                                key={outIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 + outIndex * 0.1 + 0.8 }}
                                className="flex items-center gap-3 text-[#2C2C2C]/80"
                              >
                                <div 
                                  className="w-2 h-2 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: step.accent }}
                                />
                                <span className="font-medium">{outcome}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Progress Indicator */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ delay: index * 0.2 + 1, duration: 0.8 }}
                          className={`mt-8 h-1 bg-gradient-to-r ${step.gradient} rounded-full origin-left`}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Visual Element */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pl-16' : 'lg:pr-16'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.6, duration: 0.8 }}
                      className="relative"
                    >
                      {/* Decorative Elements */}
                      <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-12 border border-white/30">
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className={`w-32 h-32 mx-auto bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-2xl`}
                        >
                          <IconComponent className="text-white" size={48} />
                        </motion.div>
                        
                        {/* Floating Elements */}
                        <motion.div
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                          className="absolute top-4 right-4 w-4 h-4 bg-white/40 rounded-full"
                        />
                        <motion.div
                          animate={{
                            y: [0, 15, 0],
                            opacity: [0.4, 0.9, 0.4]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                          className="absolute bottom-8 left-6 w-3 h-3 bg-white/50 rounded-full"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-24"
        >
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-white mb-4">
              Ready to begin your transformation?
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Start with our breakthrough assessment and discover exactly where you are on this journey.
            </p>
          </motion.div>

          <motion.a
            href="#quiz"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 bg-white text-[#2C2C2C] font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#F0F1F0] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Start Your Breakthrough Journey</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <ArrowRight size={24} />
            </motion.div>
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="mt-6 text-white/80 font-medium"
          >
            ✨ Personalized roadmap • Science-backed methods • Lasting results
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;