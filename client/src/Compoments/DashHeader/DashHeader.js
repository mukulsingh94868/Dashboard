
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import MoreVert from '@mui/icons-material/MoreVert';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { Avatar, Box, Divider, IconButton, ListItemIcon, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import { getUserById, getUserData } from '../../Redux/actions/AuthCrudActions';

const DashHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isBodyClassActive, setIsBodyClassActive] = useState(false);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const cartState = useSelector((state) => state?.productReducer);

    const handleNavigate = () => {
        localStorage.removeItem('authUser');
        localStorage.removeItem('authId');
        localStorage.removeItem('authPerson');
        localStorage.removeItem('authFullName');
        // localStorage.clear();
        toast.success('Successfully Logout!', { duration: 2000, position: 'top-right' });
        setTimeout(() => {
            navigate('/login');
        }, [1000])
        // dispatch(Logout({ }, navigate));
    };

    const toggleBodyClass = () => {
        setIsBodyClassActive(!isBodyClassActive);
    };

    function toggleFullScreen() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    };

    const dataFetch = useSelector((data) => data.AuthCrudReducer.posts);

    const getAvatarName = () => {
        const res = dataFetch.filter((data) => data._id === JSON.parse(localStorage.getItem("authId")));
        return res[0]?.fullname?.substring(0, 1)?.toUpperCase();
    };

    useEffect(() => {
        if (isBodyClassActive) {
            document.body.classList.add("hide_sidebar");
        } else {
            document.body.classList.remove("hide_sidebar");
        }
    }, [isBodyClassActive]);

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch])
    return (
        <>
            <header className="d-flex align-items-center">
                <button type="button" id="menu_icon" onClick={toggleBodyClass}>
                    <img src="../images/humburger.svg" alt="" />
                </button>
                <ul className="breadcrumb d-flex align-items-center">
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>{location?.pathname?.substring(11)?.toUpperCase()}</li>
                </ul>

                <form className="header_search">
                    <button>
                        <img src="../images/search.svg" alt="" />
                    </button>
                    <input type="search" placeholder="Search" />
                </form>
                {
                    cartState?.cartItems?.length >= 1 ?
                        <div className='cart_module'>
                            <Typography className='cart_text' onClick={() => navigate('/dashboard/products/cart')}>Cart
                                <span className='cardItemLength'> {cartState?.cartItems?.length ? cartState?.cartItems?.length : ''}</span>
                            </Typography>
                        </div>
                        :
                        null
                }
                <div className="header_right_icon">
                    <a href="#/">
                        <img src="../images/light_mode.svg" alt="" />
                    </a>
                    <a href="#/">
                        <img src="../images/notification.svg" alt="" />
                    </a>
                    <ControlCameraIcon onClick={toggleFullScreen} style={{ marginRight: '10px' }} />
                    {/* <Dropdown>
                        <MenuButton
                            slots={{ root: Settings }}
                            slotProps={{ root: { color: 'neutral' } }}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                        </MenuButton>
                        <Menu>
                            <MenuItem onClick={() => navigate('/dashboard/profile')}>Profile</MenuItem>
                            <MenuItem>My account</MenuItem>
                            <MenuItem onClick={() => navigate('/dashboard/orders')}>My Orders</MenuItem>
                            <MenuItem onClick={handleNavigate}>Logout</MenuItem>
                        </Menu>
                    </Dropdown> */}

                    {/* <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                    </IconButton> */}
                    <Avatar sx={{ width: 25, height: 25, fontSize: 12, fontWeight: 500 }} onClick={handleClick}>{getAvatarName()}</Avatar>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={() => navigate('/dashboard/profile')}>
                            Profile
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            My Account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={() => navigate('/dashboard/orders')}>
                            My Orders
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleNavigate}>
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
            </header>
        </>
    )
}

export default DashHeader;