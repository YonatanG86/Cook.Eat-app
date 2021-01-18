import React, { useState, useEffect } from "react";
import { AutoProvider } from "./Conteaxts/autoConteaxt";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "../src/Components/NavigationBar";
import HomePage from "../src/Components/HomePage";
import ProfileSettings from "../src/Components/ProfileSettings";
import AuthenticationPage from "../src/Components/AuthenticationPage";
// import Footer from '../src/Components/Footer';

import AddRecipe from "../src/Components/AddRecipe"; // Don't forget to re-organize
import Recipe from "../src/Components/Recipe"; // Don't forget to re-organize

const App = () => {
  return (
    <Router>
      <AutoProvider>
        <div className="app">
          <header className="app-header">
            <NavigationBar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/profile-settings">
                <ProfileSettings />
              </Route>
              <Route path="/recipes">
                <Recipe />
              </Route>
              {/* <Route path="/recipe/:id">
                <Recipe />
              </Route> */}
              <Route path="/something">
                <AddRecipe />
              </Route>
              <Route path="/sign-out">
                <AuthenticationPage />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
            {/* <Footer /> */}
          </header>
        </div>
      </AutoProvider>
    </Router>
  );
};

export default App;
