import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import back from "../../assets/back.png";

function EditDog() {
  const { dogId } = useParams();
  const [dogData, setDogData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/dogs/${dogId}`)
      .then((response) => response.json())
      .then((dog) => setDogData(dog))
      .catch(console.error);
  }, [dogId]);

  const onChange = (e) => {
    setDogData({
      ...dogData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify(dogData);
    console.warn(dogData);

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body,
      redirect: "follow",
    };
    if (
      dogData.name &&
      dogData.breed &&
      dogData.gender &&
      dogData.age &&
      dogData.birthday_date &&
      dogData.location &&
      dogData.status_adopted
    )
      fetch(`http://localhost:5000/api/dogs/${dogId}`, requestOptions)
        .then((response) => response.text())
        .then(() => {
          navigate("/admin/dogs");
        })
        .catch(console.error);
  };
  return (
    <div>
      <div className="h-screen w-screen">
        <Link to="/admin/dogs">
          <div className="flex items-center justify-start pt-5 ml-4">
            <img src={back} alt="Back arrow" className="w-5 h-5" />
            <button type="button" className="ml-2 text-lg cursor-pointer">
              Retourner à la liste
            </button>
          </div>
        </Link>
        <h1 className="text-[40px] text-[#15133C] font-bold text-center pb-8 mt-8">
          Modifier la fiche d'un chien
        </h1>

        <form
          onSubmit={(e) => onSubmit(e)}
          method="PUT"
          className="justify-center items-center flex flex-col md:flex-row md:items-start md:mt-10"
        >
          <img
            className="w-full md:w-2/5 object-cover"
            src={dogData.picture}
            alt="Dog"
          />
          <div className="flex flex-col justify-center items-center mt-5 md:mt-0">
            <label className="flex md:w-1/2 text-[#15133C] flex-col text-xl mb-4">
              <span className="font-bold">Nom :</span>
              <input
                className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
                type="text"
                name="name"
                value={dogData.name}
                onChange={onChange}
              />
            </label>
            <label className="flex md:w-1/2 flex-col text-[#15133C] text-xl mb-4">
              <span className="font-bold">Race :</span>
              <input
                className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
                type="text"
                name="breed"
                value={dogData.breed}
                onChange={onChange}
              />
            </label>
            <label className="flex md:w-1/2 mx-auto text-[#15133C] flex-col text-xl mb-4">
              <span className="font-bold">Genre :</span>
              <input
                className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
                type="text"
                name="gender"
                value={dogData.gender}
                onChange={onChange}
              />
            </label>
            <label className="flex md:w-1/2 flex-col text-[#15133C] text-xl mb-4">
              <span className="font-bold">Age :</span>
              <input
                className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
                type="text"
                name="age"
                value={dogData.age}
                onChange={onChange}
              />
            </label>
            <label className="flex md:w-1/2 mx-auto flex-col text-[#15133C] text-xl mb-4">
              <span className="font-bold">Date d'anniversaire :</span>
              <input
                className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
                type="text"
                name="birthday_date"
                value={dogData.birthday_date}
                onChange={onChange}
              />
            </label>
            <label className="flex md:w-1/2 flex-col text-[#15133C] text-xl mb-4">
              <span className="font-bold">Ville :</span>
              <input
                className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-300"
                type="text"
                name="location"
                value={dogData.location}
                onChange={onChange}
              />
            </label>
            <label className="flex md:w-1/2 flex-col text-[#15133C] mx-auto text-xl mb-4">
              <span className="font-bold">Adopté :</span>
              <input
                className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-gray-200"
                type="text"
                name="status_adopted"
                value={dogData.status_adopted}
                onChange={onChange}
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
    </div>
  );
}

export default EditDog;
