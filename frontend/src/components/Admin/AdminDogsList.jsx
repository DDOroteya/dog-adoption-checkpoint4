import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminDogItem from "./AdminDogItem";
import HeaderAdmin from "./HeaderAdmin";

function AdminDogsList() {
  const [dogs, setDogs] = useState([]);

  const deleteFromPostWithId = (idDog) => {
    const postIndex = dogs.findIndex((dog) => dog.id === idDog);
    dogs.splice(postIndex, 1);
    setDogs([...dogs]);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/dogs")
      .then((response) => response.json())
      .then((result) => {
        setDogs(result);
      });
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <div className="sm:p-7 flex flex-wrap">
        <Link to="/admin/newdog">
          <button
            className="text-green-600 md:w-32 text-center font-bold p-2 mb-3 mt-5 ml-3 md:ml-0 md:mt-0 flex border border-green-600 rounded-xl hover:border-green-800 hover:bg-green-800 hover:text-white"
            type="button"
          >
            Ajouter +
          </button>
        </Link>
        <table className="w-full text-left">
          <thead className=" text-gray-600 bg-white dark:text-gray-100">
            <tr>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center">Nom</div>
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center">Race</div>
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center">Genre</div>
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center">Age</div>
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center">Date d'anniversaire</div>
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center">Ville</div>
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center">Statut</div>
              </td>
            </tr>
          </thead>
          <tbody>
            {dogs.map((dog) => (
              <AdminDogItem
                key={dog.id}
                dog={dog}
                deleteFromPostWithId={deleteFromPostWithId}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDogsList;
