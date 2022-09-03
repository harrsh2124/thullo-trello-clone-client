import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/private/Dashboard';
import SignIn from '../pages/public/SignIn';
import SignUp from '../pages/public/SignUp';
import PrivateRouter, { PrivateRouteProps } from './PrivateRouter';
import PublicRouter, { PublicRouteProps } from './PublicRouter';

const IndexRouter = () => {
  return (
    <Routes>
      <Route
        path="/signup"
        element={<PublicRouter {...defaultPublicRouteProps} outlet={<SignUp />} />}
      />
      <Route
        path="/signin"
        element={<PublicRouter {...defaultPublicRouteProps} outlet={<SignIn />} />}
      />

      <Route
        path="/"
        element={<PrivateRouter {...defaultPrivateRouteProps} outlet={<Dashboard />} />}
      />
    </Routes>
  );
};

export default IndexRouter;

const defaultPublicRouteProps: Omit<PublicRouteProps, 'outlet'> = {
  isAuthenticated: Boolean(localStorage.getItem('trello-user-token')),
  authenticatedPath: '/'
};

const defaultPrivateRouteProps: Omit<PrivateRouteProps, 'outlet'> = {
  isAuthenticated: Boolean(localStorage.getItem('trello-user-token')),
  authenticationPath: '/signin'
};
