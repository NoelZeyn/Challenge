import React from 'react';

type TriviaCardProps = {
  question: string;
  answers: string[];
  handleAnswer: (answer: string) => void;
};

const TriviaCard: React.FC<TriviaCardProps> = ({ question, answers, handleAnswer }) => {
  return (
    <div id='#Home' className="bg-white p-8 shadow-lg rounded-md transition-all duration-300 hover:shadow-xl">
      <h2
        className="text-2xl font-semibold mb-6 text-gray-800"
        dangerouslySetInnerHTML={{ __html: question }}
      ></h2>
      <div className="space-y-4">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer)}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-200"
            dangerouslySetInnerHTML={{ __html: answer }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TriviaCard;
