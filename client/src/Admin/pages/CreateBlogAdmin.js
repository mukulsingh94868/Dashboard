import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import CssBaseline from '@mui/joy/CssBaseline';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { CssVarsProvider } from '@mui/joy/styles';
import React, { useState } from 'react';
import Editor from '../../Compoments/Editor/Editor';
import toast from 'react-hot-toast';

const CreateBlogAdmin = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure the form has the image before submitting
        if (!image) {
            toast.error('Please upload an image');
            return;
        }

        try {
            // Create a FormData object to send both file and other data
            const formData = new FormData();
            formData.append('title', title);
            formData.append('summary', summary);
            formData.append('content', content);
            formData.append('image', image);

            const response = await fetch('http://localhost:5000/api/blog/post', {
                method: 'POST',
                body: formData, // Send the formData
            });

            const result = await response.json();

            if (response.status === 201) {
                toast.success(result?.message, {
                    duration: 4000,
                    position: 'top-right',
                });
                setTitle('');
                setSummary('');
                setContent('');
                setImage(null);
            } else {
                toast.error('Error while creating the post');
            }
        } catch (error) {
            console.error('Error creating blog post:', error);
            toast.error('Something went wrong, please try again.');
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
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                width: '100%',
                                maxWidth: '100%',
                                borderRadius: 'sm',
                                '& form': {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                },
                            }}
                        >
                            <Stack gap={4} sx={{ mt: 2 }}>
                                <form onSubmit={handleSubmit}>
                                    <FormControl required>
                                        <FormLabel>Enter the Title</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="Title"
                                            name="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            fullWidth
                                        />
                                    </FormControl>

                                    <FormControl required>
                                        <FormLabel>Enter the Summary</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="Summary"
                                            name="summary"
                                            value={summary}
                                            onChange={(e) => setSummary(e.target.value)}
                                        />
                                    </FormControl>

                                    <FormControl required>
                                        <FormLabel>Content</FormLabel>
                                        <Editor onChange={setContent} value={content} />
                                    </FormControl>

                                    <FormControl required sx={{ mt: 5 }}>
                                        <FormLabel>Enter the Image</FormLabel>
                                        <Input
                                            type="file"
                                            name="image"
                                            onChange={(e) => setImage(e.target.files[0])}
                                            sx={{ padding: 1 }}
                                        />
                                    </FormControl>

                                    <Stack gap={4} sx={{ mt: 2 }}>
                                        <Button type="submit" fullWidth>
                                            Create Blog Post
                                        </Button>
                                    </Stack>
                                </form>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </CssVarsProvider>
        </>
    );
};

export default CreateBlogAdmin;
