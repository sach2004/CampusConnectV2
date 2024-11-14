"use client";
import Link from "next/link";
import React, { useState } from "react";

interface Textprop  {
    url : string;
}

const Header: React.FC<Textprop> = ({url} : Textprop) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  };

  return (
    <div className="flex justify-between items-center w-full">
      <div className="h-14 w-18 hover:bg-gray-300  bg-[#9D9DA0] rounded-full flex justify-center items-center">
        <div className="px-4 text-2xl font-bold">
          <h1>
            <span className="text-[#5169F6]">Campus</span>
            <span className="text-black">Link</span>
          </h1>
        </div>
      </div>
      <div className="h-14 w-18 bg-[#9D9DA0] hover:bg-gray-300 rounded-full flex justify-center items-center text-black font-bold">
        <ul className="flex space-x-3">
          <li><a href="#" className="px-3 py-2  rounded pl-9">Hire Talent</a></li>
          <li><a href="#" className="px-3 py-2 rounded">Projects</a></li>
          <li><a href="#" className="px-3 py-2 rounded">Community</a></li>
          <li><a href="#" className="px-3 py-2 rounded pr-9">Events</a></li>
        </ul>
      </div>

      <button
        onClick={handleClick}
        className="relative text-[#FEFEFF] pl-7 pr-7 h-14 w-18 bg-[#5169F6] rounded-lg flex justify-center items-center text-white font-bold"
      >
        {loading ? (
          <div className="absolute flex justify-center items-center w-full h-full">
            <div className="animate-spin h-6 w-6 border-4 border-t-4 border-white rounded-full"></div>
          </div>
        ) : (
          <Link href={url} className="z-10">Sign up</Link>
        )}
      </button>
    </div>
  );
};

export default Header;
