import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  gap: 10px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 80px;
  padding: 5px;
  color: white;
  font-size: 15px;
  background-color: #2874a6;
  border: 1px solid #0597f2;
  border-radius: 5px;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    background-color: #0597f2;
    color: white;
    scale: 1.1;
  }
`;
export const Text = styled.p`
  display: block;
  font-weight: 600;

  padding: 0;
  margin: 0;
`;
