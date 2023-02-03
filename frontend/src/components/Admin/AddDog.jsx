import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCurrentUserContext } from "../../contexts/userContext";
import back from "../../assets/back.png";
import dogdefault from "../../assets/default.jpeg";

function AddDog() {
  const { token } = useCurrentUserContext();
  const navigate = useNavigate();

  const inputRef = useRef(null);

  const [dataDog, setDataDog] = useState({
    name: "",
    breed: "",
    gender: "",
    age: "",
    birthday_date: "",
    location: "",
    status_adopted: "",
  });

  const handleChange = (e) => {
    setDataDog({
      ...dataDog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      dataDog.name &&
      dataDog.breed &&
      dataDog.gender &&
      dataDog.age &&
      dataDog.birthday_date &&
      dataDog.location &&
      dataDog.status_adopted
    ) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const dog = JSON.stringify(dataDog);

      const formData = new FormData();
      formData.append("dog", dog);
      formData.append("picture", inputRef.current.files[0]);
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
      };

      fetch(`http://localhost:5000/api/dogs`, requestOptions)
        .then((response) => response.text())
        .then(() => {
          navigate("/admin/dogs");
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
        <Link to="/admin/dogs">
          <div className="flex items-center justify-start pt-5 ml-4">
            <img src={back} alt="Back arrow" className="w-5 h-5" />
            <button type="button" className="ml-2 text-lg cursor-pointer">
              Retourner à la liste
            </button>
          </div>
        </Link>
        <h1 className="text-[40px] text-[#15133C] font-bold text-center pb-8 mt-8">
          Ajouter un chien à la liste
        </h1>
        <div className="flex justify-center items-center mb-4">
          <img
            className="self-start w-28 h-28 border-4 border-violet mr-4"
            src={dogdefault}
            alt="Dog"
          />
          <label>
            <input
              type="file"
              id="image-upload"
              name="avatar"
              ref={inputRef}
              value={dataDog.picture}
              className=""
            />
          </label>
        </div>
        <form
          onSubmit={handleSubmit}
          method="PUT"
          className="md:grid md:grid-cols-2 md:gap-x-12 xl:gap-x-0 justify-center items-center flex flex-col"
        >
          <label className="flex w-1/2 mx-auto text-[#15133C] flex-col text-xl mb-2">
            Nom :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="name"
              value={dataDog.name}
              onChange={handleChange}
              placeholder="Exemple : Johnny"
            />
          </label>
          <label className="flex w-1/2 flex-col text-[#15133C] text-xl mb-2">
            Race :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="breed"
              value={dataDog.breed}
              onChange={handleChange}
              placeholder="Exemple : Croisé"
            />
          </label>
          <label className="flex w-1/2 mx-auto text-[#15133C] flex-col text-xl mb-2">
            Genre :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="gender"
              value={dataDog.gender}
              onChange={handleChange}
              placeholder="Femelle / Mâle"
            />
          </label>
          <label className="flex w-1/2 flex-col text-[#15133C] text-xl mb-2">
            Age :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="age"
              value={dataDog.age}
              onChange={handleChange}
              placeholder="Bébé / Junior / Adulte / Senior"
            />
          </label>
          <label className="flex w-1/2 mx-auto flex-col text-[#15133C] text-xl mb-2">
            Date d'anniversaire :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="birthday_date"
              value={dataDog.birthday_date}
              onChange={handleChange}
              placeholder="Exemple : 2020-02-02"
            />
          </label>
          <label className="flex w-1/2 flex-col text-[#15133C] text-xl mb-2">
            Ville :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
              type="text"
              name="location"
              value={dataDog.location}
              onChange={handleChange}
              placeholder="Lyon / Marseille / Toulouse"
            />
          </label>
          <label className="flex w-1/2 flex-col text-[#15133C] mx-auto text-xl mb-2">
            Adopté :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-200"
              type="text"
              name="status_adopted"
              value={dataDog.status_adopted}
              onChange={handleChange}
              placeholder="No"
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

export default AddDog;
