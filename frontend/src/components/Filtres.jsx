import React from "react";
import { useDogContext } from "../contexts/DogContext";

function Filtres() {
  const { setCity, setGender, setAge } = useDogContext();
  const clearFilters = () => {
    setCity("");
    setGender("");
    setAge("");
  };

  return (
    <div className="flex items-center justify-evenly ml-2">
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          <select
            name="Cities"
            id="theme-select"
            onChange={(e) => setCity(e.target.value)}
            className="svg-arrow text-center text-lg md:text-xl mx-4 bg-navbar border border-pink text-pink hover:border hover:border-brown hover:text-brownpy-3 px-6 md:px-8 rounded-3xl focus:outline-none appearance-none"
          >
            <option value="0">Localisation</option>
            <option>Lyon</option>
            <option>Toulouse</option>
            <option>Marseille</option>
            <option>Montpellier</option>
          </select>
          <select
            name="Cities"
            id="theme-select"
            onChange={(e) => setGender(e.target.value)}
            className="svg-arrow text-center text-lg md:text-xl mr-4 bg-navbar border border-pink text-pink hover:border hover:border-brown hover:text-brown py-3 px-4 md:px-8 rounded-3xl focus:outline-none appearance-none"
          >
            <option value="0">Genre</option>
            <option>Femelle</option>
            <option>Mâle</option>
          </select>
          <select
            name="Cities"
            id="theme-select"
            onChange={(e) => setAge(e.target.value)}
            className="svg-arrow text-center text-lg md:text-xl mr-4 bg-navbar border border-pink text-pink hover:border hover:border-brown hover:text-brown py-3 px-4 md:px-8 rounded-3xl focus:outline-none appearance-none"
          >
            <option value="0">Age</option>
            <option>Bébé</option>
            <option>Junior</option>
            <option>Adulte</option>
            <option>Senior</option>
          </select>
        </div>
        <button
          type="button"
          className="my-3 text-lg md:text-xl text-center text-background sm:mt-6"
          onClick={() => {
            clearFilters();
          }}
        >
          <span className="hover:underline">Réinitialiser</span>
        </button>
      </div>
    </div>
  );
}

export default Filtres;
