import React from "react";

function Filtres() {
  return (
    <div className="flex items-center justify-evenly">
      <select
        name="Cities"
        id="theme-select"
        className="svg-arrow text-center text-lg md:text-xl mx-4 bg-navbar border border-pink text-pink hover:border hover:border-pink hover:text-pink hover:bg-navbar py-3 px-6 md:px-8 rounded-3xl focus:outline-none appearance-none"
        value=""
      >
        <option value="0">Localisation</option>
        <option>Lyon</option>
      </select>
      <select
        name="Cities"
        id="theme-select"
        className="svg-arrow text-center text-lg md:text-xl mr-4 bg-navbar border border-pink text-pink hover:border hover:border-pink hover:text-pink hover:bg-navbar py-3 px-6 md:px-8 rounded-3xl focus:outline-none appearance-none"
        value=""
      >
        <option value="0">Genre</option>
        <option>Femelle</option>
      </select>
      <select
        name="Cities"
        id="theme-select"
        className="svg-arrow text-center text-lg md:text-xl mr-4 bg-navbar border border-pink text-pink hover:border hover:border-pink hover:text-pink hover:bg-navbar py-3 px-6 md:px-8 rounded-3xl focus:outline-none appearance-none"
        value=""
      >
        <option value="0">Age</option>
        <option>Junior</option>
      </select>
    </div>
  );
}

export default Filtres;
