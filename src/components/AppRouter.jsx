import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Error from "./pages/Error";
import PostIdPage from "./pages/PostIdPage";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/posts' element={<Posts />} />
                <Route path='/posts/:id' element={<PostIdPage />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
