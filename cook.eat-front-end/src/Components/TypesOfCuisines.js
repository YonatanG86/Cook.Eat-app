import React from "react";
import '../styles/TypesOfCuisines.css';
import { Image } from "react-bootstrap";


const TypesOfCuisines = () => {
  return (
        <>
            <ul>
                <li>
                    <input type="checkbox" id="american" />
                    <label for="american">
                    <Image
                        width={170}
                        height={170}
                        alt="171x180"
                        src="https://media-cdn.tripadvisor.com/media/photo-s/16/5e/62/88/mushie.jpg" roundedCircle
                    />
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="cb2" />
                    <label for="cb2">
                        <img src="https://picsum.photos/seed/2/100" />
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="cb3" />
                    <label for="cb3">
                        <img src="https://picsum.photos/seed/3/100" />
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="cb4" />
                    <label for="cb4">
                        <img src="https://picsum.photos/seed/4/100" />
                    </label>
                </li>
            </ul>
        </>
    );
};

export default TypesOfCuisines;