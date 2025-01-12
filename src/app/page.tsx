
"use client";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import GameOver from "@/components/GameOver";
import TriviaGame from "@/components/TriviaGame";
import { useTriviaGame } from "@/components/useTriviaGame";

export default function Home() {
  const { questions, currentIndex, score, handleAnswer, resetGame } = useTriviaGame(5, 18, "medium");

  if (questions.length === 0) {
    return <Loading />;
  }

  if (currentIndex >= questions.length) {
    return <GameOver score={score} onPlayAgain={resetGame} />;
  }

  const currentQuestion = questions[currentIndex];
  const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div>
      <Header />
      <TriviaGame
        currentQuestion={currentQuestion}
        answers={answers}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}
