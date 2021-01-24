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
                        width={150}
                        height={150}
                        alt="171x180"
                        src="https://i.insider.com/53b579166da811b136c10d7b?width=1100&format=jpeg&auto=webp" roundedCircle
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