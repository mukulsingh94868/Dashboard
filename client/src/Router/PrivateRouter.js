import AdminDashboard from "../Admin/AdminDashboard";
import Dashboard from '../Admin/Dashboard';
import CreateBlogAdmin from "../Admin/pages/CreateBlogAdmin";
import TableData from "../Compoments/table/TableData";
import BlogFullContent from "../View/Pages/Blogs/BlogFullContent";
import Blogs from '../View/Pages/Blogs/Blogs';
import OrderScreen from "../View/Pages/Products/OrderScreen";
import ProductCartScreen from "../View/Pages/Products/ProductCartScreen";
import CheckoutPage from "../View/Pages/Products/CheckoutPage";
import KanbanBoard from "../Compoments/KanbanBoard/KanbanBoard";
import ProductDetails from "../View/Pages/Products/ProductDetails";
import ProductPage from "../View/Pages/Products/ProductPage";
import UserProfile from '../View/Pages/UserProfile/UserProfile';
import Calender from "../View/Pages/Calender/Calender";
  
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
        path: "/products/cart",
        exact: true,
        component: ProductCartScreen
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
    },
    {
        path: "/kanban",
        exact: true,
        component: KanbanBoard
    },
    {
        path: "/calender",
        exact: true,
        component: Calender
    },
    {
        path: "/orders",
        exact: true,
        component: OrderScreen
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