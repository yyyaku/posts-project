import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/UI/Nav/Nav";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./components/context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("Auth")) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);

    return (
        <div>
            <AuthContext.Provider
                value={{
                    isAuth,
                    setIsAuth,
                    isLoading,
                }}
            >
                <BrowserRouter>
                    <Nav></Nav>
                    <AppRouter></AppRouter>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
