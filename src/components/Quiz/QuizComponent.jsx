// components/Quiz/QuizComponent.jsx - Updated Version
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { quizData, calculateResult } from './quizData';
import QuizLanding from './QuizLanding';
import QuizQuestion from './QuizQuestion';
import EmailCapture from './EmailCapture';
import ThankYou from './ThankYou';
import QuizResult from './QuizResult';

const QuizComponent = () => {
  const [state, setState] = useState({
    showLanding: true,
    currentQuestion: 0,
    answers: [],
    showResult: false,
    showEmailCapture: false,
    showThankYou: false,
    userEmail: '',
  });

  const handleStartQuiz = () => {
    setState(prev => ({
      ...prev,
      showLanding: false,
    }));
  };

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
    
    try {
      await sendQuizResult(email, result);
      setState(prev => ({
        ...prev,
        userEmail: email,
        showThankYou: true,
        showEmailCapture: false,
      }));
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error; // Re-throw to let EmailCapture handle the error
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
      showLanding: true,
      currentQuestion: 0,
      answers: [],
      showResult: false,
      showEmailCapture: false,
      showThankYou: false,
      userEmail: '',
    });
  };

  const progress = ((state.currentQuestion + 1) / quizData.questions.length) * 100;

  // Show landing page
  if (state.showLanding) {
    return <QuizLanding onStartQuiz={handleStartQuiz} />;
  }

  // Show thank you page
  if (state.showThankYou) {
    return (
      <ThankYou 
        userEmail={state.userEmail}
        onRestart={resetQuiz}
      />
    );
  }

  // Show result page (if you want to show results immediately)
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

  // Show email capture
  if (state.showEmailCapture) {
    return (
      <EmailCapture 
        onSubmit={handleEmailSubmit}
        onBack={() => setState(prev => ({ ...prev, showEmailCapture: false }))}
      />
    );
  }

  // Show quiz questions
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Progress Bar - Fixed at top */}
      {/* <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              QUESTION {state.currentQuestion + 1} OF {quizData.questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-[#447087] h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div> */}

      {/* Add padding to account for fixed progress bar */}
      <div>
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
    </div>
  );
};

// Email sending function
async function sendQuizResult(email, result) {
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