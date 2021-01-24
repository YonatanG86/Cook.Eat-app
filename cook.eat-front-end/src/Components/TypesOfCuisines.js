import React from "react";
import '../styles/TypesOfCuisines.css';


const TypesOfCuisines = () => {
  return (
        <>
            <ul>
                <li>
                    <input type="checkbox" id="cb1" />
                    <label for="cb1">
                        <img src="https://picsum.photos/seed/1/100" />
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