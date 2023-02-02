import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCurrentUserContext } from "../../../contexts/userContext";
import HeaderAdmin from "../HeaderAdmin";
import AdminAdoptionItem from "./AdminAdoptionItem";

function AdminAdoptionsList() {
  const [adoptions, setAdoptions] = useState([]);
  const { token } = useCurrentUserContext();

  useEffect(() => {
    fetch("http://localhost:5000/api/adoptions", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setAdoptions(result);
      });
  }, []);
  return (
    <div>
      <HeaderAdmin />
      <div className="sm:p-7 flex flex-wrap">
        <Link to="/admin/newuser">
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
                <div className="flex items-center">Nom du chien</div>
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center">Localisation du chien</div>
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center">Prénom</div>
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center">Nom</div>
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center">Date d'adoption</div>
              </td>
            </tr>
          </thead>
          <tbody>
            {adoptions.map((adoption) => (
              <AdminAdoptionItem key={adoption.id} adoption={adoption} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminAdoptionsList;
