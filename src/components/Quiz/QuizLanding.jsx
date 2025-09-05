// components/Quiz/QuizLanding.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import Navbar from '../Navbar';

const QuizLanding = ({ onStartQuiz }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>

    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="grid lg:grid-cols-2 gap-24 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-4"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Title */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
              variants={fadeInUp}
            >
              What Invisible Force Is Leading Your Life?
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 font-medium italic"
              variants={fadeInUp}
            >
              Reveal the hidden pattern which is silently limiting your success, freedom, and potential.
            </motion.p>

            {/* Main Description */}
            <motion.div 
              className="space-y-2 text-lg text-gray-700 leading-relaxed"
              variants={fadeInUp}
            >
              <p>
                We all live under the influence of invisible forces - subconscious drivers that shape how we think, feel, and act every single day. These forces have the power to hold us captive in repeating cycles…or to unlock the freedom for us to step into our full power and potential.
              </p>
              
              <p>
                This quiz reveals which invisible force is most powerfully leading your life right now. Recognizing it is the first step to releasing it - and stepping boldly into your truth, your power, and your next breakthrough.
              </p>
              
              <p className="font-semibold text-gray-800">
                Ready to uncover the invisible force that's been limiting your success, freedom, and potential?
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <motion.button
                onClick={onStartQuiz}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#50A7AC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#447087] transition-colors">
              
           
                Take the Quiz Now
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
            
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image src="/QuizImg.jpg" alt="image profile" width={450} height={300}/>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default QuizLanding;