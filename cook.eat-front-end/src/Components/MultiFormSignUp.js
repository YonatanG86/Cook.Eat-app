import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Conteaxts/autoConteaxt';
import { Button, Form, Col } from 'react-bootstrap';

const formFields = {
	userName: '',
	email: '',
	password: '',
	repatePass: '',
};

const MultiFormSignUp = () => {
	const { register, handleSubmit, errors, watch } = useForm();
	const [formInfo, setFormInfo] = useState(formFields);
	const [file, setFile] = useState();
	const [userImage, setUserImage] = useState();
	const { signupUser } = useAuth();
	const password = useRef({});
	password.current = watch('password');

	const types = ['image/png', 'image/jpeg', 'image/jpg'];

	const handleChange = (e) => {
		setFormInfo({
			...formInfo,
			[e.target.name]: e.target.value,
		});
	};

	const handleFileUpload = (e) => {
		const file = e.target.files[0];
		if (file && types.includes(file.type)) {
			setFile(file);
			let reader = new FileReader();
			reader.onload = (e) => {
				setUserImage(e.target.result);
			};
			reader.readAsDataURL(e.target.files[0]);
		} else {
			alert('Please select an image file (png, jpg,jpeg)!');
		}
	};

	const onSubmit = (data, e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append('data', JSON.stringify(formInfo));
		formData.append('petImage', file);
		signupUser(formData);
	};

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group as={Col} controlId='formGridUsername'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						name='userName'
						type='username'
						placeholder='Enter username'
						onChange={handleChange}
						minLength='2'
						maxLength='15'
						ref={register({ pattern: /^[A-Za-z\s]+$/i })}
						required
					/>
					<div className='error-box'>
						{errors.userName && errors.userName.type === 'pattern' && (
							<p className='error-field'>English letters only</p>
						)}
					</div>
					<Form.Control.Feedback type='invalid'>Username required</Form.Control.Feedback>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						name='email'
						type='email'
						placeholder='Enter email'
						onChange={handleChange}
						required
						ref={register({
							pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
						})}
					/>
					<div className='error-box'>
						{errors.email && errors.email.type === 'pattern' && (
							<p className='error-field'>Invalid email</p>
						)}
					</div>
					<Form.Control.Feedback type='invalid'>Email required</Form.Control.Feedback>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						name='password'
						type='password'
						placeholder='Password'
						onChange={handleChange}
						required
						ref={register({ pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm })}
					/>
					<Form.Control.Feedback type='invalid'>Password required</Form.Control.Feedback>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridConfirmPassword'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						name='repatePass'
						type='password'
						placeholder='Confirm Password'
						onChange={handleChange}
						required
						ref={register({
							validate: (value) => value === password.current || 'The passwords do not match',
						})}
					/>
					{errors.repatePass && <p className='error-field'>{errors.repatePass.message}</p>}
					<div className='error-box'>
						{errors.password && errors.password.type === 'pattern' && (
							<p className='error-field'>
								Password must contain : <br />
								- at least 8 characters <br />
								- must contain at least 1 uppercase letter,
								<br />
								1 lowercase letter, and 1 number
								<br />- Can contain special characters
							</p>
						)}
					</div>
					<Form.Control.Feedback type='invalid'>The password is empty or doesn't match</Form.Control.Feedback>
				</Form.Group>

				<Form.Group>
					<Form.Label>Profile Image</Form.Label>
					<Form.Control
						name='picture'
						type='file'
						placeholder='Avater'
						onChange={handleFileUpload}
						required
					/>
					<img src={userImage} style={{ maxWidth: '5rem' }} alt='profile-image' />
				</Form.Group>
				<div className='button-container'>
					<Button className='signup-btn btn-primary btn-block' type='submit'>
						Sign up
					</Button>
					<p className='disclaimer'>
						By continuing you agree to Cook.Eat's Terms of Service &amp; Privacy Policy.
					</p>
				</div>
			</Form>
		</>
	);
};

export default MultiFormSignUp;
