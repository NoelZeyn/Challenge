import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import TriviaGame from "@/components/TriviaGame";
import Loading from "@/components/Loading";
import GameOver from "@/components/GameOver";
import { useTriviaGame } from "@/components/useTriviaGame";
import { supabase } from "@/lib/supabase";  // Pastikan Supabase diimport dengan benar
import '../styles/globals.css';

const TriviaGamePage = () => {
  const router = useRouter();
  const { name } = router.query; // Ambil nama dari URL
  const { questions, currentIndex, score, handleAnswer, resetGame } = useTriviaGame(5, 18, "medium");

  // Jika nama tidak ditemukan
  if (!name) {
    return <div>Please go back and enter your name.</div>;
  }

  // Jika data pertanyaan belum tersedia
  if (questions.length === 0) {
    return <Loading />;
  }

  // Jika permainan selesai
  if (currentIndex >= questions.length) {
    // Simpan skor dan nama ke Supabase
    const saveScoreToSupabase = async () => {
      const { error } = await supabase
        .from("leaderboard")
        .insert([{ name, score }]);

      if (error) {
        console.error("Error saving score:", error.message);
      } else {
        console.log("Score saved successfully!");
      }
    };

    saveScoreToSupabase();

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
      <div className="text-center mt-4">
        <p className="text-lg">Good luck, {name}!</p>
      </div>
    </div>
  );
};

export default TriviaGamePage;
