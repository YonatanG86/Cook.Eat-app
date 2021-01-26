import React, { useState } from 'react';
import '../styles/CarouselSpecialDiets.css';
import { Image } from 'react-bootstrap';
import GlutenFree from '../img/special-diets-carousel/gluten-free.png';
import Halal from '../img/special-diets-carousel/halal.png';
import Keto from '../img/special-diets-carousel/keto.png';
import Kosher from '../img/special-diets-carousel/kosher.png';
import Paleo from '../img/special-diets-carousel/paleo.png';
import Pescaterian from '../img/special-diets-carousel/pescaterian.png';
import Vegeterian from '../img/special-diets-carousel/vegeterian.png';
import Vegan from '../img/special-diets-carousel/vegan.png';

const CarouselSpecialDiets = ({ setCarouselData }) => {
	const [specialDiet, setSpecialDiet] = useState({
		glutenFree: false,
		halal: false,
		keto: false,
		kosher: false,
		paleo: false,
		pescaterian: false,
		vegeterian: false,
		vegan: false,
	});

	const handleChange = (event) => {
		setSpecialDiet((specialDiet) => ({ ...specialDiet, [event.target.name]: !specialDiet[event.target.name] }));
		setCarouselData((previous) => ({ ...previous, specialDiet }));
		console.log(specialDiet);
	};

	return (
		<>
			<div className='special-diets'>
				<ul className='special-diets-list'>
					<li>
						<input type='checkbox' id='special-diet1' name='glutenFree' onChange={handleChange} />
						<label for='special-diet1'>
							<div className='special-diets-container'>
								<Image src={GlutenFree} roundedCircle />
								<span>Gluten-Free</span>
							</div>
						</label>
					</li>
					<li>
						<input type='checkbox' id='special-diet2' name='halal' onChange={handleChange} />
						<label for='special-diet2'>
							<div className='special-diets-container'>
								<Image src={Halal} roundedCircle />
								<span>Halal</span>
							</div>
						</label>
					</li>
					<li>
						<input type='checkbox' id='special-diet3' name='keto' onChange={handleChange} />
						<label for='special-diet3'>
							<div className='special-diets-container'>
								<Image src={Keto} roundedCircle />
								<span>Keto</span>
							</div>
						</label>
					</li>
					<li>
						<input type='checkbox' id='special-diet4' name='kosher' onChange={handleChange} />
						<label for='special-diet4'>
							<div className='special-diets-container'>
								<Image id='kosher' src={Kosher} roundedCircle />
								<span>Kosher</span>
							</div>
						</label>
					</li>
				</ul>
			</div>

			<div className='special-diets'>
				<ul className='special-diets-list'>
					<li>
						<input type='checkbox' id='special-diet5' name='paleo' onChange={handleChange} />
						<label for='special-diet5'>
							<div className='special-diets-container'>
								<Image src={Paleo} roundedCircle />
								<span>Paleo</span>
							</div>
						</label>
					</li>
					<li>
						<input type='checkbox' id='special-diet6' name='pescaterian' onChange={handleChange} />
						<label for='special-diet6'>
							<div className='special-diets-container'>
								<Image src={Pescaterian} roundedCircle />
								<span>Pescaterian</span>
							</div>
						</label>
					</li>
					<li>
						<input type='checkbox' id='special-diet7' name='vegeterian' onChange={handleChange} />
						<label for='special-diet7'>
							<div className='special-diets-container'>
								<Image src={Vegeterian} roundedCircle />
								<span>Vegeterian</span>
							</div>
						</label>
					</li>
					<li>
						<input type='checkbox' id='special-diet8' name='vegan' onChange={handleChange} />
						<label for='special-diet8'>
							<div className='special-diets-container'>
								<Image src={Vegan} roundedCircle />
								<span>Vegan</span>
							</div>
						</label>
					</li>
				</ul>
			</div>
		</>
	);
};

export default CarouselSpecialDiets;
