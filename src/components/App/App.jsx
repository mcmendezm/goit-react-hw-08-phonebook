import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Layout } from '../Layout';
import { Register } from '../../pages/Register';
import { Login } from '../../pages/Login';
import { Contacts } from '../../pages/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/auth-operations';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={Register} redirectTo="/contacts" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          />
        </Route>
      </Routes>
    )
  );
};
