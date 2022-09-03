import { Navigate } from 'react-router-dom';

const PublicRouter = ({ isAuthenticated, authenticatedPath, outlet }: PublicRouteProps) => {
  if (!isAuthenticated) return outlet;

  return (
    <Navigate
      to={{
        pathname: authenticatedPath
      }}
      replace
    />
  );
};

export default PublicRouter;

export type PublicRouteProps = {
  isAuthenticated: boolean;
  authenticatedPath: string;
  outlet: JSX.Element;
};
