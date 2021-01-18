import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser !== undefined && currentUser.role === "2" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    ></Route>
  );
};

export default PrivateRouteAdmin;
