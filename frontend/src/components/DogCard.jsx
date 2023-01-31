import React from "react";

function DogCard() {
  return (
    <div className="ml-6 md:grid xl:grid-cols-3 md:gird-cols-2 md:ml-24 xl:gap-x-10 xl:mr-10">
      <div className="bg-white md:w-72 md:h-80 mr-6 shadow-xl border-t border-gray-100 mt-7 rounded-[20px]">
        <div>
          <img
            src="./src/assets/newton.jpeg"
            alt="Dog card"
            className="w-full rounded-t-xl"
          />
        </div>
        <div className="px-6 py-3 md:py-2 md:px-3 flex flex-col items-start">
          <h1 className="text-2xl font-bold mb-3">Toby</h1>
          <h2 className="text-lg">Localisation : </h2>
          <h2 className="text-lg">Genre : </h2>
          <img
            src="./src/assets/paw.png"
            alt="Paw"
            className="h-10 w-10 md:h-12 md:w-12 self-end md:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default DogCard;
