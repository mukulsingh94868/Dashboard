import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const DashAdminSidebar = () => {
  const [isUser, setIsUser] = useState(null);
  const [isFullName, setIsFullName] = useState(null);

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('authPerson'));
    const getFullName = JSON.parse(localStorage.getItem('authFullName'));
    setIsUser(getLocalStorage);
    setIsFullName(getFullName);
  }, []);
  return (
    <>
      <div className="left_sidebar">
        <div className="d-flex align-items-center profile_img">
          <img src="../images/user.jpg" alt="" />
          <h6 className="mb-0">{isFullName} <br /> {isUser} </h6>
        </div>

        <nav className="sidebar_nav">
          <ul>
            <li>
              <Link className="" to="/dashboard">
                <img src="../images/dashboard.svg" alt="" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/user-management">
                <img src="../images/payroll.svg" alt="" /> User Management
              </Link>
            </li>
            <li>
              <Link to="/dashboard/create-blog">
                <img src="../images/payroll.svg" alt="" /> Create Blog
              </Link>
            </li>
            <li>
              <Link to="/dashboard/products-list">
                <img src="../images/payroll.svg" alt="" /> Product List
              </Link>
            </li>
            <li>
              <Link to="/dashboard/orders-list">
                <img src="../images/payroll.svg" alt="" /> Order List
              </Link>
            </li>
            <li>
              <Link to="/dashboard/timeline">
                <img src="../images/payroll.svg" alt="" /> TimeLine
              </Link>
            </li>
            <li>
              <Link to="/dashboard/org-chart">
                <img src="../images/dashboard.svg" alt="" /> Org Chart
              </Link>
            </li>
            <li>
              <Link to="/dashboard/form-builder">
                <img src="../images/dashboard.svg" alt="" /> Form Builder
              </Link>
            </li>
            {/* <li>
              <Link to="/dashboard/product-categories">
                <img src="../images/dashboard.svg" alt="" /> Product Categories
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default DashAdminSidebar;