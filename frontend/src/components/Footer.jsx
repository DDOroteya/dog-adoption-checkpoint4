import React from "react";

function Footer() {
  return (
    <div className="bg-light flex justify-between items-center py-4 px-3">
      <div className="flex flex-col text-brown md:text-lg md:px-6">
        <h1 className="mb-2">Nous contacter</h1>
        <h1>Administration</h1>
      </div>
      <img
        src="./src/assets/paw.png"
        alt="Paw"
        className="h-12 w-12 md:h-16 md:w-16 md:mr-3 "
      />
    </div>
  );
}

export default Footer;
