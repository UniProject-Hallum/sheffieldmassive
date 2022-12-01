import { Route, Outlet, useLocation, Navigate } from "react-router-dom";
import { useUser } from "./useUser";

import React from "react";

const Redirect = () => {
  const user = useUser();

  let location = useLocation();

  if (user.role == 'handyman') return <Navigate to="/handyman" />;
  if (user.role == 'customer') return <Navigate to="/user" />;

 
};

export default Redirect;
