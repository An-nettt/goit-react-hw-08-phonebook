import React from 'react';

// import PropTypes from 'prop-types';
import { CardMedia, Stack, Typography } from '@mui/material';
// import styled from '@emotion/styled';
import { Wrapper } from 'styled';

const Home = () => {
  const mainFeaturedPost = {
    title: 'Dear users! ',
    description: `The "Phone Book" site was created to store your contacts. And it will allow you to quickly get information about the phone numbers of your contacts. The search for the necessary information is carried out by name. Enter a word or part of a word to search.`,
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
          <Typography component="h2" variant="h6">
            {mainFeaturedPost.title}
          </Typography>
          <Typography component="h2" variant="h6">
            {mainFeaturedPost.description}
          </Typography>
          {/* <Typography variant="subtitle1" paragraph>
            {mainFeaturedPost.description}
          </Typography> */}
        </div>

        <div
          sx={{
            width: '60vw',
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: '50vw', display: { xs: 'none', sm: 'block' } }}
            image={mainFeaturedPost.image}
            alt={mainFeaturedPost.imageLabel}
          />
        </div>
      </Stack>
    </Wrapper>
  );
};

export default Home;

/* <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          > */
//  </Box>
//   </Grid>
// </Grid>
