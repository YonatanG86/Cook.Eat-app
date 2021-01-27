import React, { useState, useEffect } from 'react';
import '../styles/CarouselCulinaryLevel.css';
import { Image } from 'react-bootstrap';
import Beginner from '../img/culinary-level/beginner.jpeg';
import Intermediate from '../img/culinary-level/intermediate.jpg';
import Advanced from '../img/culinary-level/advanced.jpg';

const CarouselCulinaryLevel = ({ setCarouselData }) => {
	const [culinaryLevel, setCulinaryLevel] = useState({ culinaryLevel: '' });

	useEffect(() => {
		setCarouselData((pre) => ({ ...pre, culinaryLevel }));
	}, [culinaryLevel]);
	return (
		<div className='culinary-level-carousel-wrapper'>
			<div className='culinary-level-carousel'>
				<ul className='culinary-level-list'>
					<li>
						<input
							type='radio'
							id='cl1'
							name='radio'
							value='beginner'
							onChange={() => setCulinaryLevel('Beginner')}
						/>
						<label htmlFor='cl1'>
							<div className='culinary-level-container'>
								<Image src={Beginner} roundedCircle />
								<span>Beginner</span>
							</div>
						</label>
					</li>
					<li>
						<input
							type='radio'
							id='cl2'
							name='radio'
							value='intermediate'
							onChange={() => setCulinaryLevel('Intermediate')}
						/>
						<label htmlFor='cl2'>
							<div className='culinary-level-container'>
								<Image src={Intermediate} roundedCircle />
								<span>Intermediate</span>
							</div>
						</label>
					</li>
					<li>
						<input
							type='radio'
							id='cl3'
							name='radio'
							value='advanced'
							onChange={() => setCulinaryLevel('Advanced')}
						/>
						<label htmlFor='cl3'>
							<div className='culinary-level-container'>
								<Image src={Advanced} roundedCircle />
								<span>Advanced</span>
							</div>
						</label>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default CarouselCulinaryLevel;
