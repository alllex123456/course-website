import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';

import backArrow from '../../../assets/backArrow.svg';
import forwardArrow from '../../../assets/forwardArrow.svg';
import lightbulb from '../../../assets/bulb.svg';
import stopwatch from '../../../assets/stopwatch.svg';
import cash from '../../../assets/cash.svg';

import { theme } from '../../../theme/theme';
import { customSoftwareStyles } from './styles';
import { NavigationContext } from '../../../context/Navigation';

const CustomSoftwarePage = () => {
  const navigationContext = useContext(NavigationContext);
  const navigator = useNavigate();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container justifyContent="center" sx={customSoftwareStyles.grid}>
      <Grid
        container
        item
        columnSpacing={matchesMD ? 2 : 4}
        sx={customSoftwareStyles.innerContainer}
      >
        <Grid item sx={customSoftwareStyles.gridItem}>
          <IconButton
            sx={customSoftwareStyles.arrowLeft}
            onClick={() => {
              navigationContext.changeTab('/services');
              navigationContext.changeIndex(1);
              navigator(-1);
            }}
          >
            <img src={backArrow} alt="back arrow" />{' '}
          </IconButton>
        </Grid>
        <Grid item md>
          <Typography variant="h3" sx={customSoftwareStyles.header}>
            Custom Software Development
          </Typography>
          <Typography variant="bodyGrey" component="p">
            Wether you're replacing old software or inventing new solutions, Arc
            Development is here to help your business tackle technology.
          </Typography>
          <Typography variant="bodyGrey" component="p">
            Using regular commercial software leaves you with a lot of stuff you
            don't neet, without some of the stuff you do need, and ultimately
            controls the way you work. Without using any software at all you
            risk falling behind competitors and missing out on huge savings from
            increased efficiency.
          </Typography>
          <Typography variant="bodyGrey" component="p">
            Our custom solutions are designed from the ground up with your
            needs, wants and goals at the core. This collaborative process
            produces finely tuned software that is much more effective at
            improving your workflow and reducing costs than generalized options.
          </Typography>
          <Typography variant="bodyGrey" component="p">
            We create exactly what you want, exactly how you want it.
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            sx={customSoftwareStyles.arrowRight}
            onClick={() => {
              navigationContext.changeTab('/services');
              navigationContext.changeIndex(1);
              navigator('/services/mobile-app');
            }}
          >
            <img src={forwardArrow} alt="forward arrow" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        item
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid container item direction="column" alignItems="center" md>
          <Grid item>
            <Typography
              variant="h6"
              component="p"
              sx={customSoftwareStyles.iconTitle}
            >
              Save Energy
            </Typography>
          </Grid>

          <Grid item>
            <img src={lightbulb} />
          </Grid>
        </Grid>
        <Grid container item direction="column" alignItems="center" md>
          <Grid item>
            <Typography
              variant="h6"
              component="p"
              sx={customSoftwareStyles.iconTitle}
            >
              Save Time
            </Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} />
          </Grid>
        </Grid>
        <Grid container item direction="column" alignItems="center" md>
          <Grid item>
            <Typography
              variant="h6"
              component="p"
              sx={customSoftwareStyles.iconTitle}
            >
              Save Money
            </Typography>
          </Grid>
          <Grid item>
            <img src={cash} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftwarePage;
