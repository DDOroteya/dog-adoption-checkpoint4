import React from "react";
import AdminDogsList from "./AdminDogsList";

export default function AdminDogManagement() {
  return (
    <div>
      <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
        <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 sticky">
          <div className="flex w-full items-center">
            <div className="flex items-center text-3xl text-gray-900 dark:text-white">
              <div className="flex justify-around items-center" />
              Espace Admin
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:mt-7 mt-4">
            <button
              type="button"
              className="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5"
            >
              Chiens
            </button>
            <a
              href="/"
              className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5"
            >
              Personnes
            </a>
            <a
              href="/"
              className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
            >
              Adoptions
            </a>
          </div>
        </div>
      </div>

      <AdminDogsList />
    </div>
  );
}
