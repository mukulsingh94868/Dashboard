import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import AdminLayout from '../Layout/AdminLayout';
import Layout from '../Layout/Layout';
import About from '../View/Pages/About';
import Home from '../View/Pages/Home';
import IndustriesSolutions from '../View/Pages/IndustriesSolutions';
import Job from '../View/Pages/Job';
import LoginPage from '../Auth/LoginPage';
import Resources from '../View/Pages/Resource';


const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [isUser, setIsUser] = useState(null);

    useEffect(() => {
        const getLocalStorage = JSON.parse(localStorage.getItem('authPerson'));
        setIsUser(getLocalStorage);
    }, [])

    const checkUserToken = () => {
        const userToken = localStorage.getItem('authUser');

        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
        }
        setIsLoggedIn(true);
    };

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/job" element={<Job />} />
                <Route path="/about" element={<About />} />
                <Route path="/IndustriesSolutions" element={<IndustriesSolutions />} />
                <Route path="/resource" element={<Resources />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logins" element={<LoginPage />} />


                {
                    isUser === 'user' ? (
                        <Route path="/dashboard/*" element={<Layout />} />
                    ) : (
                        <Route path="/dashboard/*" element={<AdminLayout />} />
                    )
                }

                {/* {
                    isLoggedIn === true &&
                    <Route
                        path='/dashboard'
                        element={
                            <ProtectedRoutes>
                                <Dashboard />
                            </ProtectedRoutes>
                        }
                    />
                } */}
                {/* <Route path="*" element={<Navigate to='/dashboard' />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Index