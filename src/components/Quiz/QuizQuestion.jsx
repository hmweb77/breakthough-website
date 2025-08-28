// components/QuizQuestion.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const QuizQuestion = ({ question, onAnswer, onBack, questionNumber }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
    >
      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <ChevronLeft size={20} className="mr-2" />
          Back
        </button>
      )}

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          {question.question}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="space-y-3">
        {question.answers.map((answer, index) => (
          <motion.button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-4 mt-1 group-hover:border-blue-400 transition-colors flex-shrink-0">
                <div className="w-full h-full rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity transform scale-50" />
              </div>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors leading-relaxed">
                {answer.text}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizQuestion;