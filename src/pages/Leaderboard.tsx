import React, { useEffect, useState } from 'react';
import Header from "@/components/Header";
import '../styles/globals.css';
import Test from "@/pages/Test"
const Leaderboard: React.FC = () => {
  const [scores, setScores] = useState<{ name: string; points: number }[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedScores = localStorage.getItem('leaderboard');
      if (storedScores) {
        setScores(JSON.parse(storedScores));
      }
    }
  }, []);

  return (
    <div>
      <Header />
      <section className="bg-black p-6 shadow-md rounded-md">
        <h2 className="text-white text-xl font-bold mb-4">Leaderboard</h2>
        <ul>
          {scores.map((score, index) => (
            <li key={index} className="mb-2">
              {index + 1}. {score.name} - {score.points} pts
            </li>
          ))}
        </ul>
      </section>
      <Test/>
    </div>
  );
};

export default Leaderboard;
