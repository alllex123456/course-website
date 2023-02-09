import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';

import { footerStyles } from './styles';
import footerImage from '../../assets/Footer Adornment.svg';

const Footer = (props) => {
  return (
    <Box component={'footer'} sx={footerStyles.footer}>
      <Hidden mdDown>
        <Grid
          container
          position="absolute"
          justifyContent="center"
          sx={footerStyles.gridContainer}
        >
          <Grid item>
            <Grid container sx={footerStyles.innerContainer}>
              <Grid
                item
                component={Link}
                to="/home"
                onClick={() => props.setCurrentTab('/home')}
                sx={footerStyles.gridItem}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" sx={footerStyles.innerContainer}>
              <Grid
                item
                component={Link}
                to="/services"
                onClick={() => props.setCurrentTab('/services')}
                sx={footerStyles.gridItem}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/custom-software"
                onClick={() => props.setCurrentTab('/services')}
                sx={footerStyles.gridItem}
              >
                Custom software development
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobile-app-software"
                onClick={() => props.setCurrentTab('/services')}
                sx={footerStyles.gridItem}
              >
                Mobile app development
              </Grid>
              <Grid
                item
                component={Link}
                to="/website-development"
                onClick={() => props.setCurrentTab('/services')}
                sx={footerStyles.gridItem}
              >
                Website development
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" sx={footerStyles.innerContainer}>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => props.setCurrentTab('/revolution')}
                sx={footerStyles.gridItem}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => props.setCurrentTab('/revolution')}
                sx={footerStyles.gridItem}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => props.setCurrentTab('/revolution')}
                sx={footerStyles.gridItem}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => props.setCurrentTab('/revolution')}
                sx={footerStyles.gridItem}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" sx={footerStyles.innerContainer}>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => props.setCurrentTab('/about')}
                sx={footerStyles.gridItem}
              >
                About us
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => props.setCurrentTab('/about')}
                sx={footerStyles.gridItem}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => props.setCurrentTab('/about')}
                sx={footerStyles.gridItem}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container sx={footerStyles.innerContainer}>
              <Grid
                item
                component={Link}
                to="/contact"
                onClick={() => props.setCurrentTab('/contact')}
                sx={footerStyles.gridItem}
              >
                Contact us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img src={footerImage} alt="footer black decoration" height="100%" />
    </Box>
  );
};

export default Footer;
