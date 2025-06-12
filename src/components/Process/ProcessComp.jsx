'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, RotateCcw, Heart, CheckCircle, ArrowRight, Brain, Target, Compass } from 'lucide-react';

const ProcessPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const phases = [
    {
      phase: 1,
      title: "Uncover",
      subtitle: "Human Architecture Method",
      icon: Search,
      description: "Identify your real blocks and conditioning using Human Design and Gene Keys. This is a map of your inner world that illuminates which characteristics you were born with and which ones were conditioned.",
      process: [
        "Deep dive into your unique energy and design",
        "Identify inherited patterns and programming",
        "Understand your authentic self vs conditioned self",
        "Create your personal blueprint for transformation"
      ],
      duration: "1 session",
      color: "bg-blue-500",
      lightColor: "bg-blue-50"
    },
    {
      phase: 2,
      title: "Illuminate",
      subtitle: "Parts Integration Method",
      icon: Lightbulb,
      description: "Discover what that 'unwanted part' you're rejecting within yourself actually wants to teach you. We integrate it to its proper place so it starts serving you rather than sabotaging you.",
      process: [
        "Identify internal conflicts and rejected parts",
        "Understand the wisdom behind unwanted patterns",
        "Integrate conflicting aspects of yourself",
        "Transform sabotage into self-support"
      ],
      duration: "1-2 sessions",
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50"
    },
    {
      phase: 3,
      title: "Release",
      subtitle: "Freedom Method",
      icon: RotateCcw,
      description: "Process 'shocks' to your Being that stopped forward motion. If you feel like you're taking two steps forward and one step back, there's a shock that needs to be handled.",
      process: [
        "Identify and process emotional shocks",
        "Clear resistance to being seen and heard",
        "Remove blocks to playing a bigger game",
        "Restore natural forward momentum"
      ],
      duration: "1-2 sessions",
      color: "bg-green-500",
      lightColor: "bg-green-50"
    },
    {
      phase: 4,
      title: "Rewire",
      subtitle: "Success Method",
      icon: Brain,
      description: "Remove internal conflicts and transform limiting beliefs that block what you want into empowering ones. Update the software of your mind to unlock new possibilities.",
      process: [
        "Identify key limiting beliefs",
        "Remove internal conflicts around success",
        "Install empowering belief systems",
        "Optimize your mental software"
      ],
      duration: "1-2 sessions",
      color: "bg-purple-500",
      lightColor: "bg-purple-50"
    },
    {
      phase: 5,
      title: "Resolve",
      subtitle: "Timeline Method",
      icon: Target,
      description: "Clean up your past so you can create an unlimited future. Process the five most powerful emotions that keep you stuck without talking about what happened.",
      process: [
        "Process anger, sadness, fear, hurt, shame, and guilt",
        "Extract learnings from past experiences",
        "Release emotional charge from memories",
        "Clear past evidence from limiting your future"
      ],
      duration: "6 sessions",
      color: "bg-red-500",
      lightColor: "bg-red-50"
    },
    {
      phase: 6,
      title: "Recalibrate",
      subtitle: "Recalibration Method",
      icon: Compass,
      description: "Realign your internal drivers and unconscious context. Shift the lens through which you experience yourself and the world, changing the fuel from 'away from' to 'towards' motivation.",
      process: [
        "Uncover your limiting unconscious context",
        "Realign expectations, standards, and beliefs",
        "Shift from fear-based to love-based motivation",
        "Calibrate your internal compass"
      ],
      duration: "2.5 day intensive",
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50"
    },
    {
      phase: 7,
      title: "Embody",
      subtitle: "Integration & Mastery",
      icon: Heart,
      description: "Integrate all transformations into your daily life. Embody your new way of being and maintain your breakthrough results through ongoing practice and refinement.",
      process: [
        "Integrate insights into daily life",
        "Develop new behavioral patterns",
        "Maintain breakthrough momentum",
        "Create sustainable transformation"
      ],
      duration: "Ongoing",
      color: "bg-pink-500",
      lightColor: "bg-pink-50"
    }
  ];

  const journeySteps = [
    {
      title: "Uncover",
      description: "Identify what's really holding you back"
    },
    {
      title: "Illuminate", 
      description: "Bring awareness to unconscious patterns"
    },
    {
      title: "Rewire",
      description: "Transform limiting beliefs and emotions"
    },
    {
      title: "Embody",
      description: "Integrate and live your transformation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="bg-[#50A7AC] text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
          >
            The Breakthrough Process
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            A systematic approach to permanent transformation that works with your unconscious mind to create lasting change
          </motion.p>
        </div>
      </motion.section>

      {/* Journey Overview */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Transformation Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every breakthrough follows this proven pathway from unconscious limitation to conscious mastery
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between"
            variants={staggerContainer}
          >
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center mb-8 md:mb-0"
              >
                <div className="w-20 h-20 bg-[#50A7AC] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center max-w-36">{step.description}</p>
                {index < journeySteps.length - 1 && (
                  <ArrowRight className="w-8 h-8 text-[#50A7AC] mt-4 hidden md:block rotate-0 md:rotate-0" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Detailed Phases */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The 7 Phases of Transformation</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Each phase builds upon the previous one, creating a comprehensive transformation that addresses every aspect of your internal world
            </p>
          </motion.div>

          <motion.div className="space-y-12" variants={staggerContainer}>
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`${phase.color} h-2`}></div>
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-4 gap-8">
                    {/* Phase Info */}
                    <div className="md:col-span-1">
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 ${phase.color} rounded-lg flex items-center justify-center mr-4`}>
                          <phase.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 font-medium">PHASE {phase.phase}</div>
                          <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                          <p className="text-[#50A7AC] font-medium">{phase.subtitle}</p>
                        </div>
                      </div>
                      <div className={`${phase.lightColor} p-4 rounded-lg`}>
                        <p className="text-sm text-gray-500 mb-1">Duration</p>
                        <p className="font-semibold text-gray-900">{phase.duration}</p>
                      </div>
                    </div>

                    {/* Description & Process */}
                    <div className="md:col-span-3">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">What Happens</h4>
                          <p className="text-gray-700 leading-relaxed">{phase.description}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">The Process</h4>
                          <ul className="space-y-3">
                            {phase.process.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* How It's Different */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why This Process Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike traditional approaches, our process addresses transformation from multiple angles simultaneously
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Neurological Rewiring</h3>
              <p className="text-gray-600">Works directly with the unconscious mind to trigger immediate cognitive and physiological shifts that create lasting change.</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resolution, Not Just Insight</h3>
              <p className="text-gray-600">Completes emotional experiences so they no longer take up space, energy, or emotional charge in your system.</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Embodied Integration</h3>
              <p className="text-gray-600">Changes happen at the cellular level, creating sustainable transformation that becomes your new natural state of being.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Visualization */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Transformation Timeline</h2>
            <p className="text-xl text-gray-600">
              While every journey is unique, here's what you can expect during your breakthrough process
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            variants={staggerContainer}
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#50A7AC] hidden md:block"></div>

            <div className="space-y-12">
              <motion.div variants={fadeInUp} className="flex items-start space-x-8">
                <div className="w-16 h-16 bg-[#50A7AC] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1-2
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Weeks 1-2: Foundation</h3>
                  <p className="text-gray-600">Uncover your unique design and begin identifying core patterns. You'll start seeing yourself and your challenges differently.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start space-x-8">
                <div className="w-16 h-16 bg-[#68A1A7] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3-8
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Weeks 3-8: Deep Processing</h3>
                  <p className="text-gray-600">Work through the core methods (Integration, Freedom, Success) and begin the Timeline process. Major shifts in emotional patterns and self-perception occur.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start space-x-8">
                <div className="w-16 h-16 bg-[#447087] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  9-12
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Weeks 9-12: Recalibration</h3>
                  <p className="text-gray-600">Complete the intensive recalibration process. Your entire internal operating system gets upgraded. This is where the most profound transformation occurs.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start space-x-8">
                <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  ∞
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing: Integration & Mastery</h3>
                  <p className="text-gray-600">Continue integrating your transformation into daily life. Your new way of being becomes natural and automatic, creating lasting results.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-[#447087]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Transformation?</h2>
            <p className="text-xl text-white mb-8 opacity-90">
              The process meets you exactly where you are and guides you to where you want to be. Start with a single breakthrough session or commit to the full journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-[#447087] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Breakthrough Journey
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#447087] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Discovery Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProcessPage;