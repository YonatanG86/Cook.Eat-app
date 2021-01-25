import React, { useState } from "react";
import MultiFormSignUp from '../Components/MultiFormSignUp';
import '../styles/RegistrationCarousel.css';
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
            interval={null} 
            activeIndex={index} 
            nextIcon={directionButtons("Next")}
            prevIcon={directionButtons("Previous")}
            onSelect={handleSelect}>
        
            <Carousel.Item>
              <p>PERSONALIZE YOUR EXPERIENCE</p>
              <h3>What are your favorite cuisines?</h3>
              <Carousel.Caption>
                {/* <h3></h3>
                <p></p> */}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <p>PERSONALIZE YOUR EXPERIENCE</p>
              <h3>Do you follow any of these diets?</h3>
              <Carousel.Caption>
                {/* <h3></h3>
                <p></p> */}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <p>PERSONALIZE YOUR EXPERIENCE</p>
              <h3>How would you describe your cooking skills?</h3>
              <Carousel.Caption>
                {/* <h3></h3>
                <p></p> */}
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <h3>Create your account by filling out the information below</h3>
            <Carousel.Caption>
              <MultiFormSignUp />
            </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </>
    )
}

export default RegistrationCarousel;