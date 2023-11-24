import React from 'react';
import AppContent from './AppContent';
import DashAdminHeader from '../Compoments/DashHeader/DashAdminHeader';
import DashAdminSidebar from '../Compoments/DashSidebar/DashAdminSidebar';
import AppAdminContent from './AppAdminContent';


const AdminLayout = () => {
    return (
        <>
            <div className="main_wrap">
                <DashAdminSidebar />

                <div className="right_panel">
                    <DashAdminHeader />

                    {/* <div className="content"> */}
                        <div className="d-flex">
                            {/* <div className='layoutWrapper'> */}
                                <AppAdminContent />
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout;