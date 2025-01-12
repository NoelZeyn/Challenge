// components/GameOver.tsx
import React from 'react';

interface GameOverProps {
  score: number;
  onPlayAgain: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, onPlayAgain }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 shadow-lg rounded-md text-center">
      <h1 className="text-3xl font-bold text-green-500 mb-4">🎉 Game Over!</h1>
      <p className="text-lg text-gray-700">
        Your score: <span className="text-blue-500">{score}</span>
      </p>
      <button
        onClick={onPlayAgain}
        className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600"
      >
        Play Again
      </button>
    </div>
  </div>
);

export default GameOver;
