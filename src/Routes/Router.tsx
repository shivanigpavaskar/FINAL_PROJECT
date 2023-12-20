import { lazy } from "react";
import LoaderPage from "../layouts/LoaderPage";
import Welcome from "../Welcome";
import Dashbord from "../Pages/Dashbord";
   
const Home = LoaderPage(lazy(async () => await import('../Home')))
const Signup = LoaderPage(lazy(async () => await import('../Pages/Signup')))
const Login = LoaderPage(lazy(async () => await import('../Pages/Login')))
const CourseForm = LoaderPage(lazy(async () => await import('../Pages/Course/courseForm')))
const VideoForm = LoaderPage(lazy(async () => await import('../Pages/Course/VideoForm')))
const Courses = LoaderPage(lazy(async () => await import('../Pages/Course/Courses')))
const Sidebar = LoaderPage(lazy(async () => await import('../Components/Sidebar')))
 

  
 

const routes = [
    {
        path:'/',
        element:< Welcome />
    },

     {
        path:'/Home',
        element:<Home/>
    },
    {
        path:'/Dashboard',
        element:<Dashbord/>
    },
    {
        path:'/Signup',
        element:<Signup/>
    },
    {
        path:'/Login',
        element:<Login/>
    },
    {
        path:'/:courseId/add',
        element:<VideoForm/>
    },
    {
        path:'/courseForm',
        element: <CourseForm/>
    },
    {
        path:'/Courses',
        element: <Courses/>,
        // children: [
        //     {
        //         path: 'Courses/:courseId/', 
        //         element: <VideoForm/>
        //     },]
    },
    {
        path:'/Sidebar',
        element: <Sidebar/>
    },
     
];

export default routes;