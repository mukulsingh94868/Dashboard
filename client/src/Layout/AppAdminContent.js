import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayoutItem } from '../Router/PrivateRouter';

const AppAdminContent = () => {
    return (
        <>
            <Routes>
                {AdminLayoutItem?.map((route, index) => {
                    return (
                        !!route.component && (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                element={<route.component />}
                            />
                        )
                    );
                })}
            </Routes>
        </>
    );
};

export default AppAdminContent;