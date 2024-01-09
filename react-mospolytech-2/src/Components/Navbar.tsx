import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { ABOUT_ROUTE, CONTACTS_ROUTE, HOME_ROUTE, ORDER_ROUTE } from "../Routes/configs";
import { useAuth } from "../Hooks/useAuth";

const Navigation = styled.nav`
    height: max-content;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    text-align: center;
`

const Button = styled.button`
    width: 150px;
    height: 50px;
    border: 0;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
`

export const Navbar = () => {
    const { isAuth, setIsAuth } = useAuth();

    const handleLogin = () => {
        setIsAuth(!isAuth);
    }

    return (
            <header>
                <Navigation>
                    <NavLink className={'link'} to={HOME_ROUTE}>Home</NavLink>
                    <NavLink className={'link'} to={ABOUT_ROUTE}>About</NavLink>
                    <NavLink className={'link'} to={CONTACTS_ROUTE}>Contacts</NavLink>
                    { isAuth && <NavLink className={'link'} to={ORDER_ROUTE}>Order</NavLink> }
                    <Button onClick={handleLogin}>{!isAuth ? 'Войти' : 'Выйти'}</Button>
                </Navigation>
            </header>
    )
}



