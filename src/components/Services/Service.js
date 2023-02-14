import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { servicesStyles } from './styles';
import { LearnMoreButton } from '../UI/LearnMoreButton';

const Service = ({
  title,
  subtitle,
  body,
  bodySpan,
  image,
  justify,
  index,
  tab,
}) => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent={justify}
        sx={servicesStyles.grid}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item sx={servicesStyles.innerGridItem}>
              <Typography variant="h3" sx={servicesStyles.header}>
                {title}
              </Typography>
              <Typography variant="bodyGrey" component="p">
                {subtitle}
              </Typography>
            </Grid>
            <Grid item sx={servicesStyles.innerGridItem}>
              <Typography
                variant="bodyGrey"
                component="p"
                sx={{ mb: '0.5rem' }}
              >
                {body}
                {bodySpan}
              </Typography>
              <LearnMoreButton component="Link" to={tab} index={index} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ height: '10rem' }}>
          <img src={image} height="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Service;
