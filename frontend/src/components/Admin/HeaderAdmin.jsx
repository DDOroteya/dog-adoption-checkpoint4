import React from "react";
import { Link } from "react-router-dom";

function HeaderAdmin() {
  return (
    <div>
      <Link to="/">
        <h1 className="flex justify-end items-center pt-3 mr-4">
          Se déconnecter
        </h1>
      </Link>
      <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
        <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 sticky">
          <div className="flex w-full items-center">
            <div className="flex items-center text-3xl text-gray-900 dark:text-white">
              <div className="flex justify-around items-center" />
              Espace Admin
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:mt-7 mt-4">
            <Link to="/admin/dogs">
              <button
                type="button"
                className="px-3 border-b-2 hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 dark:text-white dark:border-white pb-1.5"
              >
                Chiens
              </button>
            </Link>
            <Link to="/admin/users">
              <button
                type="button"
                className="px-3 border-b-2 hover:border-blue-500 hover:text-blue-500 dark:text-white dark:border-white pb-1.5"
              >
                Personnes
              </button>
            </Link>
            <Link to="/admin/adoptions">
              <button
                type="button"
                className="px-3 border-b-2 hover:border-blue-500 hover:text-blue-500 dark:text-white dark:border-white pb-1.5"
              >
                Adoptions
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin;
