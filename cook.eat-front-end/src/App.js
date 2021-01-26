import React, { useState, useEffect } from 'react';
import { AutoProvider } from './Conteaxts/autoConteaxt';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import HomePage from './Components/HomePage';
import ProfileSettings from './Components/ProfileSettings';
<<<<<<< HEAD
=======
import SignUpModalNew from './Components/SignUpModalNew';
>>>>>>> 25ca1a9634eabcf93d71146d385fc8f557f7fd95
import LoginModal from './Components/LoginModal';

import SignUpModal from './Components/SignUpModal';
// import CarouselSignUp from './Components/CarouselSignUp';

import AddRecipe from './Components/AddRecipe';
import Recipe from './Components/Recipe';
import MyRecipes from './Components/MyRecipes';
import SavedRecipes from './Components/SavedRecipes';
import RecipePage from './Components/RecipePage';
// import Footer from './Components/Footer'; // Need to implement

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
								<HomePage />
							</Route>
							<Route path='/sign-up'>
<<<<<<< HEAD
								{/* <CarouselSignUp /> */}
								<SignUpModal />
=======
								<SignUpModalNew />
								{/* <SignUpModal /> */}
>>>>>>> 25ca1a9634eabcf93d71146d385fc8f557f7fd95
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
