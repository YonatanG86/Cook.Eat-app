import React, { useState, useEffect } from 'react';
import '../styles/PPTypesOfDiets.css';
import { Image, Carousel } from 'react-bootstrap';
import GlutenFree from '../img/special-diets/gluten-free.png';
import Halal from '../img/special-diets/halal.png';
import Keto from '../img/special-diets/keto.png';
import Kosher from '../img/special-diets/kosher.png';
import Paleo from '../img/special-diets/paleo.png';
import Pescaterian from '../img/special-diets/pescaterian.png';
import Vegeterian from '../img/special-diets/vegeterian.png';
import Vegan from '../img/special-diets/vegan.png';

const PPTypesOfDiets = ({ setFormInfo, edit, formInfo }) => {
	const [specialDiet, setSpecialDiets] = useState({
		glutenFree: formInfo.specialDiet.glutenFree,
		halal: formInfo.specialDiet.halal,
		keto: formInfo.specialDiet.keto,
		kosher: formInfo.specialDiet.kosher,
		paleo: formInfo.specialDiet.paleo,
		pescaterian: formInfo.specialDiet.pescaterian,
		vegeterian: formInfo.specialDiet.vegeterian,
		vegan: formInfo.specialDiet.vegan,
	});

	useEffect(() => {
		setFormInfo((pre) => ({ ...pre, specialDiet }));
	}, [specialDiet]);
	return (
		<>
			<div className='types-of-diets pl-5'>
				<ul className='types-of-diets-list pl-5'>
					<li>
						<input
							disabled={edit}
							type='checkbox'
							id='cb31'
							name='glutenFree'
							checked={formInfo.specialDiet.glutenFree}
							onChange={(e) =>
								setSpecialDiets((pre) => ({
									...pre,
									[e.target.name]: !specialDiet[e.target.name],
								}))
							}
						/>
						<label for='cb31'>
							<div className='diet-types-container'>
								<Image src={GlutenFree} roundedCircle />
								<span>GlutenFree</span>
							</div>
						</label>
					</li>
					<li>
						<input
							disabled={edit}
							type='checkbox'
							id='cb32'
							name='halal'
							checked={formInfo.specialDiet.halal}
							onChange={(e) =>
								setSpecialDiets((pre) => ({
									...pre,
									[e.target.name]: !specialDiet[e.target.name],
								}))
							}
							diet
						/>
						<label for='cb32'>
							<div className='diet-types-container'>
								<Image src={Halal} roundedCircle />
								<span>Halal</span>
							</div>
						</label>
					</li>
					<li>
						<input
							disabled={edit}
							type='checkbox'
							id='cb33'
							name='keto'
							checked={formInfo.specialDiet.keto}
							onChange={(e) =>
								setSpecialDiets((pre) => ({
									...pre,
									[e.target.name]: !specialDiet[e.target.name],
								}))
							}
						/>
						<label for='cb33'>
							<div className='diet-types-container'>
								<Image src={Keto} roundedCircle />
								<span>Keto</span>
							</div>
						</label>
					</li>
					<li>
						<input
							disabled={edit}
							type='checkbox'
							id='cb34'
							name='Kosher'
							checked={formInfo.specialDiet.Kosher}
							onChange={(e) =>
								setSpecialDiets((pre) => ({
									...pre,
									[e.target.name]: !specialDiet[e.target.name],
								}))
							}
						/>
						<label for='cb34'>
							<div className='diet-types-container'>
								<Image src={Kosher} roundedCircle />
								<span>Kosher</span>
							</div>
						</label>
					</li>
					<li>
						<input
							disabled={edit}
							type='checkbox'
							id='cb35'
							name='paleo'
							checked={formInfo.specialDiet.paleo}
							onChange={(e) =>
								setSpecialDiets((pre) => ({
									...pre,
									[e.target.name]: !specialDiet[e.target.name],
								}))
							}
						/>
						<label for='cb35'>
							<div className='diet-types-container'>
								<Image src={Paleo} roundedCircle />
								<span>Paleo</span>
							</div>
						</label>
					</li>
					<li>
						<input
							disabled={edit}
							type='checkbox'
							id='cb36'
							name='pescaterian'
							checked={formInfo.specialDiet.pescaterian}
							onChange={(e) =>
								setSpecialDiets((pre) => ({
									...pre,
									[e.target.name]: !specialDiet[e.target.name],
								}))
							}
						/>
						<label for='cb36'>
							<div className='diet-types-container'>
								<Image src={Pescaterian} roundedCircle />
								<span>Pescaterian</span>
							</div>
						</label>
					</li>
					<li>
						<input
							disabled={edit}
							type='checkbox'
							id='cb37'
							name='vegeterian'
							checked={formInfo.specialDiet.vegeterian}
							onChange={(e) =>
								setSpecialDiets((pre) => ({
									...pre,
									[e.target.name]: !specialDiet[e.target.name],
								}))
							}
						/>
						<label for='cb37'>
							<div className='diet-types-container'>
								<Image src={Vegeterian} roundedCircle />
								<span>Vegeterian</span>
							</div>
						</label>
					</li>
					<li>
						<input
							disabled={edit}
							type='checkbox'
							id='cb38'
							name='vegan'
							checked={formInfo.specialDiet.vegan}
							onChange={(e) =>
								setSpecialDiets((pre) => ({
									...pre,
									[e.target.name]: !specialDiet[e.target.name],
								}))
							}
						/>
						<label for='cb38'>
							<div className='diet-types-container'>
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

export default PPTypesOfDiets;
