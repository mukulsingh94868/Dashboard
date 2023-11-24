import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LayoutItem } from '../Router/PrivateRouter';

const AppContent = () => {
    return (
        <>
            <Routes>
                {LayoutItem?.map((route, index) => {
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

export default AppContent;