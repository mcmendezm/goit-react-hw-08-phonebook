import { AuthLink, AuthNavigation } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavigation>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Log In </AuthLink>
    </AuthNavigation>
  );
};
