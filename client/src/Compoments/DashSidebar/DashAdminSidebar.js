import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const DashAdminSidebar = () => {
  const [isUser, setIsUser] = useState(null);
  const [isFullName, setIsFullName] = useState(null);
  console.log('isFullName', isFullName)

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
          </ul>
        </nav>
      </div>
    </>
  )
}

export default DashAdminSidebar;