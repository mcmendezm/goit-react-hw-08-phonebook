import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  align-items: center;
`;
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
  width: 455px;
  height: 30px;
  border: 1px solid #049dd9;
  border-radius: 5px;
  padding: 2px 5px;
`;

export const Button = styled.button`
  font-size: 15px;
  display: block;
  width: 467px;
  height: 35px;
  margin-top: 15px;
  border: 0px;
  border-radius: 5px;
  background: #049dd9;
  color: white;

  transition: all 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);

  &:hover,
  :focus {
    box-shadow: 3px 3px 10px -1px rgba(219, 213, 213, 0.75);
    scale: 1.03;
  }
`;
