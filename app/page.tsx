"use client";

import Header from "@/components/Header";
import Text from "@/components/Text";

export default function Home() {
  const divStyle = {
    backgroundImage: 'url(/Bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
  };

  return (
    <div style={divStyle} className="relative">
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[80%]">
        <Header url="api/auth/signup"/>
      </div>
      <div className="flex justify-center items-center h-full">
        <Text />
      </div>
    </div>
  );
}
