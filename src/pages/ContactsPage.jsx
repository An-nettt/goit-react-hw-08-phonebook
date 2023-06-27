import React from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { Wrapper, Title, ContactsTitle } from '../styled';

const Contacts = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default Contacts;
