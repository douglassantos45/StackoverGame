import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouter = {
  children: ReactNode;
};

export const PrivateRouter = ({ children }: PrivateRouter) => {
  const token = localStorage.getItem('react.auth.user');

  if (!token) return <Navigate to="/" />;

  return <>{children}</>;
};
