"use client";
import React from "react";

const Text: React.FC = () => {
//   const divStyle = {
//     backgroundImage: 'url(/Bg.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     width: '100vw',
//     height: '100vh',
//   };

  return (
    <div className="flex justify-center items-center text-white">
      <div className="text-center p-4">
        <h1 className="text-6xl font-bold mb-6 leading-snug pt-6">
          The largest community of tomorrow’s <br /> builders with 1000+ members
        </h1>
        <h3 className="text-xl mt-4">
          A place where you can learn, find work opportunities, and meet passionate people to grow with.
        </h3>
      </div>
    </div>
  );
};

export default Text;
