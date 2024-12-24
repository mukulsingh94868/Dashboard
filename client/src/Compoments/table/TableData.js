import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/joy/Button';
import DialogContent from '@mui/joy/DialogContent';
import DialogTitle from '@mui/joy/DialogTitle';
import Dropdown from '@mui/joy/Dropdown';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Table from '@mui/joy/Table';
import React, { useEffect, useState } from 'react';
import AddUser from '../../View/Pages/AddUser/AddUser';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../Redux/actions/AuthCrudActions';


const TableData = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [iden, setIden] = useState(null);
    // states for updated data only 
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');

    const dataFetch = useSelector((data) => data.AuthCrudReducer.posts);

    useEffect(() => {
        dispatch(getUserData());
        // const getData = async () => {
        //     const response = await fetch('http://localhost:5000/api/auth/getData');
        //     const result = await response.json();
        //     setData(result);
        // };

        // getData();
    }, [dispatch]);

    const getSingleData = async (id) => {
        const response = await fetch(`http://localhost:5000/api/auth/getData/${id}`);
        const result = await response.json();

        setFullname(result?.fullname);
        setUsername(result?.username);
        setEmail(result?.email);
        setPhone(result?.phone);
        setGender(result?.gender);
        setLocation(result?.location);
    };

    const deleteModel = async (id) => {
        const response = await fetch(`http://localhost:5000/api/auth/deleteData/${id}`, {
            method: 'DELETE',
        });
        window.location.reload();
    };

    const editData = (id) => {
        setIden(id);
        setOpen(true);
        getSingleData(id);
    };

    const updateData = async () => {
        const response = await fetch(`http://localhost:5000/api/auth/updateData/${iden}`, {
            method: 'PUT',
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
            }),
        });
        const result = await response.json();
        setOpen(false);
    }
    return (
        <>
            <div className="form-container">
                <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog>
                        <DialogTitle>Edit User</DialogTitle>
                        <DialogContent>Fill in the information of the User.</DialogContent>
                        <form
                            onSubmit={() => updateData()}
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
                                <Button type="submit">Update</Button>
                            </Stack>
                        </form>
                    </ModalDialog>
                </Modal>

                <div>
                    <div className='pageHeading'>
                        <div className='contentheading'>
                            <h1 className='contentheading'>User List</h1>
                        </div>
                        <div className=''>
                            <AddUser />
                        </div>
                    </div>

                    <Table size="md" stickyHeader>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Fullname</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Location</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !!dataFetch && dataFetch?.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.fullname}</td>
                                        <td>{item.username}</td>
                                        <td style={{ wordWrap: 'break-word' }}>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.location}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <Dropdown>
                                                <MenuButton
                                                    slots={{ root: IconButton }}
                                                    slotProps={{ root: { variant: '', color: 'neutral' } }}
                                                ><MoreVertIcon fontSize="small" /></MenuButton>
                                                <Menu>
                                                    <MenuItem onClick={() => editData(item?._id)}>Edit</MenuItem>
                                                    <MenuItem onClick={() => deleteModel(item?._id)}>Delete</MenuItem>
                                                </Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default TableData;