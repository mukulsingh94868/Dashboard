import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';

const AddUser = () => {
    const [open, setOpen] = useState(false);
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');

    const Adduser = async (e) => {
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
                    password,
                }),
                // body: JSON.stringify(data)
            });
            const data = await response.json();
            if (response.status === 201) {
                setOpen(false);
                window.location.reload();
            } else {
                alert('error found')
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Button onClick={() => setOpen(true)}>Add User</Button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Create new project</DialogTitle>
                    <DialogContent>Fill in the information of the project.</DialogContent>
                    <form
                        onSubmit={Adduser}
                    >
                        <Stack spacing={2}>
                        <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input type='text' value={fullname} onChange={(e) => setFullname(e.target.value)} autoFocus required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email Address</FormLabel>
                                <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Contact Details</FormLabel>
                                <Input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <Input type='text' value={gender} onChange={(e) => setGender(e.target.value)} required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Location</FormLabel>
                                <Input type='text' value={location} onChange={(e) => setLocation(e.target.value)} required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input type='text' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </FormControl>
                            <Button type="submit">Add User</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default AddUser