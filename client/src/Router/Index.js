import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from '../Layout/AdminLayout';
import Layout from '../Layout/Layout';
import Home from '../View/Pages/Home';
import LoginPage from '../Auth/LoginPage';
import RegisterPage from '../Auth/RegisterPage';
import Resource from '../View/OtherPages/Resource';
import About from '../View/OtherPages/About';
import Job from '../View/OtherPages/Job';
import IndustriesSolutions from '../View/OtherPages/IndustriesSolutions';
import ResetPassword from '../View/Pages/ResetPassword/ResetPassword';
import ForgotPage from '../Auth/ForgotPage';
import { useSelector } from 'react-redux';

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [isUser, setIsUser] = useState(null);
    const localUser = useSelector((state) => state.authReducer.authData);
    const userd = localUser?.data?.role;

    useEffect(() => {
        const getLocalStorage = JSON.parse(localStorage.getItem('authPerson'));
        setIsUser(getLocalStorage);
    }, [isUser])

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
                <Route path="/resource" element={<Resource />} />
                <Route path="/register" exact element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot-password" element={<ForgotPage />} />
                <Route path="/reset-password/:id" element={<ResetPassword />} />


                {/* {
                    !!userd && userd === 'user' ? (
                        <Route path="/dashboard/*" element={<Layout />} />
                    ) : (
                        <Route path="/dashboard/*" element={<AdminLayout />} />
                    )
                } */}

                {
                    !!isUser && isUser === 'user' ? (
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