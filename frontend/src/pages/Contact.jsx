import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Contact() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="overflow-x-hidden h-screen">
      <Navbar />
      <h1 className="text-brown mt-5 text-2xl md:text-3xl text-center">
        Votre demande
      </h1>
      <p className="px-12 xl:px-56 mt-5 text-lg md:text-xl text-brown md:text-center">
        Merci de remplir ce formulaire afin de convenir une rencontre avec le
        chien ou pour toute autre demande de renseignement. Nous allons vous
        recontacter dans les meilleurs délais.
      </p>
      <form className="w-96 md:w-1/2 m-auto flex flex-col items-center justify-center">
        <input
          className="bg-[#F2EDED] rounded-xl mt-8 h-[3em] md:text-xl w-full pl-8"
          type="text"
          placeholder="Nom... *"
          name="firstname"
          onChange={handleChange}
        />
        <input
          className="bg-[#F2EDED] rounded-xl mt-8 h-[3em] md:text-xl w-full pl-8"
          type="text"
          placeholder="Prénom... *"
          name="lastname"
          onChange={handleChange}
        />
        <input
          className="bg-[#F2EDED] rounded-xl mt-8 h-[3em] md:text-xl w-full pl-8 mb-5"
          type="text"
          placeholder="Email... *"
          name="email"
          onChange={handleChange}
        />
        <input
          className="bg-[#F2EDED] rounded-xl mt-2 h-[3em] md:text-xl w-full pl-8 mb-5"
          type="text"
          placeholder="Téléphone... *"
          name="phone"
          onChange={handleChange}
        />
        <input
          className="bg-[#F2EDED] rounded-xl h-60 md:text-xl w-full pl-8 mb-5"
          type="text"
          name="message"
          placeholder="Votre message... *"
          onChange={handleChange}
        />
        <button
          className="text-lg mb-5 md:text-xl mr-4 bg-pink text-white hover:border hover:border-pink hover:text-pink hover:bg-navbar py-3 px-6 md:px-8 rounded-3xl"
          type="button"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;
