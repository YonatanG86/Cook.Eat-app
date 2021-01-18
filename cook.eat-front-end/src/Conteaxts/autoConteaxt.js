import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AutoProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const baseUrl = "http://localhost:3000/";

  //signUp
  const signupUser = async (formInfo) => {
    //Todo: Submitting the form to a server
    try {
      console.log(formInfo);
    } catch (error) {
      return error.response.data;
    }
  };
  //login

  const hendaleLogin = async (formInfo) => {
    console.log(formInfo);
    //Todo: Submitting the form to a server
  };

  //Logout

  const logOut = () => {
    localStorage.removeItem("token");
    setCurrentUser();
    history.push("/");
  };

  const value = {
    currentUser,
    signupUser,
    hendaleLogin,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
