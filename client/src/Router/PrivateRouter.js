import TableData from "../Compoments/table/TableData";
import Dashboard from '../Admin/Dashboard';
import AdminDashboard from "../Admin/AdminDashboard";
import UserProfile from '../View/Pages/UserProfile/UserProfile';
import Blogs from '../View/Pages/Blogs/Blogs';
import BlogFullContent from "../View/Pages/Blogs/BlogFullContent";
import CreateBlogAdmin from "../Admin/pages/CreateBlogAdmin";
import ProductPage from "../View/Pages/Products/ProductPage";
import ProductDetails from "../View/Pages/Products/ProductDetails";
  
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
    },
    {
        path: "/profile",
        exact: true,
        component: UserProfile
    },
    {
        path: "/products",
        exact: true,
        component: ProductPage
    },
    {
        path: "/products/:id",
        exact: true,
        component: ProductDetails
    },
    {
        path: "/blogs",
        exact: true,
        component: Blogs
    },
    {
        path: "/blogs/:id",
        exact: true,
        component: BlogFullContent
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
    },
    {
        path: "/create-blog",
        exact: true,
        component: CreateBlogAdmin
    },
];