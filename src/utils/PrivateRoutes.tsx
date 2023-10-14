import { Outlet, Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { FirebaseContext } from "../contexts/firebaseContext/firebaseContext";
import { useLocation } from "react-router";

const PrivateRoutes = () => {
  const location = useLocation();
  const { firebaseUser } = useContext(FirebaseContext);
  return !!firebaseUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoutes;
