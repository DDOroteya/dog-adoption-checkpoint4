/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const DogContext = createContext();

export default DogContext;

export function DogContextProvider({ children }) {
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  return (
    <DogContext.Provider
      value={{ city, setCity, gender, setGender, age, setAge }}
    >
      {children}
    </DogContext.Provider>
  );
}

DogContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useDogContext = () => useContext(DogContext);
