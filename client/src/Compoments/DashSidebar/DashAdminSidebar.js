import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DashAdminSidebar = () => {
  const [user, setUser] = useState({ fullName: "", authPerson: "" });
  const location = useLocation();

  useEffect(() => {
    const fullName = JSON.parse(localStorage.getItem("authFullName")) || "";
    const authPerson = JSON.parse(localStorage.getItem("authPerson")) || "";
    setUser({ fullName, authPerson });
  }, []);

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: "dashboard.svg" },
    { path: "/dashboard/user-management", label: "User Management", icon: "payroll.svg" },
    { path: "/dashboard/create-blog", label: "Create Blog", icon: "payroll.svg" },
    { path: "/dashboard/products-list", label: "Product List", icon: "payroll.svg" },
    { path: "/dashboard/orders-list", label: "Order List", icon: "payroll.svg" },
    { path: "/dashboard/timeline", label: "Timeline", icon: "payroll.svg" },
    { path: "/dashboard/org-chart", label: "Org Chart", icon: "dashboard.svg" },
    { path: "/dashboard/contact-list", label: "Contact List", icon: "dashboard.svg" },
    { path: "/dashboard/form-builder", label: "Form Builder", icon: "dashboard.svg" },
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

export default DashAdminSidebar;
