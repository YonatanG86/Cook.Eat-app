import React, { useState } from "react";
import Search from '../Components/Search';
import RegistrationCarousel from '../Components/RegistrationCarousel';

const HomePage = () => {
    
    return (
        <>
            <Search />
                <h1>Home Page</h1>
                <li>List of recipes or recipe cards</li>
            {/* <RegistrationCarousel /> */}
        </>
    )
}

export default HomePage;