import styled from 'styled-components';

export const FormTag = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid #a1dfff;
  border-radius: 5px;
  padding: 2px 5px;
`;

export const Button = styled.button`
  font-size: 15px;
  display: block;
  width: 150px;
  height: 30px;
  margin: 10px 90px;
  border: 0px;
  border-radius: 5px;
  background: #2874a6;
  color: white;
  &:hover,
  :focus {
    box-shadow: 3px 3px 10px -1px rgba(219, 213, 213, 0.75);
    scale: 1.1;
    background: #a1dfff;
  }
`;
