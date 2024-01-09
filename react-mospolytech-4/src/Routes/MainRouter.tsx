import React  from 'react'
import { RouteObject, useRoutes } from "react-router-dom";
import { About } from '../Components/pages/About';
import { Contacts } from '../Components/pages/Contacts';
import { Home } from '../Components/pages/Home';
import { Order } from '../Components/pages/Order';
import { ABOUT_ROUTE, CONTACTS_ROUTE, HOME_ROUTE, ORDER_ROUTE } from './configs';
import { useAuth } from '../hooks/useAuth';

export const MainRouter: React.FC = () => {
  const { isAuth } = useAuth();
  
  const basedPath: RouteObject[] = [
    { path: ABOUT_ROUTE, element: <About /> },
    { path: CONTACTS_ROUTE, element: <Contacts /> },
    { path: HOME_ROUTE, element: <Home/> },
  ];

  const authPath: RouteObject[] = isAuth
    ? [{ path: ORDER_ROUTE, element: <Order /> }]
    : [];

  const resultPaths: RouteObject[] = basedPath.concat(authPath);
  
  return useRoutes(resultPaths);
};