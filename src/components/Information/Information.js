import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { informationStyles } from './styles';
import { LearnMoreButton } from '../UI/LearnMoreButton';

const Information = (props) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={informationStyles.grid}
    >
      <Grid item>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          gap={5}
          sx={informationStyles.tabs}
        >
          <Grid item sx={informationStyles.tab}>
            <Typography variant="body1" sx={informationStyles.title}>
              About us
            </Typography>
            <Typography variant="body2" sx={informationStyles.subtitle}>
              Let's get personal
            </Typography>
            <LearnMoreButton
              size="small"
              fill="white"
              color="common.white"
              borderColor="common.white"
              component="Link"
              to="/about"
            />
          </Grid>
          <Grid item sx={informationStyles.tab}>
            <Typography variant="body1" sx={informationStyles.title}>
              Contact us
            </Typography>
            <Typography variant="body2" sx={informationStyles.subtitle}>
              Say hello!
            </Typography>
            <LearnMoreButton
              size="small"
              fill="white"
              color="common.white"
              borderColor="common.white"
              component="Link"
              to="/about"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Information;
