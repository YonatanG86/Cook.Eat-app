import React, { useState } from "react";
import '../styles/CarouselSpecialDiets.css';
import { Image, Carousel } from "react-bootstrap";
import GlutenFree from "../img/special-diets/gluten-free.png";
import Halal from '../img/special-diets/halal.png';
import Keto from "../img/special-diets/keto.png";
import Kosher from '../img/special-diets/kosher.png';
import Paleo from '../img/special-diets/paleo.png';
import Pescaterian from '../img/special-diets/pescaterian.png';
import Vegeterian from '../img/special-diets/vegeterian.png';
import Vegan from '../img/special-diets/vegan.png';


const CarouselSpecialDiets = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    const handleCarouseItemSelect = (selectedIndex, event) => {
        setCarouselIndex(selectedIndex);
    };

    return (
        <>
            <Carousel
            className="special-diets-carousel"
            interval={null} 
            activeIndex={carouselIndex} 
            onSelect={handleCarouseItemSelect}>

                <Carousel.Item>
                    <div className="special-diets">
                        <ul className="special-diets-list">
                            <li>
                                <input type="checkbox" id="special-diet1" />
                                <label for="special-diet1">
                                    <div className="special-diets-container">
                                        <Image src={GlutenFree} roundedCircle/>
                                        <span>Gluten-Free</span>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="special-diet2" />
                                <label for="special-diet2">
                                    <div className="special-diets-container">
                                        <Image src={Halal} roundedCircle/>
                                        <span>Halal</span>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="special-diet3" />
                                <label for="special-diet3">
                                    <div className="special-diets-container">
                                        <Image src={Keto} roundedCircle/>
                                        <span>Keto</span>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="special-diet4" />
                                <label for="special-diet4">
                                    <div className="special-diets-container">
                                        <Image src={Kosher} roundedCircle/>
                                        <span>Kosher</span>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="special-diets">
                        <ul className="special-diets-list">
                            <li>
                                <input type="checkbox" id="special-diet5" />
                                <label for="special-diet5">
                                    <div className="special-diets-container">
                                        <Image src={Paleo} roundedCircle/>
                                        <span>Paleo</span>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="special-diet6" />
                                <label for="special-diet6">
                                    <div className="special-diets-container">
                                        <Image src={Pescaterian} roundedCircle/>
                                        <span>Pescaterian</span>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="special-diet7" />
                                <label for="special-diet7">
                                    <div className="special-diets-container">
                                        <Image src={Vegeterian} roundedCircle/>
                                        <span>Vegeterian</span>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="special-diet8" />
                                <label for="special-diet8">
                                    <div className="special-diets-container">
                                        <Image src={Vegan} roundedCircle/>
                                        <span>Vegan</span>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                </Carousel.Item>
        </Carousel>
        </>
    )
}

export default CarouselSpecialDiets;