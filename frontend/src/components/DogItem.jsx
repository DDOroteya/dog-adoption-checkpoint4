import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import back from "../assets/back.png";

const backEnd = import.meta.env.VITE_BACKEND_URL;

function DogItem() {
  const [dogData, setDogData] = useState({});
  const { dogId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/dogs/${dogId}`)
      .then((response) => response.json())
      .then((result) => {
        setDogData(result);
      });
  }, [dogId]);

  return (
    <div className="bg-white md:h-screen">
      <Link to="/adoption">
        <div className="flex items-center justify-start pt-5 ml-4">
          <img src={back} alt="Back arrow" className="w-5 h-5" />
          <button type="button" className="ml-2 text-lg cursor-pointer">
            Retourner à la liste
          </button>
        </div>
      </Link>
      <h1 className="adoption-title text-center text-4xl mt-7 mb-5 sm:text-5xl md:text-6xl xl:text-7xl xl:mb-8">
        {dogData.name}
      </h1>
      <div className="md:flex md:justify-center">
        <img
          src={`${backEnd}/uploads/${dogData.picture}`}
          alt="Dog card"
          className="w-full md:w-2/4 md:m-0 m-auto rounded-xl"
        />

        <div className="bg-white w-96 md:w-2/6 md:mx-6 md:h-80 md:m-0 m-auto shadow-xl border-t mt-7 border-gray-100 rounded-[20px]">
          <ul className="p-8 text-xl leading-9">
            <li>
              <span className="font-bold">Nom :</span> {dogData.name}
            </li>
            <li>
              <span className="font-bold">Localisation :</span>{" "}
              {dogData.location}
            </li>
            <li>
              <span className="font-bold">Genre :</span> {dogData.gender}
            </li>
            <li>
              <span className="font-bold">Age :</span> {dogData.age}
            </li>
            <li>
              <span className="font-bold">Né(e) le : </span>
              {dogData.birthday_date}
            </li>
            <li>
              <span className="font-bold">Race :</span> {dogData.breed}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pb-5 md:pb-0">
        <h2 className="my-6 italic text-xl text-center">
          Je souhaite adopter ou me renseigner !
        </h2>
        <Link to="/contact">
          <button
            className="text-lg w-60 md:w-72 xl:mb-10 md:text-xl bg-pink text-white hover:border hover:border-pink hover:text-pink hover:bg-navbar py-3 px-6 md:px-8 rounded-3xl"
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
