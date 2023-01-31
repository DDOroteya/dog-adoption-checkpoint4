import React from "react";

export default function BannerHome() {
  return (
    <div className="h-screen relative overflow-x-hidden">
      <div className="h-screen w-screen bg-[url('./src/assets/dog-home.jpeg')] bg-center md:bg-center bg-no-repeat bg-cover" />
      <h1 className="w-3/4 top-[32rem] md:top-48 left-24 absolute text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-left drop-shadow-2xl">
        Donnons-leur autant qu'ils nous apportent !
      </h1>
    </div>
  );
}
