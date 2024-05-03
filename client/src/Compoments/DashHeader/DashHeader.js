
import { Settings } from '@mui/icons-material';
import MoreVert from '@mui/icons-material/MoreVert';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const DashHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isBodyClassActive, setIsBodyClassActive] = useState(false);

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

    useEffect(() => {
        if (isBodyClassActive) {
            document.body.classList.add("hide_sidebar");
        } else {
            document.body.classList.remove("hide_sidebar");
        }
    }, [isBodyClassActive]);

    const toggleBodyClass = () => {
        setIsBodyClassActive(!isBodyClassActive);
    };

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
                    <button type="submit">
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
                    <Dropdown>
                        <MenuButton
                            slots={{ root: Settings }}
                            slotProps={{ root: { color: 'neutral' } }}
                        >
                            <MoreVert />
                        </MenuButton>
                        <Menu>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>My account</MenuItem>
                            <MenuItem onClick={() => navigate('/dashboard/orders')}>My Orders</MenuItem>
                            <MenuItem onClick={handleNavigate}>Logout</MenuItem>
                        </Menu>
                    </Dropdown>

                </div>
            </header>
        </>
    )
}

export default DashHeader