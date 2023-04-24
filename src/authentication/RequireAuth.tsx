import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from ".";
interface RequireAuthProps {
  children: React.ReactNode;
}
export const RequireAuth = ({ children }: RequireAuthProps) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }
  return <div>{children}</div>;
};
export const CheckUser = ({ children }: RequireAuthProps) => {
  const auth = useAuth();
  console.log(auth.user);
  const location = useLocation();
  if (auth.user) {
    return <Navigate to="/candidateList" state={{ path: location.pathname }} />;
  }
  return <div>{children}</div>;
};
