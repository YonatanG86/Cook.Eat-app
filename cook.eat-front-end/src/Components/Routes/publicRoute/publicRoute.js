import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser !== undefined && currentUser.role === "1" ? (
          <Redirect to="deshborad" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
