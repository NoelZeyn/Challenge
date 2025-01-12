"use client";
import { useEffect, useState } from "react";
import { fetchQuestions } from '@/utils/api';
import TriviaCard from "@/components/TriviaCard";
import Header from "@/components/Header";

// Define the structure of a question object
type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestions(5, 18, "medium")
      .then(setQuestions)
      .catch(console.error); // Handle errors (optional)
  }, []);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentIndex]?.correct_answer) {
      setScore((prev) => prev + 1);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-blue-500 animate-pulse">Loading...</p>
      </div>
    );
  }

  if (currentIndex >= questions.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 shadow-lg rounded-md text-center">
          <h1 className="text-3xl font-bold text-green-500 mb-4">🎉 Game Over!</h1>
          <p className="text-lg text-gray-700">
            Your score: <span className="text-blue-500">{score}</span>
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div>
      <Header />
      <main className="p-6 min-h-screen bg-gray-100 flex items-center justify-center">
        <TriviaCard
          question={currentQuestion.question}
          answers={answers}
          handleAnswer={handleAnswer}
        />
      </main>
    </div>
  );
}
