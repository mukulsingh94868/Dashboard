import TableData from "../Compoments/table/TableData";
import Dashboard from '../Admin/Dashboard';
import AdminDashboard from "../Admin/AdminDashboard";
  
// export const roles = {
//     INDIVIDUAL: 'Employee',
//     ENTITY: 'Employer',
//     ADMIN: 'Admin'
// };
 
// export const PrivateRouter = [
//     { path: "/employee/*", exact: true, access: [roles.INDIVIDUAL, roles.ENTITY], name: 'Layout', component: Layout },
// ];

export const LayoutItem = [
    {
        path: "/",
        exact: true,
        component: Dashboard
    }
];

export const AdminLayoutItem = [
    {
        path: "/",
        exact: true,
        component: AdminDashboard
    },
    {
        path: "/user-management",
        exact: true,
        component: TableData
    }
];