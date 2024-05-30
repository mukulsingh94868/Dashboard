import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DashSidebar = () => {
    const [isUser, setIsUser] = useState(null);
    const [isFullName, setIsFullName] = useState(null);

    useEffect(() => {
        const getLocalStorage = JSON.parse(localStorage.getItem('authPerson'));
        const getFullName = JSON.parse(localStorage.getItem('authFullName'));
        setIsUser(getLocalStorage);
        setIsFullName(getFullName);
    }, [])
    return (
        <>
            <div className="left_sidebar">
                <div className="d-flex align-items-center profile_img">
                    <img src="../images/user.jpg" alt="" />
                    <h6 className="mb-0">{isFullName} <br /> {isUser}</h6>
                </div>

                <nav className="sidebar_nav">
                    <ul>
                        <li>
                            <Link className="" to="/dashboard">
                                <img src="../images/dashboard.svg" alt="" /> Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/profile">
                                <img src="../images/profile.svg" alt="" /> User Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/products">
                                <img src="../images/job.svg" alt="" /> Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/blogs">
                                <img src="../images/onboarding.svg" alt="" /> Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/kanban">
                                <img src="../images/payroll.svg" alt="" /> Kanban Board
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/calender">
                                <img src="../images/payroll.svg" alt="" /> Calender
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default DashSidebar