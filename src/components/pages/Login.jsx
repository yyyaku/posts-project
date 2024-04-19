import React from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const Login = () => {
    return (
        <div className='App'>
            <h1>Страница для авторизации</h1>
            <MyInput type='text' placeholder='Введите логин'></MyInput>
            <MyInput type='text' placeholder='Введите пароль'></MyInput>
            <MyButton>Войти</MyButton>
        </div>
    );
};

export default Login;
