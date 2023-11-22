import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { selectUserLoggedIn } from '../../redux/auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { Container, Header } from './MenuBar.styled';

export const MenuBar = () => {
  const loggedIn = useSelector(selectUserLoggedIn);
  return (
    <div
      style={{
        display: 'block',
        borderBottom: '3px solid #2874A6',
        backgroundColor: '#a1dfff',
      }}
    >
      <Container>
        <Header>
          <Navigation />
          {loggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
      </Container>
    </div>
  );
};
