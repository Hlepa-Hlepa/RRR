import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  HOME_ROUTE,
  ORDER_ROUTE,
} from "../Routes/configs";
import { useAuth } from "../hooks/useAuth";
import { useCurrentTheme } from "../hooks/useCurrentTheme";
import { Navigation } from "./Navbar.styled";
import ChangeThemeIcon from "../assets/icons/ChangeThemeIcon.svg";

const Button = styled.button`
  color: --text-color;
  width: 150px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
`;

const ChangeThemeButton = styled.button`
  color: --text-color;
  width: 70px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;

const ChangeThemeIconImage = styled.img`
  width: 50%;
  height: 50%;
  margin: 0 auto;
`;

export const Navbar: React.FC = () => {
  const { isAuth, handleLogin } = useAuth();

  const { changeTheme } = useCurrentTheme();

  return (
    <header>
      <Navigation displayFlex="flex">
        <NavLink className={"link"} to={HOME_ROUTE}>
          Главная
        </NavLink>
        <NavLink className={"link"} to={ABOUT_ROUTE}>
          О нас
        </NavLink>
        <NavLink className={"link"} to={CONTACTS_ROUTE}>
          Контакты
        </NavLink>
        {isAuth && (
          <NavLink className={"link"} to={ORDER_ROUTE}>
            Заказы
          </NavLink>
        )}
        <Button onClick={handleLogin}>{!isAuth ? "Войти" : "Выйти"}</Button>
        <ChangeThemeButton onClick={() => changeTheme()}>
          <ChangeThemeIconImage src={ChangeThemeIcon} />
        </ChangeThemeButton>
      </Navigation>
    </header>
  );
};
