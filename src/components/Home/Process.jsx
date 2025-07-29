"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Lightbulb,
  Zap,
  Award,
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Info,
  FileText,
  AlertCircle,
} from "lucide-react";

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showTips, setShowTips] = useState(true);
  const [currentStep, setCurrentStep] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const timelineRef = useRef(null);
  const stepRefs = useRef([]);

  const steps = [
    {
      title: "UNCOVER",
      description: "Freedom From: Survival Patterns & Painful Conditioning",
      icon: Search,
      gradient: "from-[#68A1A7] to-[#447087]",
      accent: "#68A1A7",
      details: [
        "Subconscious blueprint revealed",
        "Root cause and internal block identification", 
        "Personalized Breakthrough Map"
      ],
      tips: "You begin here — in the tension of what's no longer working. Whether it's procrastination, overachievement, people-pleasing, or burnout, these aren't just behaviors — they're symptoms of deeper internal programming.",
      requiredDocs: [
        "Initial assessment questionnaire",
        "Personal history intake form",
        "Goal-setting worksheet"
      ]
    },
    {
      title: "ILLUMINATE",
      description: "The Turning Point: Meeting the Invisible Forces",
      icon: Lightbulb,
      gradient: "from-[#447087] to-[#B0CCC2]",
      accent: "#447087",
      details: [
        "Awareness of unconscious drivers and emotional triggers",
        "Deconstruction of protective patterns and subconscious rules",
        "Clarity and conscious choice begins to emerge"
      ],
      tips: "Here, we bring to light the subtle, unseen drivers that have been running your life — the inner critic, shame scripts, inherited expectations, hidden fears, and protective identities.",
      requiredDocs: [
        "Pattern recognition exercises",
        "Trigger identification worksheets",
        "Family dynamics assessment"
      ]
    },
    {
      title: "REWIRE", 
      description: "Freedom To: Repatterning Identity & Choosing Powerfully",
      icon: Zap,
      gradient: "from-[#B0CCC2] to-[#68A1A7]",
      accent: "#B0CCC2",
      details: [
        "Release of outdated beliefs and emotional imprints",
        "Creation of new neural pathways and identity anchors",
        "Transformation at the subconscious and behavioral level"
      ],
      tips: "Using advanced neuroplasticity and subconscious reprogramming tools, we interrupt old neural loops and build new internal pathways that align with who you are becoming.",
      requiredDocs: [
        "Neuroplasticity practice guide",
        "Identity transformation workbook",
        "Daily rewiring exercises"
      ]
    },
    {
      title: "EMBODY",
      description: "Freedom To: Integration, Expression & Self-Led Living", 
      icon: Award,
      gradient: "from-[#68A1A7] to-[#50A7AC]",
      accent: "#50A7AC",
      details: [
        "Embodied new identity and behaviors",
        "Sustained transformation and expanded self-leadership",
        "Life and leadership aligned with truth, purpose, and power"
      ],
      tips: "This is the shift from change to embodiment. Your new way of being is no longer a concept — it becomes your natural state. You lead from clarity. Act from alignment. Live from truth.",
      requiredDocs: [
        "Integration plan",
        "Leadership assessment tools",
        "Ongoing support resources"
      ]
    }
  ];

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (steps && activeStep >= 0) {
      setCurrentStep(steps[activeStep]);
    }
  }, [activeStep]);

  // Auto-scroll to active step on mobile
  useEffect(() => {
    if (isMobile && timelineRef.current && stepRefs.current[activeStep]) {
      const timeline = timelineRef.current;
      const activeStepElement = stepRefs.current[activeStep];
      
      if (activeStepElement) {
        const stepOffsetLeft = activeStepElement.offsetLeft;
        const stepWidth = activeStepElement.offsetWidth;
        const timelineWidth = timeline.offsetWidth;
        
        // Calculate scroll position to center the active step
        const scrollLeft = stepOffsetLeft - (timelineWidth / 2) + (stepWidth / 2);
        
        timeline.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: 'smooth'
        });
      }
    }
  }, [activeStep, isMobile]);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  if (!currentStep) return null;

  return (
    <section className="py-12 md:py-24 px-4 relative overflow-hidden" style={{ backgroundColor: "#50A7AC" }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="relative mb-8 md:mb-12">
          <motion.h1
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white mb-4 md:mb-8 leading-tight"
          >
            Your Liberation
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              Journey
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                className="absolute -bottom-3 left-0 right-0 h-2 bg-white/40 rounded-full origin-left"
              />
            </motion.span>
          </motion.h1>

          <motion.p
            variants={serviceVariants}
            initial="hidden" 
            whileInView="visible"
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-center text-white/90 mx-auto mb-6 md:mb-8 max-w-4xl leading-relaxed"
          >
            A neuroscience-informed journey from survival to sovereignty - designed to liberate you from internal resistance, reveal the invisible forces shaping your life, and activate the identity, power, and purpose that have always been within you.
          </motion.p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Process Timeline
            </h2>
            <button
              onClick={() => setShowTips(!showTips)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Info
                className={`w-5 h-5 md:w-6 md:h-6 ${showTips ? "text-white" : "text-white/60"}`}
              />
            </button>
          </div>

          {/* Timeline */}
          <div className="relative mb-6 md:mb-12">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 w-full h-1 bg-white/20 hidden md:block" />
            <div 
              className="absolute top-8 left-0 h-1 transition-all duration-500 hidden md:block"
              style={{ 
                width: `${((activeStep + 1) / steps.length) * 100}%`,
                background: `linear-gradient(to right, ${steps[0].accent}, ${steps[Math.min(activeStep, steps.length - 1)].accent})`
              }}
            />

            {/* Timeline Container */}
            <div 
              ref={timelineRef}
              className="relative overflow-x-auto scrollbar-hide pb-4"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <div className="flex md:justify-between gap-4 md:gap-0 px-4 md:px-0" style={{ minWidth: isMobile ? `${steps.length * 200}px` : 'auto' }}>
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <motion.div
                      key={index}
                      ref={el => stepRefs.current[index] = el}
                      className={`relative flex flex-col items-center group ${
                        isMobile ? 'w-48 flex-shrink-0' : 'w-40 sm:w-48'
                      } ${
                        index === activeStep ? "scale-105" : ""
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleStepClick(index)}
                        className={`w-12 h-12 mt-1 rounded-full flex items-center justify-center
                          ${index <= activeStep ? "text-white" : "text-gray-400"} 
                          ${index === activeStep ? "ring-4 ring-blue-200 shadow-lg" : ""}
                          border-2 transition-all duration-300 cursor-pointer group-hover:shadow-lg`}
                        style={{
                          background: index <= activeStep 
                            ? `linear-gradient(135deg, ${step.accent}, #50A7AC)` 
                            : '#f3f4f6',
                          borderColor: index <= activeStep ? step.accent : '#d1d5db'
                        }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </button>

                      {/* Mobile: Show connecting line to next step */}
                      {isMobile && index < steps.length - 1 && (
                        <div className="absolute top-6 left-16 w-32 h-0.5 bg-white/20">
                          <div 
                            className={`h-full transition-all duration-500 ${
                              index < activeStep ? 'w-full' : 'w-0'
                            }`}
                            style={{
                              background: index < activeStep 
                                ? `linear-gradient(to right, ${step.accent}, ${steps[index + 1]?.accent || step.accent})`
                                : 'transparent'
                            }}
                          />
                        </div>
                      )}

                      <div
                        className={`text-center mt-4 transition-colors duration-300 ${
                          index === activeStep
                            ? "text-gray-800"
                            : "text-gray-600"
                        }`}
                      >
                        <h3 className="font-bold text-xs sm:text-sm mb-1 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs opacity-80 leading-tight">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation and Description */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <button
              onClick={handlePrevious}
              disabled={activeStep === 0}
              className={`p-3 rounded-lg transition-all ${
                activeStep > 0
                  ? "text-white hover:shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              style={{
                backgroundColor: activeStep > 0 ? steps[0].accent : undefined
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Description Section */}
            <div className="flex-1 mx-6">
              <div className="p-4 md:p-5 rounded-lg text-center" style={{ backgroundColor: `${currentStep.accent}10` }}>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {currentStep.tips}
                </p>
              </div>
            </div>
            
            <button
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
              className={`p-3 rounded-lg transition-all ${
                activeStep < steps.length - 1
                  ? "text-white hover:shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              style={{
                backgroundColor: activeStep < steps.length - 1 ? steps[0].accent : undefined
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Key Outcomes Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6" style={{ color: currentStep.accent }} />
                  <h4 className="font-semibold text-gray-800 text-base md:text-lg">
                    Key Outcomes
                  </h4>
                </div>
                <ul className="space-y-3">
                  {currentStep.details?.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg text-sm md:text-base"
                      style={{ backgroundColor: `${currentStep.accent}15` }}
                    >
                      <CheckCircle 
                        className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" 
                        style={{ color: currentStep.accent }}
                      />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
            Ready to begin your transformation?
          </h3>
          <p className="text-white/90 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-8">
            Start with our breakthrough assessment and discover exactly where you are on this journey.
          </p>

          <motion.a
            href="#quiz"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 bg-white text-gray-800 font-bold px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden relative"
          >
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
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 text-white/80 font-medium text-sm md:text-base"
          >
            ✨ Personalized roadmap • Science-backed methods • Lasting results
          </motion.p>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Process;