import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AutoProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const baseUrl = "http://localhost:5000";

  //signUp
  const signupUser = async (formInfo) => {
    //Todo: Submitting the form to a server
    // console.log(formInfo);
    try {
      const res = await axios.post(`${baseUrl}/auth/signup`, formInfo);
      console.log(res.data.user);
      if (res.data) {
        localStorage.setItem("token", res.data);
        const user = jwt_decode(res.data).user;
        localStorage.setItem("user", user._id);
        setCurrentUser(user);
        history.push("/");
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  //login
  const hendaleLogin = async (formInfo) => {
    try {
      const res = await axios.post(`${baseUrl}/auth/login`, formInfo);
      if (res.data) {
        localStorage.setItem("token", res.data);
        const user = jwt_decode(res.data).user;
        localStorage.setItem("user", user._id);
        console.log("2", user);
        setCurrentUser(user);
        history.push("/");
      }
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    // const userst = localStorage.getItem('token');
    // console.log(jwt_decode(userst));
    // setCurrentUser(jwt_decode(userst));
  }, []);
  //Logout
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setCurrentUser();
    history.push("/");
  };

  //get user info
  const userInfo = async (uId) => {
    try {
      const res = await axios.get(`${baseUrl}/user/${uId}`);
      const data = res.data;
      return data;
    } catch (err) {
      return err.response.data;
    }
  };

  //remove user
  const removeUser = async (uId) => {
    try {
      const res = await axios.delete(`${baseUrl}/user/${uId}`);
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  };

  //get all the recipes
  const getAllRecipes = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}/user/${id}`);
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  };

  // update recipe
  const UpdateRecipe = async (id, formInfo) => {
    try {
      const res = await axios.put(`${baseUrl}/user/${id}`, formInfo);
      if (res.data) {
        return res.data;
      }
    } catch (err) {
      return err.response.data;
    }
  };

  //get recipe by Id
  const getRecipe = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}/recipes/${id}`);
      const data = res.data;
      return data;
    } catch (err) {
      return err.response.data;
    }
  };

  //add recipe
  const addRecipe = async (content) => {
    try {
      const userId = localStorage.getItem("user");
      const res = await axios.post(`${baseUrl}/recipes/`, content);
      if (res.data) {
        const recipeId = res.data._id;
        await axios.put(
          `${baseUrl}/users/myRecipes/${userId}/${recipeId}`,
          recipeId
        );

        return res.data;
      }
    } catch (err) {
      return err.response.data;
    }
  };

  // remove recipe
  const removeRecipe = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/recipes/${id}`);
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  };

  // add or remove like to recipe
  const addOrRemoveLike = async (id, likes) => {
    try {
      const res = await axios.put(`${baseUrl}/recipes/likes/${id}`, likes);
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  };

  const value = {
    currentUser,
    signupUser,
    hendaleLogin,
    logOut,
    userInfo,
    removeUser,
    UpdateRecipe,
    getAllRecipes,
    getRecipe,
    addRecipe,
    removeRecipe,
    addOrRemoveLike,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
