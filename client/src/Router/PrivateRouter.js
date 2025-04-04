import AdminDashboard from "../Admin/AdminDashboard";
import Dashboard from "../Admin/Dashboard";
import ContactList from "../Admin/pages/ContactList";
import CreateBlogAdmin from "../Admin/pages/CreateBlogAdmin";
import FormBuilder from "../Admin/pages/FormBuilder";
import OrderList from "../Admin/pages/OrderList";
import OrgChart from "../Admin/pages/OrgChart";
import ProductList from "../Admin/pages/ProductList";
import TimeLine from "../Admin/pages/TimeLine";
import KanbanBoard from "../Compoments/KanbanBoard/KanbanBoard";
import TableData from "../Compoments/table/TableData";
import BlogFullContent from "../View/Pages/Blogs/BlogFullContent";
import Blogs from "../View/Pages/Blogs/Blogs";
import Calender from "../View/Pages/Calender/Calender";
import OrderScreen from "../View/Pages/Products/OrderScreen";
import ProductCartScreen from "../View/Pages/Products/ProductCartScreen";
import ProductDetails from "../View/Pages/Products/ProductDetails";
import ProductPage from "../View/Pages/Products/ProductPage";
import TodoComponent from "../View/Pages/Todo/Todo";
import UserProfile from "../View/Pages/UserProfile/UserProfile";

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
    component: Dashboard,
  },
  {
    path: "/profile",
    exact: true,
    component: UserProfile,
  },
  {
    path: "/products",
    exact: true,
    component: ProductPage,
  },
  {
    path: "/products/:id",
    exact: true,
    component: ProductDetails,
  },
  {
    path: "/products/cart",
    exact: true,
    component: ProductCartScreen,
  },
  {
    path: "/blogs",
    exact: true,
    component: Blogs,
  },
  {
    path: "/blogs/:id",
    exact: true,
    component: BlogFullContent,
  },
  {
    path: "/kanban",
    exact: true,
    component: KanbanBoard,
  },
  {
    path: "/calender",
    exact: true,
    component: Calender,
  },
  {
    path: "/todo",
    exact: true,
    component: TodoComponent,
  },
  {
    path: "/orders",
    exact: true,
    component: OrderScreen,
  },
];

export const AdminLayoutItem = [
  {
    path: "/",
    exact: true,
    component: AdminDashboard,
  },
  {
    path: "/user-management",
    exact: true,
    component: TableData,
  },
  {
    path: "/create-blog",
    exact: true,
    component: CreateBlogAdmin,
  },
  {
    path: "/products-list",
    exact: true,
    component: ProductList,
  },
  {
    path: "/orders-list",
    exact: true,
    component: OrderList,
  },
  {
    path: "/timeline",
    exact: true,
    component: TimeLine,
  },
  {
    path: "/org-chart",
    exact: true,
    component: OrgChart,
  },
  {
    path: "/contact-list",
    exact: true,
    component: ContactList
  },
  {
    path: "/form-builder",
    exact: true,
    component: FormBuilder
  },
  // {
  //   path: "/product-categories",
  //   exact: true,
  //   component: ProductCategories,
  // },
];
