import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { pablicRoutes, privateRoutes } from "./router";
import { AuthContext } from "./context";

const AppRouter = () => {
    const { isAuth } = useContext(AuthContext);
    return (
        <div>
            {isAuth ? (
                <Routes>
                    {privateRoutes.map((privateRoute) => (
                        <Route
                            path={privateRoute.path}
                            element={privateRoute.element}
                            key={privateRoute.path}
                        />
                    ))}
                </Routes>
            ) : (
                <Routes>
                    {pablicRoutes.map((pablicRoute) => (
                        <Route
                            path={pablicRoute.path}
                            element={pablicRoute.element}
                            key={pablicRoute.path}
                        />
                    ))}
                </Routes>
            )}
        </div>
    );
};

export default AppRouter;
