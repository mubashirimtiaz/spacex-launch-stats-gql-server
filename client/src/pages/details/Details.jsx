import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname === "/launch" && navigate("/", { replace: true });
  });
  return <Outlet />;
};

export default Details;
