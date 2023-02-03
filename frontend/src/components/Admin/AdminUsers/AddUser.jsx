import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCurrentUserContext } from "../../../contexts/userContext";
import back from "../../../assets/back.png";

function AddUser() {
  const { token } = useCurrentUserContext();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    adress: "",
  });

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
      method: "POST",
      headers: myHeaders,
      body,
    };
    if (
      userData.firstname &&
      userData.lastname &&
      userData.email &&
      userData.phone_number &&
      userData.adress
    ) {
      fetch(`http://localhost:5000/api/users`, requestOptions)
        .then((response) => response.text())
        .then(() => {
          navigate("/admin/users");
          toast.success("Ajouté à la liste avec succès !", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        })
        .catch(console.error);
    }
  };

  return (
    <div>
      <div className="h-screen w-screen overflow-y-scroll md:overflow-hidden">
        <Link to="/admin/users">
          <div className="flex items-center justify-start pt-5 ml-4">
            <img src={back} alt="Back arrow" className="w-5 h-5" />
            <button type="button" className="ml-2 text-lg cursor-pointer">
              Retourner à la liste
            </button>
          </div>
        </Link>
        <h1 className="text-[40px] text-[#15133C] font-bold text-center pb-8 mt-8">
          Ajouter une nouvelle personne à la liste
        </h1>
        <form
          onSubmit={handleSubmit}
          method="PUT"
          className="md:grid md:grid-cols-2 md:gap-x-12 xl:gap-x-0 justify-center items-center flex flex-col"
        >
          <label className="flex w-1/2 mx-auto text-[#15133C] flex-col text-xl mb-2">
            Prénom :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="firstname"
              value={userData.firstname}
              onChange={handleChange}
              placeholder="Pierre"
            />
          </label>
          <label className="flex w-1/2 flex-col text-[#15133C] text-xl mb-2">
            Nom :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="lastname"
              value={userData.lastname}
              onChange={handleChange}
              placeholder="Rocher"
            />
          </label>
          <label className="flex w-1/2 mx-auto text-[#15133C] flex-col text-xl mb-2">
            Email :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="exemple@gmail.com"
            />
          </label>
          <label className="flex w-1/2 flex-col text-[#15133C] text-xl mb-2">
            Téléphone :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="phone_number"
              value={userData.phone_number}
              onChange={handleChange}
              placeholder="+33 7 83 45 67 89"
            />
          </label>
          <label className="flex w-1/2 mx-auto flex-col text-[#15133C] text-xl mb-2">
            Adresse :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="adress"
              value={userData.adress}
              onChange={handleChange}
              placeholder="25 rue Soleil 69000 Lyon"
            />
          </label>

          <div className="text-center mt-10 md:mr-48">
            <button
              type="submit"
              className="bg-[#15133C] text-white py-2 px-[2.5rem] rounded-[20px] text-md mb-4"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
