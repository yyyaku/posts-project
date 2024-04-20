import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { pablicRoutes, privateRoutes } from "./router";
import { AuthContext } from "./context";
import MyLoader from "./UI/loader/MyLoader";

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <MyLoader></MyLoader>;
    }

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
