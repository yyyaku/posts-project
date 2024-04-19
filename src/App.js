import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/UI/Nav/Nav";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./components/context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <div>
            <AuthContext.Provider
                value={{
                    isAuth,
                    setIsAuth,
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
