import React, { useState, useEffect } from 'react';
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

const specialDietData = [
	{
		name: 'glutenFree',
		src: GlutenFree,
		span: 'Gluten-Free',
	},
	{
		name: 'halal',
		src: Halal,
		span: 'Halal',
	},
	{
		name: 'keto',
		src: Keto,
		span: 'Keto',
	},
	{
		name: 'aleo',
		src: Paleo,
		span: 'Paleo',
	},
	{
		name: 'kosher',
		src: Kosher,
		span: 'Kosher',
	},
	{
		name: 'pescaterian',
		src: Pescaterian,
		span: 'Pescaterian',
	},
	{
		name: 'vegeterian',
		src: Vegeterian,
		span: 'Vegeterian',
	},
	{
		name: 'vegan',
		src: Vegan,
		span: 'Vegan',
	},
];

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

	useEffect(() => {
		setCarouselData((previous) => ({ ...previous, specialDiet }));
	}, [specialDiet]);

	return (
		<>
			<div className='special-diets'>
				<div className='special-diets-list row p-5 w-75 justify-content-center'>
					{specialDietData.map((diet) => {
						return (
							<div>
								<input
									type='checkbox'
									id={diet.name}
									name={diet.name}
									onChange={(e) =>
										setSpecialDiet((pre) => ({
											...pre,
											[e.target.name]: !specialDiet[e.target.name],
										}))
									}
								/>
								<label for={diet.name}>
									<div className='special-diets-container'>
										<Image src={diet.src} roundedCircle />
										<span>{diet.span}</span>
									</div>
								</label>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default CarouselSpecialDiets;
