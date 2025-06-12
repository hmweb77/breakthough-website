// who its for
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, X, Target, Brain, Heart, Zap, ArrowRight, Users, BookOpen, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WhoItsForPage = () => {
  const [checkedItems, setCheckedItems] = useState({});

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

  const painPoints = [
    "You've done the coaching",
    "You've read all the books",
    "You've gone to the seminars",
    "You've worked with therapists",
    "You've applied every mindset hack you could find",
    "And yet... something still feels off"
  ];

  const symptoms = [
    {
      category: "Professional Stagnation",
      items: [
        "You're successful and ambitious, but your growth and results have plateaued",
        "You sense there's an invisible force quietly holding you back",
        "You feel stuck despite having all the right strategies and knowledge",
        "You know you're capable of more but can't seem to break through"
      ]
    },
    {
      category: "Internal Misalignment",
      items: [
        "You feel like you're working against yourself rather than with yourself",
        "There's an internal conflict between what you want and what you do",
        "You make decisions to avoid judgment, please others, or avoid conflict",
        "You wait for external validation to feel confident, worthy, or safe"
      ]
    },
    {
      category: "Energy & Focus Issues",
      items: [
        "You feel drained after interactions, especially when 'holding space' for others",
        "You're preoccupied with others' opinions, reactions, or expectations",
        "You lose touch with your own needs, desires, or body signals",
        "You feel scattered, not centered - even when things around you are calm"
      ]
    },
    {
      category: "Relationship & Communication",
      items: [
        "You overfuntion for others and struggle to let people be responsible for themselves",
        "You feel guilty for focusing on yourself, as if self-prioritization is selfish",
        "You have difficulty setting boundaries without over-explaining",
        "You obsess over outcomes you can't control"
      ]
    }
  ];

  const idealClient = [
    {
      icon: Target,
      title: "High-Capacity Professionals",
      description: "Entrepreneurs, leaders, and visionaries who want to scale their impact without burning out or self-sabotaging."
    },
    {
      icon: Brain,
      title: "Deep Seekers",
      description: "Those who've outgrown surface-level solutions and are ready for deep, lasting transformation."
    },
    {
      icon: Heart,
      title: "At a Crossroads",
      description: "Individuals standing at crossroads—career, identity, relationships—who know they can't strategy their way through this one."
    },
    {
      icon: Zap,
      title: "Ready for Change",
      description: "People serious about growth, ready to face what's been running the show behind the scenes."
    }
  ];

  const handleCheckboxChange = (category, index) => {
    const key = `${category}-${index}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getCheckedCount = () => {
    return Object.values(checkedItems).filter(Boolean).length;
  };

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
            Is This For You?
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            For those ready to understand themselves on a deeper level and experience true freedom, liberation, and lasting transformation
          </motion.p>
        </div>
      </motion.section>

      {/* Pain Points Section */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 className="text-4xl font-bold text-gray-900 mb-12" variants={fadeInUp}>
            Does This Sound Familiar?
          </motion.h2>
          
          <motion.div className="space-y-6" variants={staggerContainer}>
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center justify-center space-x-4 text-lg"
              >
                {index < painPoints.length - 1 ? (
                  <CheckCircle className="w-6 h-6 text-[#50A7AC] flex-shrink-0" />
                ) : (
                  <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                )}
                <span className={index < painPoints.length - 1 ? "text-gray-700" : "text-red-600 font-semibold"}>
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 p-8 bg-gray-50 rounded-xl"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">You've tried everything, but...</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Despite all your efforts, you sense there's something deeper - an invisible force, an internal block, a misalignment - that's shaping your results and quietly holding you back from what you truly want.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Symptoms Checklist */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Breakthrough Assessment</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Check all the statements that resonate with you. The more you check, the more you'll benefit from Breakthrough Methods.
            </p>
            <div className="mt-6 inline-flex items-center space-x-2 bg-[#50A7AC] text-white px-4 py-2 rounded-lg">
              <span className="font-semibold">Items checked: {getCheckedCount()}</span>
            </div>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerContainer}>
            {symptoms.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-[#50A7AC] mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <label
                      key={itemIndex}
                      className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="mt-1 w-5 h-5 text-[#50A7AC] border-gray-300 rounded focus:ring-[#50A7AC]"
                        checked={checkedItems[`${category.category}-${itemIndex}`] || false}
                        onChange={() => handleCheckboxChange(category.category, itemIndex)}
                      />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            variants={fadeInUp}
          >
            {getCheckedCount() > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {getCheckedCount() < 5 ? "You're Ready for a Breakthrough" : 
                   getCheckedCount() < 10 ? "Breakthrough Methods is Perfect for You" :
                   "You're an Ideal Candidate for Deep Transformation"}
                </h3>
                <p className="text-gray-700 mb-6">
                  Based on your responses, Breakthrough Methods can help you address these patterns and create lasting change.
                </p>
                <motion.button 
                  className="bg-[#50A7AC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#447087] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Breakthrough Call
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Ideal Client Section */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Breakthrough Methods Were Created For</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              This work isn't for dabblers. It's for those who are serious about growth and ready to rewrite their narrative from the inside out.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {idealClient.map((client, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#50A7AC] rounded-lg flex items-center justify-center mr-4">
                    <client.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{client.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{client.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Not For Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">This Work Is NOT For Everyone</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-4">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Those looking for quick fixes or surface-level motivation</p>
                </div>
                <div className="flex items-start space-x-4">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">People who want to stay in their comfort zone</p>
                </div>
                <div className="flex items-start space-x-4">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Those who aren't ready to take responsibility for their results</p>
                </div>
                <div className="flex items-start space-x-4">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Anyone seeking to blame external circumstances for their limitations</p>
                </div>
              </div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Break Through What's Holding You Back?</h2>
            <p className="text-xl text-white mb-8 opacity-90">
              If this resonates with you, you're exactly who this work was designed for. Let's discover what's possible when you remove the invisible barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-[#447087] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Take the Breakthrough Assessment
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

export default WhoItsForPage