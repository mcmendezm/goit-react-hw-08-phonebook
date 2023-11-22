import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { addContact } from '../../redux/operations';

import { FormTag, Label, Button, Input, Container } from './Form.styled';

export const Form = () => {
  const [name, setName] = useState('');

  const [number, setNumber] = useState('');
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        alert('Error happened. Please try again');
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const existInContacts = items.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (existInContacts) {
      setName('');
      setNumber('');
      return alert('This contact already exist in your phonebook');
    }
    dispatch(
      addContact({
        name,
        number,
      })
    );

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <h2>Add Contact</h2>

      <FormTag onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Number
          <Input
            variant="outline"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </Label>
        <Button
          style={{
            width: '130px',
          }}
          type="submit"
        >
          Add contact
        </Button>
      </FormTag>
    </Container>
  );
};
