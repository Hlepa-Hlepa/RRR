import { useState } from "react";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    setIsAuth(!isAuth);
  };

  return {
    isAuth,
    setIsAuth,
    handleLogin,
  };
};

