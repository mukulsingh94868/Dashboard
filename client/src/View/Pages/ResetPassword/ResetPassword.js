import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import CssBaseline from '@mui/joy/CssBaseline';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { CssVarsProvider } from '@mui/joy/styles';
import React, { useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                "token": id,
                "newPassword": newPassword
            };
            const response = await fetch(`http://localhost:5000/api/auth/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (response.status === 200) {
                toast.success(data?.message, {
                    duration: 3000,
                    position: 'top-right'
                })
                setTimeout(() => {
                    navigate('/login');
                }, [1000])
            } else {
                alert('error found')
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <CssVarsProvider>
                <CssBaseline />
                <GlobalStyles
                    styles={{
                        ':root': {
                            '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
                            '--Cover-width': '28vw', // must be `vw` only
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
                                    <Typography level="h3">Reset your password</Typography>
                                </Stack>
                            </Stack>

                            <Stack gap={4} sx={{ mt: 2 }}>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <FormControl required>
                                        <FormLabel>Enter New Password</FormLabel>

                                        <Input
                                            type="password"
                                            placeholder="Enter new password"
                                            name="newPassword"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </FormControl>
                                    <FormControl required>
                                        <FormLabel>Enter Confirm Password</FormLabel>

                                        <Input
                                            type="password"
                                            placeholder="Enter Confirm password"
                                            name="confirmPassword"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </FormControl>
                                    <Stack gap={4} sx={{ mt: 2 }}>
                                        <Button type="submit" fullWidth>
                                            Reset Password
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
            </CssVarsProvider>
        </>
    )
}

export default ResetPassword