import styled from 'styled-components';

export const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  margin-top: 20px;
  margin-right: 0;
  width: 300px;
`;

export const ContactItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
  justify-content: space-between;
  padding: 3px 10px;
  width: 300px;
  height: 50px;
  background: rgb(161, 223, 255);
  border-radius: 10px;
  &:hover,
  :focus {
    box-shadow: 5px 5px 15px -1px rgba(186, 201, 216, 0.75);
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContactNameBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Button = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;

  cursor: pointer;
  background-color: transparent;
  border: 0;
  transition: all 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);

  &:hover,
  :focus {
    scale: 1.2;
  }
`;
