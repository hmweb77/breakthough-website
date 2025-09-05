// components/Quiz/ThankYou.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, Sparkles } from 'lucide-react';

const ThankYou = ({ userEmail, onRestart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center"
      >
        

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold text-[#68A1A7] mb-4">
            Thank you!
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            Your quiz is complete and your responses have been successfully submitted.
          </p>
          


            <p className="text-black mb-2">
              Check your email for the quiz results to see what invisible force is leading your life.
            </p>
            <p className="text-black font-medium">
              <span className="font-bold">Your breakthrough begins the moment you open them!</span>
            </p>
     

          {/* Email Confirmation */}
          {userEmail && (
            <p className="text-gray-600">
              Results sent to: <strong>{userEmail}</strong>
            </p>
          )}
        </motion.div>

        {/* Optional Restart Button */}
        {/* {onRestart && (
          <motion.button
            onClick={onRestart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 px-6 py-3 text-white bg-[#68A1A7] border border-gray-300 rounded-lg hover:bg-[#447087] transition-colors"
          >
            Take Quiz Again
          </motion.button>
        )} */}
      </motion.div>
    </div>
  );
};

export default ThankYou;