import React from "react";
import { Link } from "react-router-dom";
import dog from "../assets/newton.jpeg";
import back from "../assets/back.png";

function DogItem() {
  return (
    <div className="bg-navbar md:h-screen">
      <div className="flex items-center justify-start pt-5 ml-4">
        <img src={back} alt="Back arrow" className="w-5 h-5" />
        <button type="button" className="ml-2 text-lg cursor-pointer">
          Retourner à la liste
        </button>
      </div>
      <h1 className="text-center text-4xl mt-7 mb-5 md:text-5xl xl:text-6xl xl:mb-8">
        Toby
      </h1>
      <div className="md:flex md:justify-center">
        <img
          src={dog}
          alt="Dog card"
          className="w-full md:w-2/4 md:m-0 m-auto rounded-xl"
        />

        <div className="bg-white w-96 md:w-2/6 md:mx-6 md:h-80 md:m-0 m-auto shadow-xl border-t mt-7 border-gray-100 rounded-[20px]">
          <ul className="p-8 text-xl leading-9">
            <li>Nom :</li>
            <li>Localisation :</li>
            <li>Genre :</li>
            <li>Age :</li>
            <li>Né(e) le :</li>
            <li>Race :</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pb-5 md:pb-0">
        <h2 className="my-6 italic text-xl text-center">
          Je souhaite adopter ou me renseigner !
        </h2>
        <Link to="/contact">
          <button
            className="text-lg w-60 md:w-72 md:text-xl bg-pink text-white hover:border hover:border-pink hover:text-pink hover:bg-navbar py-3 px-6 md:px-8 rounded-3xl"
            type="button"
          >
            Rencontrer ce chien
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DogItem;
