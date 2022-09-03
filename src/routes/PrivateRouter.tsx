import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ isAuthenticated, authenticationPath, outlet }: PrivateRouteProps) => {
  if (isAuthenticated) return outlet;

  return (
    <Navigate
      to={{
        pathname: authenticationPath
      }}
      replace
    />
  );
};

export default PrivateRouter;

export type PrivateRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};
