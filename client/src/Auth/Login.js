// import { useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from '../Auth/context/AuthProvider';

// import axios from '../api/axios';
// const LOGIN_URL = '/auth';

// const LoginBox = () => {
// 	const { setAuth } = useContext(AuthContext);
// 	const userRef = useRef();
// 	const errRef = useRef();

// 	const [user, setUser] = useState('');
// 	const [pwd, setPwd] = useState('');
// 	const [errMsg, setErrMsg] = useState('');
// 	const [success, setSuccess] = useState(false);

// 	useEffect(() => {
// 		userRef.current.focus();
// 	}, []);

// 	useEffect(() => {
// 		setErrMsg('');
// 	}, [user, pwd]);

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();

// 		try {
// 			const response = await axios.post(
// 				LOGIN_URL,
// 				JSON.stringify({ user, pwd }),
// 				{
// 					headers: { 'Content-Type': 'application/json' },
// 					withCredentials: true,
// 				}
// 			);

// 			const accessToken = response?.data?.accessToken;
// 			const roles = response?.data?.roles;
// 			setAuth({ user, pwd, roles, accessToken });
// 			setUser('');
// 			setPwd('');
// 			setSuccess(true);
// 		} catch (err) {
// 			if (!err?.response) {
// 				setErrMsg('No Server Response');
// 			} else if (err.response?.status === 400) {
// 				setErrMsg('Missing Username or Password');
// 			} else if (err.response?.status === 401) {
// 				setErrMsg('Unauthorized');
// 			} else {
// 				setErrMsg('LoginBox Failed');
// 			}
// 			errRef.current.focus();
// 		}
// 	};

// 	return (
// 		<>
// 			{success ? (
// 				<section>
// 					<h1>You are logged in!</h1>
// 					<br />
// 					<p>{/* <a href="#">Go to Home</a> */}</p>
// 				</section>
// 			) : (
// 				<section>
// 					<p
// 						ref={errRef}
// 						className={errMsg ? 'errmsg' : 'offscreen'}
// 						aria-live="assertive"
// 					>
// 						{errMsg}
// 					</p>
// 					<h1>Sign In</h1>
// 					<form onSubmit={handleSubmit}>
// 						<label htmlFor="username">Username:</label>
// 						<input
// 							type="text"
// 							id="username"
// 							ref={userRef}
// 							autoComplete="off"
// 							onChange={(e) => setUser(e.target.value)}
// 							value={user}
// 							required
// 						/>

// 						<label htmlFor="password">Password:</label>
// 						<input
// 							type="password"
// 							id="password"
// 							onChange={(e) => setPwd(e.target.value)}
// 							value={pwd}
// 							required
// 						/>
// 						<button>Sign In</button>
// 					</form>
// 					<p>
// 						Need an Account?
// 						<br />
// 						<span className="line">
// 							<a href="/">Sign Up</a>
// 						</span>
// 					</p>
// 				</section>
// 			)}
// 		</>
// 	);
// };

// export default LoginBox;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:5000/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username,
					password,
				}),
				// body: JSON.stringify(data)
			});
			const data = await response.json();
			if (response.status === 200) {
				localStorage.setItem('authUser', JSON.stringify(data?.token));
				localStorage.setItem('authPerson', JSON.stringify(data?.data?.role));
				localStorage.setItem('authFullName', JSON.stringify(data?.data?.fullname));
				setTimeout(() => {
					navigate('/dashboard');
				}, [500]);
			} else {
				alert('error found')
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(()=>{
		if(!!localStorage.getItem('authUser')){
			navigate('/dashboard');
		}
	}, [])
	return (
		<>
		<div className="login">
			<form onSubmit={(e) => handleSubmit(e)}>
				<h1 >LoginBox</h1>
				<input
					type="text"
					placeholder="Enter your username"
					name="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<input
					type="password"
					placeholder="Enter your password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button type="submit">Submit</button>
			</form>
		</div>
			
		</>
	)
};

export default Login;