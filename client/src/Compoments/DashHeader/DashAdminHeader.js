import { Settings } from '@mui/icons-material';
import MoreVert from '@mui/icons-material/MoreVert';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const DashAdminHeader = () => {
    const navigate = useNavigate();
    const [isBodyClassActive, setIsBodyClassActive] = useState(false);

    const handleNavigate = () => {
        localStorage.removeItem('authUser');
        localStorage.removeItem('authPerson');
        navigate('/logins   ')
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
                        <a href="#">Dashboards</a>
                    </li>
                    <li>Default</li>
                </ul>

                <form className="header_search">
                    <button type="submit">
                        <img src="../images/search.svg" alt="" />
                    </button>
                    <input type="search" placeholder="Search" />
                </form>
                <div className="header_right_icon">
                    <a href="#">
                        <img src="../images/light_mode.svg" alt="" />
                    </a>
                    <a href="#">
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
                            <MenuItem onClick={handleNavigate}>Logout</MenuItem>
                        </Menu>
                    </Dropdown>

                </div>
            </header>
        </>
    )
}

export default DashAdminHeader;