import React from "react";
import Filtres from "../components/Filtres";
import DogCard from "../components/DogCard";

function Adoption() {
  return (
    <div>
      <div className="md:flex md:justify-evenly md:sticky">
        <img
          src="./src/assets/drawing.jpg"
          alt="Person with dog"
          className="sm:ml-36 md:ml-0 sm:h-3/5 sm:w-3/5 md:h-1/4 md:w-1/4 mb-6 mt-8"
        />
        <div className="flex flex-col md:mt-10">
          <Filtres />
          <div className="max-h-screen md:overflow-y-auto md:overflow-x-hidden">
            <DogCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adoption;
