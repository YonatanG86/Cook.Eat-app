import React, { useState, useEffect } from 'react';
import { AutoProvider } from './Conteaxts/autoConteaxt';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from '../src/Components/NavigationBar';
import HomePage from '../src/Components/HomePage';
import ProfileSettings from '../src/Components/ProfileSettings';
import AuthenticationPage from '../src/Components/AuthenticationPage';
import MultiFormSignUp from '../src/Components/MultiFormSignUp';
import LoginModal from '../src/Components/LoginModal';
// import Footer from '../src/Components/Footer';
import AddRecipe from '../src/Components/AddRecipe'; // Don't forget to re-organize
import Recipe from '../src/Components/Recipe'; // Don't forget to re-organize
// import Recipe from "../src/Components/Recipe"; // This is recipes by ID
import MyRecipes from '../src/Components/MyRecipes';
import SavedRecipes from '../src/Components/SavedRecipes';
import RecipePage from './Components/RecipePage';
// import Footer from '../src/Components/Footer'; // Need to implement

const App = () => {
	return (
		<Router>
			<AutoProvider>
				<div className='app'>
					<header className='app-header'>
						<NavigationBar />
						<Switch>
							<Route exact path='/home'>
								<HomePage />
							</Route>
							<Route path='/recipe/:id'>
								<RecipePage />
							</Route>
							<Route path='/my-recipes'>
								<MyRecipes />
							</Route>
							<Route path='/recipes'>
								<Recipe />
							</Route>
							<Route path='/saved-recipes'>
								<SavedRecipes />
							</Route>
							<Route path='/add-recipe'>
								<AddRecipe />
							</Route>
							<Route path='/profile-settings'>
								<ProfileSettings />
							</Route>
							<Route path='/sign-out'>
								<AuthenticationPage />
							</Route>
							<Route path='/sign-up'>
								<MultiFormSignUp />
							</Route>
							<Route path='/login'>
								<LoginModal />
							</Route>
							<Route exact path='/'>
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
