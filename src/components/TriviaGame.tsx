// components/TriviaGame.tsx
import React from 'react';
import TriviaCard from './TriviaCard';

interface TriviaGameProps {
  currentQuestion: {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };
  answers: string[];
  handleAnswer: (answer: string) => void;
}

const TriviaGame: React.FC<TriviaGameProps> = ({ currentQuestion, answers, handleAnswer }) => (
  <main className="p-6 min-h-screen bg-gray-100 flex items-center justify-center">
    <TriviaCard
      question={currentQuestion.question}
      answers={answers}
      handleAnswer={handleAnswer}
    />
  </main>
);

export default TriviaGame;
