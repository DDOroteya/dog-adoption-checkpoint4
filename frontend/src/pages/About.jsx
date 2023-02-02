import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <h1 className="text-brown mt-5 text-2xl md:text-3xl text-center">
        A propos de nous
      </h1>
      <p className="px-8 xl:px-56 mt-5 text-lg md:text-xl text-brown text-center">
        <span className="italic">Amis pour la vie</span> est une association à
        but non lucratif, notre objectif est de rendre une vie meilleure aux
        animaux errants ou abandonnés.
      </p>
      <img
        src="./src/assets/about.jpeg"
        alt="Person with dog"
        className="object-cover md:h-[33rem] md:w-screen mt-6"
      />
      <div className="bg-pink text-white py-6 px-10 xl:px-80">
        <h2 className="mb-5 font-bold text-lg">Nos objectifs</h2>
        <p className="text-md">
          Venir en aide aux animaux errants ou abandonnés (chiens, chats,
          animaux de compagnie…) en les accueillant au sein de nos refuges. Les
          animaux recueillis dans notre refuge animalier sont nourris par notre
          équipe de bénévoles et soignés par des vétérinaires.
        </p>
        <p className="text-md">
          Nous mettons ensuite tout en œuvre pour que les animaux du refuge
          soient adoptés par une famille qui saura leur donner toute l'attention
          et l'affection qu'ils méritent.
        </p>
        <h2 className="my-5 font-bold text-lg">
          Comment se passe l'adoption ?{" "}
        </h2>
        <p className="text-md">
          Vous découvrez les chiens actuellement réfugiés chez nous sur notre
          site et si vous avez un coup de coeur, vous nous envoyez vos
          coordonnées pour convenir un rendez-vous et rencontrer votre futur ami
          ! Vous pouvez également venir directement sur place en prenenant un
          rendez-vous en amont.
        </p>
        <h2 className="my-5 font-bold text-lg">Et ensuite ?</h2>
        <p className="text-md">
          Une fois que vous avez adopté l'un de nos petits amis à 4 pattes, nous
          assurons un suivi des animaux adoptés et nous restons à votre
          disposition pour toute question que vous pourriez vous poser après
          l'adoption !
        </p>

        <h2 className="my-5 font-bold text-lg">Devenir bénévole</h2>
        <p className="text-md">
          Le bénévolat fait partie importante de notre association en assurant
          son fonctionnement au quotidien sur le terrain. Les bénévoles
          permettent à l'association de mener à bien sa mission première :
          améliorer le sort des animaux par tous les moyens. Contactez-nous !
        </p>
      </div>
    </div>
  );
}

export default About;
