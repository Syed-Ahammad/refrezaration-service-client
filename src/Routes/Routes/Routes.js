import AllServices from "../../Pages/AllServices/AllServices";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layouts/Main/Main");
const { default: Blogs } = require("../../Pages/Blogs/Blogs");
const { default: Home } = require("../../Pages/Home/Home/Home");
const { default: Login } = require("../../Pages/Login/Login");
const { default: Register } = require("../../Pages/Register/Register");


export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                loader: ()=> fetch(`https://refrigaration-service.vercel.app/services`),
                element:<Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/allServices',
                loader: ()=> fetch(`https://refrigaration-service.vercel.app/allServices`),
                element: <AllServices></AllServices>
            }
        ]
    }
])