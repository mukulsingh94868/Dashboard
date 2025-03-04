import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DashSidebar = () => {
    const [user, setUser] = useState({ fullName: "", authPerson: "" });
    const location = useLocation();

    useEffect(() => {
        const fullName = JSON.parse(localStorage.getItem("authFullName")) || "";
        const authPerson = JSON.parse(localStorage.getItem("authPerson")) || "";
        setUser({ fullName, authPerson });
    }, []);

    const menuItems = [
        { path: "/dashboard", label: "Dashboard", icon: "dashboard.svg" },
        { path: "/dashboard/profile", label: "User Profile", icon: "profile.svg" },
        { path: "/dashboard/products", label: "Products", icon: "job.svg" },
        { path: "/dashboard/blogs", label: "Blogs", icon: "onboarding.svg" },
        { path: "/dashboard/kanban", label: "Kanban Board", icon: "payroll.svg" },
        { path: "/dashboard/calender", label: "Calendar", icon: "payroll.svg" },
        { path: "/dashboard/todo", label: "To Do", icon: "payroll.svg" },
    ];

    return (
        <div className="left_sidebar">
            <div className="d-flex align-items-center profile_img">
                <img src="../images/user.jpg" alt="User" />
                <h6 className="mb-0">
                    {user.fullName} <br /> {user.authPerson}
                </h6>
            </div>

            <nav className="sidebar_nav">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link to={item.path} className={location.pathname === item.path ? "active" : ""}>
                                <img src={`../images/${item.icon}`} alt={item.label} /> {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default DashSidebar;
