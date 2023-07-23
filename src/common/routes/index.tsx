import { Navigate } from 'react-router-dom';

import { ChildrenProps } from 'types';

interface ProtectedRouteProps {
  allowed: boolean;
  redirect: string;
}

export const ProtectedRoute = ({
  children,
  redirect,
  allowed,
}: ChildrenProps<ProtectedRouteProps>): JSX.Element => {
  if (!allowed) {
    return <Navigate to={redirect} />;
  }

  return <>{children}</>;
};
