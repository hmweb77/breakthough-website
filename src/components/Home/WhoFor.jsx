"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  Users, 
  Zap,
  Heart,
  Brain,
  Lock,
  Key
} from "lucide-react";

const criteriaItems = [
  {
    icon: Users,
    text: "You're a high-performing entrepreneur, leader, or visionary who senses there's something deeper driving your results — or holding them back.",
    gradient: "from-[#68A1A7] to-[#B0CCC2]"
  },
  {
    icon: Target,
    text: "You're standing at a personal or professional crossroads and realize strategy alone won't get you through this one.",
    gradient: "from-[#447087] to-[#68A1A7]"
  },
  {
    icon: Brain,
    text: "You've outgrown surface-level tools and are ready for deep, lasting transformation.",
    gradient: "from-[#B0CCC2] to-[#447087]"
  },
  {
    icon: Heart,
    text: "You crave inner freedom, clarity, and the ability to fully show up as the most authentic, powerful version of yourself.",
    gradient: "from-[#68A1A7] to-[#447087]"
  },
  {
    icon: Zap,
    text: "You're willing to look within, face what's running the show behind the scenes, and finally shift what no longer serves you.",
    gradient: "from-[#447087] to-[#B0CCC2]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 10px 30px rgba(68, 112, 135, 0.2)",
      "0 20px 50px rgba(68, 112, 135, 0.4)",
      "0 10px 30px rgba(68, 112, 135, 0.2)"
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const WhoIsItFor = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-[#F0F1F0] via-[#F0F1F0] to-[#B0CCC2]/15">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 right-10 w-64 h-64 bg-[#68A1A7]/8 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-32 left-20 w-80 h-80 bg-[#B0CCC2]/6 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-40 h-40 bg-[#447087]/4 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-3 bg-[#B0CCC2]/20 backdrop-blur-sm border border-[#68A1A7]/30 rounded-full px-8 py-4 mb-10"
          >
            <Lock className="text-[#447087]" size={22} />
            <span className="text-[#447087] font-bold text-base tracking-wide uppercase">Exclusive Transformation</span>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">

              Who Is This Work
           
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[#68A1A7] relative"
            >
              Really For?
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                className="absolute -bottom-3 left-0 right-0 h-2 bg-[#68A1A7]  rounded-full origin-left opacity-60"
              />
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <p className="text-2xl sm:text-3xl font-light text-[#2C2C2C]/90 leading-relaxed mb-8">
              This work is <span className="font-bold text-[#68A1A7]">not for everyone</span>. 
              It's for the ones who know — deep down — that 
              <span className="font-bold text-[#68A1A7]"> more is possible</span>.
            </p>
          </motion.div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="bg-gradient-white/80  backdrop-blur-sm rounded-3xl border border-[#B0CCC2]/20 p-12 shadow-xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center"
            >
              <p className="text-xl sm:text-2xl text-[#2C2C2C]/80 leading-relaxed mb-8 font-light">
                You've done the coaching. You've read the books. You've sat through the seminars, 
                maybe even worked with a therapist or two. On paper, you're doing well — but inside, 
                something still feels off.
              </p>
              <p className="text-xl sm:text-2xl text-[#447087] leading-relaxed font-medium">
                Your success feels incomplete. The progress stalls. And no matter how many strategies 
                you try, something unseen seems to keep you stuck.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Criteria Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-16 text-[#2C2C2C]"
          >
            <span className="bg-[#68A1A7] bg-clip-text text-transparent">
              Breakthrough Methods
            </span> is for you if:
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 max-w-5xl mx-auto"
          >
            {criteriaItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    x: 10,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-[#B0CCC2]/20 p-8 shadow-lg hover:shadow-xl overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  <div className="relative z-10 flex items-start gap-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="text-white" size={28} />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-lg sm:text-xl text-[#2C2C2C]/90 leading-relaxed font-medium">
                        {item.text}
                      </p>
                    </div>
                    
                    {/* Check mark */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.8, type: "spring" }}
                      className="flex-shrink-0"
                    >
                      <CheckCircle className="text-[#68A1A7]" size={24} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Transformation Promise */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#68A1A7]/10 to-[#B0CCC2]/10 backdrop-blur-sm border border-[#68A1A7]/20 rounded-3xl p-12">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="inline-block mb-6"
            >
              <Key className="text-[#68A1A7]" size={48} />
            </motion.div>
            
            <h3 className="text-4xl sm:text-5xl font-bold mb-8 bg-[#68A1A7] bg-clip-text text-transparent">
              This isn't about fixing you.
              <br />
              It's about freeing you.
            </h3>
            
            <p className="text-xl text-[#2C2C2C]/80 leading-relaxed mb-6">
              This work is for the <span className="font-bold text-[#447087]">doers and the seekers</span>. 
              The ones who want to lead with alignment, create with purpose, and live with the kind of 
              internal congruence that naturally unlocks success — without the burnout, self-doubt, or sabotage.
            </p>
            
            <p className="text-xl text-[#68A1A7] font-medium">
              If you're ready to stop circling the same issues and finally dissolve the invisible blocks 
              standing between you and the life you know you're meant to live — then you're in the right place.
            </p>
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
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Sparkles className="text-[#68A1A7]" size={40} />
            </motion.div>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mb-4">
              Ready to discover if this is your path?
            </h3>
            <p className="text-xl text-[#447087] max-w-3xl mx-auto leading-relaxed">
              Take our personalized assessment to see if you're ready for this level of transformational work.
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
              className="group relative inline-flex items-center gap-4 bg-[#68A1A7] text-white text-2xl font-bold py-6 px-12 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              
              
              <span className="relative z-10">Take the Breakthrough Assessment</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight size={28} />
              </motion.div>
              
              
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-8 text-[#447087] font-semibold text-lg"
          >
            ✨ Deep insights in under 5 minutes • Completely personalized results
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsItFor;