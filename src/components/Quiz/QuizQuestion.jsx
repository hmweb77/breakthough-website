// components/Quiz/QuizQuestion.jsx - Updated Version
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const QuizQuestion = ({ question, onAnswer, onBack, questionNumber }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl px-8 py-2 max-w-2xl w-full"
      >
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800 mb-2 transition-colors"
          >
            <ChevronLeft size={20} className="mr-2" />
            Back
          </button>
        )}

        {/* Question */}
        <div className="text-center mb-4">
          <div className="text-sm font-medium text-[#447087] mb-4">
            Question {questionNumber} of 11
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 leading-relaxed">
            {question.question}
          </h2>
        </div>

        {/* Answer Options - Centered */}
        <div className="space-y-2 max-w-xl mx-auto">
          {question.answers.map((answer, index) => (
            <motion.button
              key={index}
              onClick={() => onAnswer(index)}
              className="w-full  p-5 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-4 group-hover:border-blue-400 transition-colors flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity transform scale-50" />
                </div>
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors leading-relaxed text-lg">
                  {answer.text}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default QuizQuestion;