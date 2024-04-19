import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    { path: "/posts", element: <Posts /> },
    { path: "/posts/:id", element: <PostIdPage /> },
    { path: "/about", element: <About /> },
    { path: "*", element: <Navigate to='/posts' /> },
];

export const pablicRoutes = [
    { path: "/about", element: <About /> },
    { path: "/login", element: <Login /> },
    { path: "*", element: <Navigate to='/login' /> },
];
