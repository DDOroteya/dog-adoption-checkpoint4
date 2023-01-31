import React from "react";
import { Link } from "react-router-dom";
import BannerHome from "../components/BannerHome";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="h-screen">
      <BannerHome />
      <main className="px-12 py-6 md:py-16 bg-violet">
        <h2 className="text-black font-medium text-xl md:text-2xl lg:text-3xl mb-3">
          Chaque chien mérite une <span className="italic">seconde </span>
          chance.
        </h2>
        <p className="text-lg">
          La mission de notre refuge animalier est de rendre une vie meilleure
          aux chiens errants ou abandonnés et de leur trouver des famille
          d'accueil. <br /> <br /> Vous souhaitez adopter ? Venez-les rencontrer
          !
        </p>
        <Link to="/adoption">
          <button
            className="mt-5 mb-2 md:mt-8 text-lg text-center font-medium md:text-xl mr-4 bg-pink text-white hover:border hover:border-brown hover:text-brown hover:bg-violet py-3 px-4 md:px-8 rounded-3xl"
            type="button"
          >
            Voir nos chiens à l'adoption
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
