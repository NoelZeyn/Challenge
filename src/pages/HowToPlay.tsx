import React from "react";
import Header from "@/components/Header";
import Link from "next/link"; // Import Link from next/link
import '../styles/globals.css';

const HowToPlay: React.FC = () => {
  return (
    <div>
      <Header />
      <section
        id="how-to-play"
        className="bg-gray-100 text-gray-800 py-12 px-6 md:py-16 md:px-20"
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-600 mb-6">
            How to Play 🎮
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-700 mb-12">
            Follow these simple steps to enjoy the Trivia Challenger experience!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-4xl text-indigo-500 mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Choose a Category
              </h3>
              <p className="text-gray-600">
                Start by selecting your favorite trivia category. From science to
                history, we’ve got you covered!
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-4xl text-indigo-500 mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Answer Questions
              </h3>
              <p className="text-gray-600">
                Read each question carefully and choose the correct answer before
                time runs out.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-4xl text-indigo-500 mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Check Your Score
              </h3>
              <p className="text-gray-600">
                Track your progress, compare scores, and challenge your friends to
                beat your high score!
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/" passHref>
              <button
                className="bg-indigo-600 text-white py-3 px-8 rounded-lg shadow-lg font-bold hover:bg-indigo-700 transition-all duration-300"
              >
                Play Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToPlay;
