import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
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

  //userActive
  const userActive = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        const tokenRes = await axios.post(`${baseUrl}/user/tokenValid`, null, {
          headers: {
            authorization: "Bearer " + token,
          },
        });

        if (tokenRes.data) {
          const user = jwt(token);
          setCurrentUser(user);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    userActive();
    return () => userActive();
  }, []);

  //signUp
  const signupUser = async (data) => {
    try {
      const res = await axios.post(`${baseUrl}/signup`, data);
      localStorage.setItem("token", JSON.stringify(res.data));
      const user = jwt(res.data);
      setCurrentUser(user);
      return { error: 0, dataSevere: user };
    } catch (error) {
      return { error: 1, dataSevere: error.response.data };
    }
  };
  //login
  const hendaleLogin = async (formInfo) => {
    const token = JSON.parse(localStorage.getItem("token"));
    let config = {
      headers: {
        authorization: "Bearer " + token,
      },
    };
    try {
      const res = await axios.post(`${baseUrl}/login`, formInfo, config);
      if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data));
        const user = jwt(res.data);
        setCurrentUser(user);
        return user;
      }
    } catch (error) {
      return false;
    }
  };

  //Logout

  const logOut = () => {
    // Cookies.remove("token");
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

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
