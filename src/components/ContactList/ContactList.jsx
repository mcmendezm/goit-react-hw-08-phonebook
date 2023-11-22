import { useEffect } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import { useDispatch, useSelector } from 'react-redux';

import { deleteContact, fetchContacts } from 'redux/operations';
import { Container } from '../../pages/Auth.styled';
import {
  selectIsLoading,
  selectVisibleContacts,
  selectError,
} from 'redux/selectors';

import {
  ContactsList,
  ContactItem,
  ButtonStyle,
  ContactNameBox,
} from './ContacList.styled';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Data is loading</p>}
      {error && <p>{error}</p>}
      <Container>
        <ContactsList>
          {contacts.length > 0 &&
            contacts.map(({ id, name, number }) => {
              return (
                <ContactItem key={id}>
                  <ContactNameBox>
                    <BsTelephoneFill style={{ color: '#2874A6' }} />
                    {name} : {number}
                  </ContactNameBox>
                  <ButtonStyle onClick={() => dispatch(deleteContact(id))}>
                    <AiOutlineClose
                      style={{
                        color: '#2874A6',
                        width: '20px',
                        height: '20px',
                      }}
                    />
                  </ButtonStyle>
                </ContactItem>
              );
            })}
        </ContactsList>
      </Container>
    </>
  );
};
