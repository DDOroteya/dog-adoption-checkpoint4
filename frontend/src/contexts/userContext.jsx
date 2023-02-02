/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../components/hooks/useLocalStorage";

const CurrentUserContext = createContext();

export default CurrentUserContext;

export function CurrentUserContextProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", {});
  const [token, setToken] = useLocalStorage("token", "");

  return (
    <CurrentUserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

CurrentUserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCurrentUserContext = () => useContext(CurrentUserContext);
