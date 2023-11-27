import { Button, Input } from "@mui/joy";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Compoments/Header/Header";

const Register = () => {
	const navigate = useNavigate();
	const [fullname, setFullname] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [gender, setGender] = useState('');
	const [location, setLocation] = useState('');
	const [password, setPassword] = useState('');
	// const [role, setRole] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:5000/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					fullname,
					username,
					email,
					phone,
					gender,
					location,
					password
				}),
				// body: JSON.stringify(data)
			});
			const data = await response.json();
			console.log('data', data);
			if (response.status === 201) {
				alert('Registered successfully')
				navigate('/login');
			} else {
				alert('error found')
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Header />

			<div className="register" >
				<div className="registerPage">
					<section className="container">
						<header>Registration Form</header>
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className="input-box">
								<label className="label" >Full Name</label>
								<Input
									size="sm"
									type="text"
									placeholder="Enter your Fullname"
									name="fullname"
									value={fullname}
									onChange={(e) => setFullname(e.target.value)}
								/>
							</div>
							<div className="input-box">
								<label className="label">UserName</label>
								<Input
									size="sm"
									type="text"
									placeholder="Enter your Username"
									name="username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className="input-box">
								<label className="label">Email Address</label>
								<Input
									size="sm"
									type="email"
									placeholder="Enter your Email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="input-box">
								<label className="label">Contact Details </label>
								<Input
									size="sm"
									type="tel"
									placeholder="Enter your Phone"
									name="phone"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
							<div className="input-box">
								<label className="label">Gender</label>
								<Input
									size="sm"
									type="text"
									placeholder="Enter your Gender"
									name="gender"
									value={gender}
									onChange={(e) => setGender(e.target.value)}
								/>
							</div>
							<div className="input-box">
								<label className="label">Location</label>
								<Input
									size="sm"
									type="text"
									placeholder="Enter your Location"
									name="location"
									value={location}
									onChange={(e) => setLocation(e.target.value)}
								/>
							</div>
							<div className="input-box">
								<label className="label">Password</label>
								<Input
									size="sm"
									type="password"
									placeholder=""
									name="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>


							<Button type="submit">Submit</Button>
						</form>
					</section>

				</div>












			</div >
		</>
	)
};

export default Register;





