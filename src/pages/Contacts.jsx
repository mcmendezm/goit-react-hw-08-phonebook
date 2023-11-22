import { ContactList } from 'components/ContactList/ContactList';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

export const Contacts = () => {
  return (
    <div style={{ display: 'block', margin: '20px 80px' }}>
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
};
