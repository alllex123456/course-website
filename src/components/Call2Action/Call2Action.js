import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';

import { LearnMoreButton } from '../UI/LearnMoreButton';
import { theme } from '../../theme/theme';
import { call2ActionStyles } from './styles';
import { NavigationContext } from '../../context/Navigation';

const Call2Action = (props) => {
  const navigationContext = useContext(NavigationContext);
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      justifyContent={matchesSM ? 'center' : 'space-between'}
      alignItems="center"
      gap={5}
      sx={call2ActionStyles.grid}
    >
      <Grid item sx={call2ActionStyles.gridItem}>
        <Typography
          variant="h2"
          sx={call2ActionStyles.title}
          textAlign={matchesSM ? 'center' : 'left'}
        >
          Simple Software.
          <br />
          Revolutionary Results.
        </Typography>
        <Typography variant="body1" sx={call2ActionStyles.subtitle}>
          Take advantage of the 21st Century.
        </Typography>
        <LearnMoreButton component="Link" to="/about" index="4" />
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          onClick={() => {
            navigationContext.changeTab('/estimate');
            navigationContext.changeIndex(0);
          }}
          sx={call2ActionStyles.freeEstimateButton}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default Call2Action;
