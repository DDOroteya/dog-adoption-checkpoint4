import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCurrentUserContext } from "../../../contexts/userContext";

function AdminUserItem({ user, deleteFromPostWithId }) {
  const { token } = useCurrentUserContext();
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/users/${user.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        toast.success("Fiche utilisateur supprimée !", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        deleteFromPostWithId(user.id);
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
        {user.firstname}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
        {user.lastname}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">
        {user.email}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
        {user.phone_number}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">
        {user.adress}
      </th>

      <th className="rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Link to={`/admin/edituser/${user.id}`}>
          <button className="text-blue-500 p-2 mb-2 flex" type="button">
            Modifier
          </button>
        </Link>
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

export default AdminUserItem;
