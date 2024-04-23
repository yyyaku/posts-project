import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cl from "./Nav.module.css";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../context";

const Nav = () => {
    const { setIsAuth } = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("Auth");
    };
    return (
        <div className={cl.nav}>
            <MyButton onClick={logout}>
                <Link to='/login'>Выйти</Link>
            </MyButton>
            <div className={cl.nav__links}>
                <Link className={cl.nav__link} to='/about'>
                    О сайте
                </Link>
                <Link className={cl.nav__link} to='/posts'>
                    Посты
                </Link>
                <Link className={cl.nav__link} to='/postssecond'>
                    Посты (бесконечная лента)
                </Link>
            </div>
        </div>
    );
};

export default Nav;
