import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPage from "../Auth/ForgotPage";
import LoginPage from "../Auth/LoginPage";
import RegisterPage from "../Auth/RegisterPage";
import AdminLayout from "../Layout/AdminLayout";
import Layout from "../Layout/Layout";
import About from "../View/OtherPages/About";
import Contact from "../View/OtherPages/Contact";
import FAQ from "../View/OtherPages/FAQ";
import IndustriesSolutions from "../View/OtherPages/IndustriesSolutions";
import Job from "../View/OtherPages/Job";
import Resource from "../View/OtherPages/Resource";
import Home from "../View/Pages/Home";
import ResetPassword from "../View/Pages/ResetPassword/ResetPassword";

const RouterIndex = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isUser, setIsUser] = useState(null);

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem("authPerson"));
    setIsUser(getLocalStorage);
  }, [isUser]);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("authUser");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/job" element={<Job />} />
      <Route path="/about" element={<About />} />
      <Route path="/IndustriesSolutions" element={<IndustriesSolutions />} />
      <Route path="/resource" element={<Resource />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
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

      {!!isUser && isUser === "user" ? (
        <Route path="/dashboard/*" element={<Layout />} />
      ) : (
        <Route path="/dashboard/*" element={<AdminLayout />} />
      )}

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
  );
};

export default RouterIndex;
