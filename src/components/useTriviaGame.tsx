// hooks/useTriviaGame.ts
import { useState, useEffect } from "react";
import { fetchQuestions } from "@/utils/api";

// Define the structure of a question object
type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export const useTriviaGame = (amount: number, category: number, difficulty: string) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestions(amount, category, difficulty)
      .then(setQuestions)
      .catch(console.error); // Handle errors (optional)
  }, [amount, category, difficulty]);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentIndex]?.correct_answer) {
      setScore((prev) => prev + 1);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const resetGame = () => {
    setScore(0);
    setCurrentIndex(0);
  };

  return {
    questions,
    currentIndex,
    score,
    handleAnswer,
    resetGame,
  };
};
