import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = styled.nav`
  display: flex;
  gap: 10px;
`;

export const AuthLink = styled(NavLink)`
  gap: 10px;
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  &.active {
    color: #2874a6;
  }

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;
