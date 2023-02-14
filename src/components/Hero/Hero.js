import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import cpu from '../../animations/cpu.svg';
import { LearnMoreButton } from '../UI/LearnMoreButton';
import { heroStyles } from './styles';
import { NavigationContext } from '../../context/Navigation';

const Hero = (props) => {
  const navigationContext = useContext(NavigationContext);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} justifyContent="center" sx={heroStyles.grid}>
        <Grid sm item sx={heroStyles.gridItem}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            direction="column"
            alignItems="center"
            sx={heroStyles.innerContainer}
          >
            <Grid item sx={heroStyles.innerGridItem}>
              <Typography variant="h2" sx={heroStyles.header}>
                Bringing West Technology <br />
                to the Midwest
              </Typography>
            </Grid>

            <Grid item sx={heroStyles.innerGridItem}>
              <Button
                variant="contained"
                component={Link}
                to="/estimate"
                onClick={() => {
                  navigationContext.changeTab('/estimate');
                  navigationContext.changeIndex(5);
                }}
                sx={heroStyles.freeEstimateButton}
              >
                Free Estimate
              </Button>
              <LearnMoreButton component="Link" to="/services" index="3" />
            </Grid>
          </Grid>
        </Grid>
        <Grid sm item>
          <img src={cpu} height={280} width={280} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
