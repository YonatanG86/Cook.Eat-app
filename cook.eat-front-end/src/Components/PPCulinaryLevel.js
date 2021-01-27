import React, { useState } from 'react';
import '../styles/PPCulinaryLevel.css';
import { Image } from 'react-bootstrap';
import Beginner from '../img/culinary-level/beginner.jpeg';
import Intermediate from '../img/culinary-level/intermediate.jpg';
import Advanced from '../img/culinary-level/advanced.jpg';

const PPCulinaryLevel = ({ setFormInfo, edit, formInfo }) => {
	const onChange = (e) => {
		setFormInfo((previous, current) => ({ ...current, culinaryLevel: e.target.value }));
	};

	return (
		<div className='culinary-level'>
			<ul className='culinary-level-list'>
				<li>
					<input
						type='radio'
						name='radio'
						id='cl1'
						onClick={onChange}
						disabled={edit}
						checked={formInfo.culinaryLevel == 'Beginner' ? true : false}
					/>
					<label for='cl1'>
						<div className='culinary-level-container'>
							<Image src={Beginner} roundedCircle />
							<span>Beginner</span>
						</div>
					</label>
				</li>
				<li>
					<input
						type='radio'
						name='radio'
						id='cl2'
						disabled={edit}
						checked={formInfo.culinaryLevel == 'Intermediate' ? true : false}
					/>
					<label for='cl2'>
						<div className='culinary-level-container'>
							<Image src={Intermediate} roundedCircle />
							<span>Intermediate</span>
						</div>
					</label>
				</li>
				<li>
					<input
						type='radio'
						name='radio'
						id='cl3'
						disabled={edit}
						checked={formInfo.culinaryLevel == 'Advanced' ? true : false}
					/>
					<label for='cl3'>
						<div className='culinary-level-container'>
							<Image src={Advanced} roundedCircle />
							<span>Advanced</span>
						</div>
					</label>
				</li>
			</ul>
		</div>
	);
};

export default PPCulinaryLevel;
