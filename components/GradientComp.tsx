import React from "react";

const GradientComp: React.FC<{ session: any }> = ({ session }) => {
  const userName = session?.user?.name || "Guest";

  return (
    <div className="mx-[50px] mt-[25px]">
      <div
        className="rounded-2xl py-16 px-10 text-3xl font-semibold text-brown-500 h-[190px] flex items-center justify-start"
        style={{
          background:
            "linear-gradient(91deg, rgb(255, 231, 163) -0.49%, rgb(255, 188, 150) 102.15%)",
        }}
      >
        <h1
          className="rounded-2xl py-16 px-10 text-3xl font-semibold text-brown-500 flex-grow flex items-center justify-start text-[#B77951]"
         
        >
          Welcome <span className="capitalize ml-2"> {userName}</span>
        </h1>
      </div>
    </div>
  );
};

export default GradientComp;
