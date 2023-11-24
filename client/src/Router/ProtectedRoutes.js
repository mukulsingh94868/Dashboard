import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
 
const ProtectedRoutes = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
 
    const checkUserToken = () => {
        const userToken = localStorage.getItem('authUser');
        if (!userToken || userToken === 'undefined') {
            return navigate('/logins');
        }
        else {
            setIsLoggedIn(true);
            return navigate('/dashboard');
        }
    };
 
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);
    return (
        <>
            {
                isLoggedIn ? props?.children : null
            }
        </>
    )
}
 
export default ProtectedRoutes