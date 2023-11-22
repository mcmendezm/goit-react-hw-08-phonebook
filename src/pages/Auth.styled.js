import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
`;

export const Form = styled.form`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 18px;
`;

export const Input = styled.input`
  max-width: 300px;
  height: 30px;
  padding: 3px 5px;
  border-radius: 5px;
  border: 2px solid #a1dfff;
  font-size: 15px;
  margin-top: 10px;
  transition: all 250ms linear;
  align-items: center;

  &:active,
  &:focus {
    border: 2px solid teal;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 35px;
  margin: 10px 90px;
  background-color: #2874a6;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 17px;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    scale: 1.2;
    background-color: #a1dfff;
  }
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  color: #0597f2;
`;
