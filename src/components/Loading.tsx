// components/Loading.tsx
import React from 'react';

const Loading: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <p className="text-lg font-semibold text-blue-500 animate-pulse">Loading...</p>
  </div>
);

export default Loading;
