import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useCurrentUserContext } from "../../../contexts/userContext";
import back from "../../../assets/back.png";

function EditUser() {
  const { token } = useCurrentUserContext();
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((user) => setUserData(user))
      .catch(console.error);
  }, [userId]);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify(userData);

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body,
      redirect: "follow",
    };
    if (
      userData.firstname &&
      userData.lastname &&
      userData.email &&
      userData.phone_number &&
      userData.adress
    )
      fetch(`http://localhost:5000/api/users/${userId}`, requestOptions)
        .then((response) => response.text())
        .then(() => {
          navigate("/admin/users");
        })
        .catch(console.error);
  };

  return (
    <div className="h-screen w-screen">
      <Link to="/admin/users">
        <div className="flex items-center justify-start pt-5 ml-4">
          <img src={back} alt="Back arrow" className="w-5 h-5" />
          <button type="button" className="ml-2 text-lg cursor-pointer">
            Retourner à la liste
          </button>
        </div>
      </Link>
      <h1 className="text-[40px] text-[#15133C] font-bold text-center pb-8 mt-8">
        Modifier la fiche d'une personne
      </h1>

      <form
        onSubmit={(e) => handleSubmit(e)}
        method="PUT"
        className="justify-center items-center flex flex-col md:flex-row md:items-start md:mt-10"
      >
        <div className="flex flex-col justify-center items-center mt-5 md:mt-0">
          <label className="flex md:w-1/2 text-[#15133C] flex-col text-xl mb-4">
            <span className="font-bold">Prénom :</span>
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="firstname"
              value={userData.firstname}
              onChange={handleChange}
            />
          </label>
          <label className="flex md:w-1/2 flex-col text-[#15133C] text-xl mb-4">
            <span className="font-bold">Nom :</span>
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="lastname"
              value={userData.lastname}
              onChange={handleChange}
            />
          </label>
          <label className="flex md:w-1/2 mx-auto text-[#15133C] flex-col text-xl mb-4">
            <span className="font-bold">Email :</span>
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </label>
          <label className="flex md:w-1/2 flex-col text-[#15133C] text-xl mb-4">
            <span className="font-bold">Téléphone :</span>
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="phone_number"
              value={userData.phone_number}
              onChange={handleChange}
            />
          </label>
          <label className="flex md:w-1/2 mx-auto flex-col text-[#15133C] text-xl mb-4">
            <span className="font-bold">Date d'anniversaire :</span>
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="adress"
              value={userData.adress}
              onChange={handleChange}
            />
          </label>

          <div className="text-center md:mt-10 md:mr-50">
            <button
              type="submit"
              className="bg-[#15133C] text-white py-3 px-[2.5rem] rounded-[20px] text-md mb-4"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
