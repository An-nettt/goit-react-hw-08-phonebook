import React from 'react';
import { CardMedia, Stack, Typography } from '@mui/material';

import { Wrapper } from 'styled';

const Home = () => {
  const mainText = {
    title: 'Dear users! ',
    description: `The "Phone Book" site was created to store your contacts. And it will allow you to quickly get information about the phone numbers of your contacts. The search for the necessary information is carried out by name. Enter a word or part of a word to search. `,
    login:
      'If you are the first on this site, then please register. If you are already registered, please log in. All this can be done in the upper right panel.',
    image:
      'https://static8.depositphotos.com/1029554/813/i/950/depositphotos_8138615-stock-photo-old-style-phone-over-yellow.jpg',
    colorText: 'theme.text.primary.main',
  };

  return (
    <Wrapper>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          mt: '20px',
        }}
      >
        <div
          sx={{
            width: '20vw',
            height: '75vh',
          }}
        >
          <Typography component="h2" variant="h6" sx={{ mb: '15px' }}>
            {mainText.title}
          </Typography>
          <Typography component="h2" variant="h6" sx={{ mb: '15px' }}>
            {mainText.description}
          </Typography>
          <Typography component="h2" variant="h6">
            {mainText.login}
          </Typography>
        </div>

        <div
          sx={{
            width: '60vw',
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: '50vw', display: { xs: 'none', sm: 'block' } }}
            image={mainText.image}
            alt={mainText.imageLabel}
          />
        </div>
      </Stack>
    </Wrapper>
  );
};

export default Home;
