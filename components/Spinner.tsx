import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spinner"></div>
        <div className="absolute inset-0 border-4 border-t-4 border-gray-300 border-solid rounded-full animate-spinner" style={{ animationDelay: '-0.5s' }}></div>
      </div>
    </div>
  );
};

export default Spinner;
