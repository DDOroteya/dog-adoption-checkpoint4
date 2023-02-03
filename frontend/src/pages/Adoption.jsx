import React, { useEffect, useState } from "react";
import Filtres from "../components/Filtres";
import DogCard from "../components/DogCard";
import Navbar from "../components/Navbar";
import { useDogContext } from "../contexts/DogContext";

const backEnd = import.meta.env.VITE_BACKEND_URL;

function Adoption() {
  const [dogs, setDogs] = useState([]);
  const { city, gender, age } = useDogContext();

  useEffect(() => {
    fetch(`${backEnd}/api/dogs`)
      .then((response) => response.json())
      .then((result) => {
        setDogs(result);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="md:flex md:justify-evenly md:sticky md:overflow-hidden">
        <h1 className="adoption-title text-center text-brown text-5xl pt-5 md:ml-5">
          Adoptez responsable
        </h1>
        <img
          src="./src/assets/drawing.jpg"
          alt="Person with dog"
          className="sm:ml-36 md:ml-0 sm:h-3/5 sm:w-3/5 md:h-1/4 md:w-1/4 mb-6 mt-8"
        />
        <div className="flex flex-col md:mt-10">
          <Filtres />
          <div className="max-h-screen md:grid md:grid-cols-2 md:overflow-y-auto md:overflow-x-hidden">
            {dogs
              .filter((dog) => dog.status_adopted === "No")
              .filter((dog) => city === "" || city === dog.location)
              .filter((dog) => gender === "" || gender === dog.gender)
              .filter((dog) => age === "" || age === dog.age)
              .map((dog) => (
                <DogCard key={dog.id} dog={dog} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adoption;
