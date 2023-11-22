import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from '../redux/auth/auth-operations';
import { Container, Form, Label, Input, Button, Title } from './Auth.styled';

export const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
      register({
        name,
        email,
        password,
      })
    );

    setPassword('');
    setEmail('');
    setName('');
  };

  return (
    <Container>
      <Title>Register</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input type="text" name="name" onChange={handleChange} value={name} />
        </Label>
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
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};
