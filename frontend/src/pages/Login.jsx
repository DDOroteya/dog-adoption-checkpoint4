import React from "react";

function Login() {
  return (
    <div>
      <form className="flex flex-col items-center justify-center bg-navbar md:shadow-lg h-screen md:h-1/2 md:w-1/2 md:mx-auto md:mt-48 py-5">
        <h1 className="items-center content-center justify-center text-2xl md:text-4xl mb-16 md:mb-20">
          Connexion à l'espace admin
        </h1>
        <div className=" flex md:w-3/5 justify-center mb-5">
          <input
            type="email"
            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            placeholder="Email"
            required
            value=""
            id="email"
            name="email"
            className="bg-navbar text-gray-600 py-2 px-4 rounded-2xl md:w-3/5 h-10 w-56 md:h-14"
          />
        </div>
        <div className="flex justify-center md:w-3/5 mb-10">
          <input
            type="password"
            required
            value=""
            id="password"
            name="password"
            placeholder="Mot de passe"
            className="text-gray-600 py-2 px-4 rounded-2xl md:w-3/5 h-10 w-56 md:h-14"
          />
        </div>
        <button
          type="submit"
          className="bg-[#15133C] text-navbar m-3 py-3 px-4 rounded-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFFFFF] hover:text-[#15133C] hover:border hover:border-[#15133C]"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Login;
