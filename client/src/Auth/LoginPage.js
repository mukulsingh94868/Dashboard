import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import CssBaseline from '@mui/joy/CssBaseline';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Input from '@mui/joy/Input';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { CssVarsProvider } from '@mui/joy/styles';
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../Assets/GoogleIcon";
import { Login } from '../Redux/actions/AuthActions';

const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(Login({ username, password }, navigate));
		// try {
		// 	const response = await fetch('http://localhost:5000/api/auth/login', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify({
		// 			username,
		// 			password,
		// 		}),
		// 		// body: JSON.stringify(data)
		// 	});
		// 	const data = await response.json();
		// 	if (response.status === 200) {
		// 		localStorage.setItem('authUser', JSON.stringify(data?.token));
		// 		localStorage.setItem('authPerson', JSON.stringify(data?.data?.role));
		// 		localStorage.setItem('authFullName', JSON.stringify(data?.data?.fullname));
		// 		setTimeout(() => {
		// 			navigate('/dashboard');
		// 		}, [500]);
		// 	} else {
		// 		toast.error('Invalid credentials', {
		// 			duration: 3000,
		// 			position: 'top-right'
		// 		});
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// }
	};




	useEffect(() => {
		if (!!localStorage.getItem('authUser')) {
			navigate('/dashboard');
		}
	}, [navigate])
	return (
		<>
			<CssVarsProvider>
				<CssBaseline />
				<GlobalStyles
					styles={{
						':root': {
							'--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
							'--Cover-width': '50vw', // must be `vw` only
							'--Form-maxWidth': '800px',
							'--Transition-duration': '0.4s', // set to `none` to disable transition
						},
					}}
				/>
				<Box
					sx={(theme) => ({
						width:
							'clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)',
						transition: 'width var(--Transition-duration)',
						transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
						position: 'relative',
						zIndex: 1,
						display: 'flex',
						justifyContent: 'flex-end',
						backdropFilter: 'blur(12px)',
						backgroundColor: 'rgba(255 255 255 / 0.2)',
						[theme.getColorSchemeSelector('dark')]: {
							backgroundColor: 'rgba(19 19 24 / 0.4)',
						},
					})}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							minHeight: '100dvh',
							width:
								'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
							maxWidth: '100%',
							px: 2,
						}}
					>
						<Box
							component="main"
							sx={{
								my: 'auto',
								py: 2,
								pb: 5,
								display: 'flex',
								flexDirection: 'column',
								gap: 2,
								width: 400,
								maxWidth: '100%',
								mx: 'auto',
								borderRadius: 'sm',
								'& form': {
									display: 'flex',
									flexDirection: 'column',
									gap: 2,
								},
								[`& .${formLabelClasses.asterisk}`]: {
									visibility: 'hidden',
								},
							}}
						>
							<Stack gap={4} sx={{ mb: 2 }}>
								<Stack gap={1}>
									<Typography level="h3">Sign in</Typography>
									<Typography level="body-sm">
										New to company?{' '}
										<Link href="/register" level="title-sm">
											Sign up!
										</Link>
									</Typography>
								</Stack>

								<Button
									variant="soft"
									color="neutral"
									fullWidth
									startDecorator={<GoogleIcon />}
								>
									Continue with Google
								</Button>
							</Stack>
							<Divider
								sx={(theme) => ({
									[theme.getColorSchemeSelector('light')]: {
										color: { xs: '#FFF', md: 'text.tertiary' },
										'--Divider-lineColor': {
											xs: '#FFF',
											md: 'var(--joy-palette-divider)',
										},
									},
								})}
							>
								or
							</Divider>
							<Stack gap={4} sx={{ mt: 2 }}>
								<form onSubmit={(e) => handleSubmit(e)}>
									<FormControl required>
										<FormLabel>Email/Username</FormLabel>

										<Input type="text"
											placeholder="Enter your username"
											name="username"
											value={username}
											onChange={(e) => setUsername(e.target.value)} />
									</FormControl>
									<FormControl required>
										<FormLabel>Password</FormLabel>
										<Input type="password"
											placeholder="Enter your password"
											name="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)} />
									</FormControl>
									<Stack gap={4} sx={{ mt: 2 }}>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'space-between',
												alignItems: 'center',
											}}
										>
											<Checkbox size="sm" label="Remember me" name="persistent" />
											<Typography onClick={() => navigate('/forgot-password')} style={{ fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}>
												Forgot your password?
											</Typography>
										</Box>
										<Button type="submit" fullWidth>
											Sign in
										</Button>
									</Stack>
								</form>
							</Stack>
						</Box>
						<Box component="footer" sx={{ py: 3 }}>
							<Typography level="body-xs" textAlign="center">
								© Your company {new Date().getFullYear()}
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					sx={(theme) => ({
						height: '100%',
						position: 'fixed',
						right: 0,
						top: 0,
						bottom: 0,
						left: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
						transition:
							'background-image var(--Transition-duration), left var(--Transition-duration) !important',
						transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
						backgroundColor: 'background.level1',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundImage:
							'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)',
						[theme.getColorSchemeSelector('dark')]: {
							backgroundImage:
								'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)',
						},
					})}
				/>
			</CssVarsProvider>
		</>
	)
};

export default LoginPage;

