import React from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { Wrapper, Title } from '../styled';
import { Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

const Contacts = () => {
  return (
    <Wrapper>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          mt: '20px',
        }}
      >
        <Item
          sx={{
            width: '30vw',
            height: '75vh',
          }}
        >
          <Title>Add Contact</Title>
          <ContactForm />
        </Item>

        <Item
          sx={{
            width: '40vw',
          }}
        >
          <Title>My Contacts</Title>
          <Filter />
          <ContactList />
        </Item>
      </Stack>
    </Wrapper>
  );
};

export default Contacts;
