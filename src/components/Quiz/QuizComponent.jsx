// components/QuizComponent.jsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Mail } from 'lucide-react';
import { quizData, calculateResult } from './quizData';
import QuizQuestion from './QuizQuestion';
import EmailCapture from './EmailCapture';
import QuizResult from './QuizResult';


const QuizComponent = () => {
  const [state, setState] = useState({
    currentQuestion: 0,
    answers: [],
    showResult: false,
    showEmailCapture: false,
    userEmail: '',
  });

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...state.answers, answerIndex];
    
    if (state.currentQuestion < quizData.questions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        answers: newAnswers,
      }));
    } else {
      // Quiz completed, show email capture
      setState(prev => ({
        ...prev,
        answers: newAnswers,
        showEmailCapture: true,
      }));
    }
  };

  const handleEmailSubmit = async (email) => {
    const result = calculateResult(state.answers);
    
    // Here you would integrate with your email service (e.g., EmailJS, SendGrid, etc.)
    try {
      await sendQuizResult(email, result);
      setState(prev => ({
        ...prev,
        userEmail: email,
        showResult: true,
        showEmailCapture: false,
      }));
    } catch (error) {
      console.error('Failed to send email:', error);
      // Handle error - you might want to show an error message
    }
  };

  const goBack = () => {
    if (state.currentQuestion > 0) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1,
        answers: prev.answers.slice(0, -1),
      }));
    }
  };

  const resetQuiz = () => {
    setState({
      currentQuestion: 0,
      answers: [],
      showResult: false,
      showEmailCapture: false,
      userEmail: '',
    });
  };

  const progress = ((state.currentQuestion + 1) / quizData.questions.length) * 100;

  if (state.showResult) {
    const result = calculateResult(state.answers);
    return (
      <QuizResult 
        result={result} 
        onRestart={resetQuiz}
        userEmail={state.userEmail}
      />
    );
  }

  if (state.showEmailCapture) {
    return (
      <EmailCapture 
        onSubmit={handleEmailSubmit}
        onBack={() => setState(prev => ({ ...prev, showEmailCapture: false }))}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Invisible Force Is Leading Your Life?
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reveal the hidden pattern which is silently limiting your success, freedom, and potential.
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              STEP {state.currentQuestion + 1} OF {quizData.questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Quiz Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Question Side */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <QuizQuestion
                key={state.currentQuestion}
                question={quizData.questions[state.currentQuestion]}
                onAnswer={handleAnswer}
                onBack={state.currentQuestion > 0 ? goBack : undefined}
                questionNumber={state.currentQuestion + 1}
              />
            </AnimatePresence>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2">
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200">
                {/* Ocean/Nature themed background */}
                <div className="w-full h-full bg-cover bg-center relative" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                     }}>
                  {/* Decorative elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🌊</div>
                      <p className="text-lg font-medium opacity-80">
                        Discover Your Inner Truth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Email sending function (you'll need to implement this based on your email service)
async function sendQuizResult(email, result) {
  // Example using fetch to your API endpoint
  const response = await fetch('/api/send-quiz-result', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      result,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send email');
  }

  return response.json();
}

export default QuizComponent;