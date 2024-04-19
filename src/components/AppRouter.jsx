import React from "react";
import { Routes, Route } from "react-router-dom";
import { pablicRoutes, privateRoutes } from "./router/router";

const AppRouter = () => {
    const isAuth = false;
    return (
        <div>
            {isAuth ? (
                <Routes>
                    {privateRoutes.map((privateRoute) => (
                        <Route
                            path={privateRoute.path}
                            element={privateRoute.element}
                        />
                    ))}
                </Routes>
            ) : (
                <Routes>
                    {pablicRoutes.map((pablicRoute) => (
                        <Route
                            path={pablicRoute.path}
                            element={pablicRoute.element}
                        />
                    ))}
                </Routes>
            )}
        </div>
    );
};

export default AppRouter;
