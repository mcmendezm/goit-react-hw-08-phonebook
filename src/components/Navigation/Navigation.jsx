import { useSelector } from 'react-redux';

import { selectUserLoggedIn } from 'redux/auth/selectors';
import { NavBar, BarLink } from './Navigation.styled';

export const Navigation = () => {
  const logged = useSelector(selectUserLoggedIn);
  return (
    <NavBar style={{ display: 'flex', gap: '10px' }}>
      <BarLink to="/">Home</BarLink>

      {logged && <BarLink to="/contacts">My contacts</BarLink>}
    </NavBar>
  );
};
