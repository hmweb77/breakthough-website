// components/QuizResult.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Mail, Share2 } from 'lucide-react';

const QuizResult = ({ result, onRestart, userEmail }) => {
  const { description } = result;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'What Invisible Force Is Leading Your Life?',
        text: `I just discovered that ${result.force} is my dominant invisible force. Take the quiz to discover yours!`,
        url: window.location.origin
      });
    } else {
      // Fallback to copying to clipboard
      const shareText = `I just discovered that ${result.force} is my dominant invisible force. Take the quiz to discover yours! ${window.location.origin}`;
      navigator.clipboard.writeText(shareText);
      alert('Share text copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Your Results Are In!
          </h1>
          <p className="text-lg text-gray-600">
            Check your email for the complete analysis
          </p>
        </motion.div>

        {/* Main Result Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`bg-gradient-to-br ${description.color} rounded-2xl shadow-2xl p-8 text-white mb-8`}
        >
          <div className="text-center">
          
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Invisible Force: {description.title}
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-6 opacity-90">
              {description.shortDescription}
            </p>
          </div>
        </motion.div>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Understanding Your Result
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {description.fullDescription}
          </p>
        </motion.div>

        {/* Email Confirmation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center mb-4">
            <Mail className="text-blue-600 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-blue-800">
              Check Your Email
            </h3>
          </div>
          <p className="text-blue-700">
            We've sent your complete quiz results to <strong>{userEmail}</strong>. 
            The email includes detailed insights about your invisible force and actionable steps 
            to help you break free from limiting patterns.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={handleShare}
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-600 transition-all duration-200"
          >
            <Share2 size={20} className="mr-2" />
            Share Your Results
          </button>
          
          <button
            onClick={onRestart}
            className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all duration-200"
          >
            <RefreshCw size={20} className="mr-2" />
            Take Quiz Again
          </button>
        </motion.div>

        {/* Score Breakdown (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 bg-gray-50 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Your Force Breakdown
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(result.scores).map(([force, score]) => (
              <div key={force} className="text-center">
                <div className="text-2xl font-bold text-gray-700">{score}</div>
                <div className="text-sm text-gray-600">{force}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizResult;