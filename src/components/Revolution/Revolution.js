import React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { revolutionStyles } from './styles';
import { LearnMoreButton } from '../UI/LearnMoreButton';

const Revolution = (props) => {
  return (
    <Grid
      container
      sx={revolutionStyles.grid}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Card sx={revolutionStyles.card}>
          <CardContent sx={revolutionStyles.cardContent}>
            <Typography variant="h2" sx={revolutionStyles.header}>
              The Revolution
            </Typography>
            <Typography variant="bodyGrey" component="p">
              Visionary insights coupled with cutting-edge technology is a
              recipe for revolution.
            </Typography>
            <LearnMoreButton component="Link" to="/about" index="3" />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Revolution;
