import React from 'react';

import Grid from '@mui/material/Grid';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Revolution from '../components/Revolution/Revolution';
import Information from '../components/Information/Information';
import Call2Action from '../components/Call2Action/Call2Action';

const HomePage = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Hero />
      </Grid>
      <Grid item>
        <Services />
      </Grid>
      <Grid item>
        <Revolution />
      </Grid>
      <Grid item>
        <Information />
      </Grid>
      <Grid item>
        <Call2Action />
      </Grid>
    </Grid>
  );
};

export default HomePage;
