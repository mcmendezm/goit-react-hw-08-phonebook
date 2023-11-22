import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operations';
import { Container, Form, Label, Input, Button, Title } from './Auth.styled';

export const Login = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        alert('Error happened. Please try again');
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );

    setEmail('');
    setPassword('');
  };
  return (
    <Container>
      <Title>Log in</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </Container>
  );
};
