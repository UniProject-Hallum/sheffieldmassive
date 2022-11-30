import { Route, Outlet, useLocation, Navigate } from "react-router-dom";
import { useUser } from "./useUser";

import React from "react";

const PrivateRoutes = () => {
  const user = useUser();


  if (!user) return <Navigate to="/login" />;
  
  return <Outlet />;
};

export default PrivateRoutes;
