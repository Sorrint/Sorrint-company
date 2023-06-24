import React from 'react';

const Main = () => {
    return (
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center text-center">
            <h1>Добро пожаловать!</h1>
            <h3>
                Для просмотра контента можете зарегистрироваться, либо войти по следующим данным:
                <hr />
                <div>Логин: newcustomer@example.com</div>
                <hr />
                <div>Пароль: Test1234</div>
            </h3>
        </div>
    );
};

export default Main;
