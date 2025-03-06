import React from 'react';
import Header from '../Compoments/Header/Header';
import { useLocation } from 'react-router-dom';

const OuterLayout = ({ children }) => {
    const location = useLocation();
    const hideHeaderRoutes = ["/login", "/register", "/dashboard/*"];
    const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname) && !location.pathname.startsWith("/dashboard");
    return (
        <div>
            {shouldShowHeader && <Header />}
            <main>{children}</main>
        </div>
    );
};

export default OuterLayout;