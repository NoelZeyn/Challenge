import React from 'react';

const Leaderboard: React.FC = () => {
  const scores = JSON.parse(localStorage.getItem('leaderboard') || '[]');

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <ul>
        {scores.map((score: { name: string; points: number }, index: number) => (
          <li key={index} className="mb-2">
            {index + 1}. {score.name} - {score.points} pts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
