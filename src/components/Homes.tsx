"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Atau "next/router" jika Pages Router
import Header from "@/components/Header";

const Homes = () => {
  const [name, setName] = useState("");
  const [isBrowser, setIsBrowser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  const handlePlay = () => {
    if (name.trim() && isBrowser) {
      router.push(`/trivia-game?name=${encodeURIComponent(name)}`);
    } else if (!name.trim()) {
      alert("Please enter your name to play!");
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl text-black font-bold mb-4">Welcome to Trivia Game!</h1>
        <p className="text-gray-700 mb-6">
          Enter your name to begin the fun trivia challenge!
        </p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-black px-4 py-2 border rounded-lg w-64 mb-4"
        />
        <button
          onClick={handlePlay}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Homes;
