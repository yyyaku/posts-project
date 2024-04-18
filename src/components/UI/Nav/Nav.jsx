import React from "react";
import { Link } from "react-router-dom";
import cl from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={cl.nav}>
            <div className={cl.nav__links}>
                <Link className={cl.nav__link} to='/about'>
                    О сайте
                </Link>
                <Link className={cl.nav__link} to='/posts'>
                    Посты
                </Link>
            </div>
        </div>
    );
};

export default Nav;
