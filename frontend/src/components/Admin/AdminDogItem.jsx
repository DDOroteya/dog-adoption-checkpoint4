import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminDogItem({ dog, deleteFromPostWithId }) {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/dogs/${dog.id}`)
      .then(() => {
        toast.success("Carte chien supprimée !", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        deleteFromPostWithId(dog.id);
      })

      .catch((err) => {
        console.error(err);
        if (err.response.status === 404) {
          console.warn("Deleted with success", { type: "error" });
        }
      });
  };
  return (
    <tr className="text-gray-400">
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
        {dog.name}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
        {dog.breed}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">
        {dog.gender}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
        {dog.age}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">
        {dog.birthday_date}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">
        {dog.location}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">
        {dog.status_adopted}
      </th>
      <th className="rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
        <button className="text-blue-500 p-2 mb-2 flex" type="button">
          Modifier
        </button>
        <button
          onClick={() => handleDelete()}
          className="text-red-400 p-2 flex"
          type="submit"
        >
          Supprimer
        </button>
      </th>
    </tr>
  );
}

export default AdminDogItem;
