import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const userId = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={(props) => {
        return userId ? <Component {...props} /> : <Redirect to="/" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
