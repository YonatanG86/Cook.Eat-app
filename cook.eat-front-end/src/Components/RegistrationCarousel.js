import React, { useState } from "react";
import '../styles/RegistrationCarousel.css';
import CarouselTypesOfCuisines from '../Components/CarouselTypesOfCuisines';
import CarouselSpecialDiets from '../Components/CarouselSpecialDiets';
import CarouselCulinaryLevel from '../Components/CarouselCulinaryLevel';
import CarouselSignUp from '../Components/CarouselSignUp';
import { Carousel } from "react-bootstrap";

const RegistrationCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, event) => {
      setIndex(selectedIndex);
  };

  const directionButtons = (direction) => {
    return (
      <span
        aria-hidden="true"
        className={direction === "Next" ? "button-next" : "button-prev"}>
        {direction}
      </span>
    );
  };
    
    return (
        <>
          <Carousel
            className="registration-carousel"
            interval={null} 
            activeIndex={index} 
            nextIcon={directionButtons("Next")}
            prevIcon={directionButtons("Previous")}
            onSelect={handleSelect}
            prevLabel={index === 0 ? null : "Previous"}
            nextLabel={index === 3 ? null : "Next"}>
        
            <Carousel.Item>
              <p className="personalized-experience">PERSONALIZE YOUR EXPERIENCE</p>
              <h3>What are your favorite cuisines?</h3>
              <CarouselTypesOfCuisines />
            </Carousel.Item>

            <Carousel.Item>
              <p className="personalized-experience">PERSONALIZE YOUR EXPERIENCE</p>
              <h3>Do you follow any of these diets?</h3>
              <CarouselSpecialDiets />
            </Carousel.Item>

            <Carousel.Item>
              <p className="personalized-experience">PERSONALIZE YOUR EXPERIENCE</p>
              <h3>How would you describe your cooking skills?</h3>
              <CarouselCulinaryLevel />
            </Carousel.Item>
            
            <Carousel.Item>
              <h3>Create your account by filling out the information below</h3>
              <CarouselSignUp />
            </Carousel.Item>
          </Carousel>
        </>
    )
}

export default RegistrationCarousel;