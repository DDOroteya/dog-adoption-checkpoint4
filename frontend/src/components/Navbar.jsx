import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="bg-navbar flex justify-between items-center shadow-lg">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-28 h-28" />
      </Link>
      <div className="flex items-center">
        <Link to="/about">
          <h1 className="text-pink text-lg md:text-xl mr-4">A propos</h1>
        </Link>
        <Link to="/adoption">
          <button
            className="text-lg md:text-xl mr-4 bg-pink text-white hover:border hover:border-pink hover:text-pink hover:bg-navbar py-3 px-6 md:px-8 rounded-3xl"
            type="button"
          >
            Adopter
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
