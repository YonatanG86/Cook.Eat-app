import React, { useState, useEffect } from 'react';
import PPTypesOfCuisines from './PPTypesOfCuisines';
import PPCulinaryLevel from './PPCulinaryLevel';
import PPTypesOfDiets from './PPTypesOfDiets';
import '../styles/ProfileSettings.css';
import { Col, Row, Form, Button, Image, Carousel } from 'react-bootstrap';
import { CountryDropdown } from 'react-country-region-selector';
import GlutenFree from '../img/special-diets/gluten-free.png';
import Halal from '../img/special-diets/halal.png';
import Keto from '../img/special-diets/keto.png';
import Kosher from '../img/special-diets/kosher.png';
import Paleo from '../img/special-diets/paleo.png';
import Pescaterian from '../img/special-diets/pescaterian.png';
import Vegeterian from '../img/special-diets/vegeterian.png';
import Vegan from '../img/special-diets/vegan.png';
import { useAuth } from '../Conteaxts/autoConteaxt';

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
const specialDiets = {
	glutenFree: false,
	halal: false,
	keto: false,
	kosher: false,
	paleo: false,
	pescaterian: false,
	vegeterian: false,
	vegan: false,
};
const formFields = {
	userName: '',
	birthDate: '',
	email: '',
	password: '',
	profileImage: '',
	cloudinaryId: '',
	country: '',
	culinaryLevel: '',
	specialDiet: specialDiets,
	culinaryType: {
		american: false,
		brazilian: false,
		caribbean: false,
		chinese: false,
		english: false,
		ethiopian: false,
		french: false,
		filipino: false,
		georgian: false,
		german: false,
		greek: false,
		indian: false,
		indonesian: false,
		italian: false,
		jamaican: false,
		japanese: false,
		jewish: false,
		korean: false,
		mexican: false,
		polish: false,
		persian: false,
		portuguese: false,
		russian: false,
		spanish: false,
		thai: false,
		vietnamese: false,
	},
};
const ProfileSettings = () => {
	const [edit, setEdit] = useState(true);
	const [formInfo, setFormInfo] = useState(formFields);
	const [specialDietField, setSpecialDietField] = useState(specialDiets);
	const [carouselIndex, setCarouselIndex] = useState(0);
	const { userInfo, updateUserInfo } = useAuth();
	let id;
	// const [isChecked, setIsChecked] = useState(false);

	const handleCarouselSelect = (selectedIndex, event) => {
		setCarouselIndex(selectedIndex);
	};
	const editProfile = () => {
		setEdit(!edit);
	};
	const handleChangeSpecialDiet = (e) => {
		console.log();
		setSpecialDietField({
			...specialDietField,
			[e.target.id]: e.target.value,
		});
		setFormInfo({
			...formInfo,
			specialDietField,
		});
		console.log('formInfo', formInfo);
	};
	const handleChange = (e) => {
		console.log([e.target.name], ':', e.target.value);
		setFormInfo({
			...formInfo,
			[e.target.name]: e.target.value,
		});
	};

	const loadUserInfo = async () => {
		id = localStorage.getItem('user');
		const userFromDB = await userInfo(id);
		setFormInfo(userFromDB);
	};

	const submitNewUserInfo = (e) => {
		e.preventDefault();
		id = localStorage.getItem('user');
		updateUserInfo(id, formInfo);
		setEdit(true);
	};

	useEffect(() => {
		loadUserInfo();
	}, []);

	return (
		<div className='profile-settings-pagewrapper'>
			<h4>Profile Settings</h4>
			<Form className='profile-settings-form' onSubmit={submitNewUserInfo}>
				<h6>Edit Profile Settings</h6>
				<div className='button-container'>
					<Button
						className='save-profile-button'
						controlId='save-profile-button'
						variant='primary'
						onClick={editProfile}
					>
						{edit ? 'Edit' : 'Cancel'}
					</Button>
					{!edit && (
						<Button
							style={{ display: { edit } ? 'block' : null }}
							className='save-profile-button'
							controlId='save-profile-button'
							variant='primary'
							type='submit'
						>
							Save Changes
						</Button>
					)}
				</div>
				<Form.Row>
					<Form.Group as={Col} controlId='formGridUsername'>
						<Form.Label>Username</Form.Label>
						<Form.Control
							disabled={edit}
							className='form-input disabled_fs'
							name='userName'
							type='name'
							onChange={handleChange}
							placeholder={formInfo.userName}
						/>
					</Form.Group>
					<Form.Group as={Col} controlId='dob'>
						<Form.Label>Birth Date</Form.Label>
						<Form.Control
							type='date'
							name='birthDate'
							onChange={handleChange}
							disabled={edit}
							placeholder={formInfo.birthDate}
						/>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} controlId='formGridEmail'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							className='form-input'
							name='email'
							type='email'
							placeholder={formInfo.email}
							onChange={handleChange}
							disabled={edit}
						/>
					</Form.Group>
					<Form.Group as={Col} controlId='formGridPassword'>
						{/* <Form.Label>Password</Form.Label>
						<Form.Control
							className='form-input'
							name='password'
							type='password'
							placeholder='Password'
							onChange={handleChange}
							disabled={edit}
							onChange
						/> */}
					</Form.Group>
				</Form.Row>

				{/* <div className='country-select-container'>
					<CountryDropdown disabled={edit} onChange={handleChange} name='country'></CountryDropdown>
				</div> */}

				<div className='edit-avatar-container'>
					<div className='avatar'>
						<Image
							width={185}
							height={180}
							alt='171x180'
							src='https://i2.wp.com/www.eatthis.com/wp-content/uploads/2020/05/chef-cooking.jpg?fit=1200%2C879&ssl=1'
							roundedCircle
						/>
					</div>
					<div className='file-input-edit-avatar'>
						{!edit && (
							<Form.File id='formcheck-api-regular'>
								<Form.File.Label>Edit Avatar</Form.File.Label>
								<Form.File.Input />
							</Form.File>
						)}
					</div>
				</div>

				<h6 id='culinary-preferences'>Edit Culinary Preferences</h6>
				<div className='preferences-container'>
					<div className='diets-container'>
						<fieldset>
							<Form.Group as={Row}>
								<Form.Label as='legend' column sm={5}>
									Special Diets
									<PPTypesOfDiets setFormInfo={setFormInfo} edit={edit} formInfo={formInfo} />
								</Form.Label>
								<Form.Check type='checkbox' label={<div>test</div>} />
								<Col sm={7} id='diets-checkbox-column'>
									<Form.Check
										disabled={edit}
										type='checkbox'
										name='typeOfDiet'
										id='glutenFree'
										onChange={handleChange}
										// checked={formInfo.specialDiet.glutenFree}
										label={
											<div>
												Gluten-Free
												<img alt='logo' src={GlutenFree} className='diet-images' />
											</div>
										}
									/>
									<Form.Check
										disabled={edit}
										type='checkbox'
										name='typeOfDiet'
										id='halal'
										onChange={handleChange}
										checked={formInfo.specialDiet.halal}
										label={
											<div>
												Halal
												<img alt='logo' src={Halal} className='diet-images' />
											</div>
										}
									/>
									<Form.Check
										disabled={edit}
										type='checkbox'
										name='typeOfDiet'
										id='keto'
										onChange={handleChange}
										checked={formInfo.specialDiet.keto}
										label={
											<div>
												Keto
												<img alt='logo' src={Keto} className='diet-images' />
											</div>
										}
									/>
									<Form.Check
										disabled={edit}
										type='checkbox'
										name='typeOfDiet'
										id='Kosher'
										onChange={handleChange}
										checked={formInfo.specialDiet.kosher}
										label={
											<div>
												Kosher
												<img alt='logo' src={Kosher} className='diet-images' />
											</div>
										}
									/>
									<Form.Check
										disabled={edit}
										type='checkbox'
										name='typeOfDiet'
										id='paleo'
										onChange={handleChange}
										checked={formInfo.specialDiet.paleo}
										label={
											<div>
												Paleo
												<img alt='logo' src={Paleo} className='diet-images' />
											</div>
										}
									/>
									<Form.Check
										disabled={edit}
										type='checkbox'
										name='typeOfDiet'
										id='pescaterian'
										onChange={handleChange}
										checked={formInfo.specialDiet.pescaterian}
										label={
											<div>
												Pescaterian
												<img alt='logo' src={Pescaterian} className='diet-images' />
											</div>
										}
									/>
									<Form.Check
										disabled={edit}
										type='checkbox'
										name='typeOfDiet'
										id='vegeterian'
										onChange={handleChange}
										checked={formInfo.specialDiet.vegeterian}
										label={
											<div>
												Vegeterian
												<img alt='logo' src={Vegeterian} className='diet-images' />
											</div>
										}
									/>
									<Form.Check
										disabled={edit}
										type='checkbox'
										name='typeOfDiet'
										id='vegan'
										onChange={handleChange}
										checked={formInfo.specialDiet.vegan}
										label={
											<div>
												Vegan
												<img alt='logo' src={Vegan} className='diet-images' />
											</div>
										}
									/>
								</Col>
							</Form.Group>
						</fieldset>
					</div>

					<div className='culinary-level-form-container'>
						<p>Culinary Level</p>
						<PPCulinaryLevel setFormInfo={setFormInfo} edit={edit} formInfo={formInfo} />
					</div>
				</div>

				<p>Types of cuisines</p>
				<PPTypesOfCuisines setFormInfo={setFormInfo} edit={edit} formInfo={formInfo} />

				<div className='button-container'>
					{!edit && (
						<Button
							style={{ display: { edit } ? 'block' : null }}
							className='save-profile-button'
							controlId='save-profile-button'
							variant='primary'
							type='submit'
						>
							Save Changes
						</Button>
					)}
				</div>
			</Form>
		</div>
	);
};

export default ProfileSettings;
