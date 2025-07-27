"use client"
import { motion } from "framer-motion";
import { Sparkles, Brain, Activity } from "lucide-react";

const methods = [
  {
    icon: Sparkles,
    title: "Transform the Resistance",
    description:
      "Breakthrough Methods go deep into the subconscious – where your identity, beliefs, and conditioning are shaped – to dissolve the invisible blocks that keep holding you back."
  },
  {
    icon: Brain,
    title: "Backed by Neuroscience",
    description:
      "Grounded in neuroplasticity and NLP, this proven methodology rewires neural pathways in real time, creating rapid, lasting shifts in how you think, feel, and engage with the world."
  },
  {
    icon: Activity,
    title: "Embodied Transformation",
    description:
      "This isn’t mindset work — it’s a full-system recalibration that creates real-time, embodied change. You’ll feel it in your body, emotions, and actions from the very first session."
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

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.3
    }
  }
};

const pulseVariants = {
  initial: { scale: 1, opacity: 0.6 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.6, 0.3, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function WhatAreBreakthroughMethods() {
  return (
    <section className="relative bg-gradient-to-br from-[#F0F1F0] via-[#F0F1F0] to-[#B0CCC2]/20 text-[#2C2C2C] py-24 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 w-32 h-32 bg-[#B0CCC2]/10 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-[#68A1A7]/10 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#B0CCC2]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
         
          
          <h2 className="text-6xl text-[#474747] sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">

              What Are Breakthrough
        
            <br />
           
              Methods?
          
          </h2>
          
          <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="text-xl lg:text-2xl max-w-4xl mx-auto text-[#2C2C2C]/80 leading-relaxed font-light"
>
  A powerful <span className="font-semibold">transformational technology</span> designed to clear internal resistance, reprogram your subconscious, and 
  <span className="font-semibold"> activate the success, freedom, and power</span> already within you.
</motion.p>

        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {methods.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-[#B0CCC2]/20 p-8 text-left overflow-hidden transition-all duration-300"
            >
              
              {/* Pulsing background circle */}
              <motion.div
                variants={pulseVariants}
                initial="initial"
                animate="animate"
                className="absolute -top-4 -right-4 w-24 h-24 bg-[#B0CCC2]/10 rounded-full"
              />
              
              <div className="relative z-10">
                <div className="relative mb-6">
                  {/* Icon background with animated border */}
                  <motion.div
                    className="relative flex items-center justify-center w-16 h-16 bg-[#68A1A7]  rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Animated ring */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-[#B0CCC2] opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.6, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <motion.div variants={iconVariants}>
                      <Icon className="text-white relative z-10" size={28} />
                    </motion.div>
                  </motion.div>
                </div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-[#2C2C2C] group-hover:text-[#447087] transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  {title}
                </motion.h3>
                
                <motion.p 
                  className="text-[#2C2C2C]/70 leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                >
                  {description}
                </motion.p>
                
                {/* Animated accent line */}
                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-[#68A1A7] to-[#B0CCC2] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(68, 112, 135, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#68A1A7] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-[#447087]/20"
          >
            Discover Your Breakthrough
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}