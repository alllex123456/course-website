import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';

import { footerStyles } from './styles';
import footerImage from '../../assets/Footer Adornment.svg';
import { NavigationContext } from '../../context/Navigation';

const Footer = (props) => {
  const navigationContext = useContext(NavigationContext);

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
                onClick={() => {
                  navigationContext.changeTab('/home');
                  navigationContext.changeIndex(0);
                }}
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
                onClick={() => {
                  navigationContext.changeTab('/services');
                  navigationContext.changeIndex(1);
                }}
                sx={footerStyles.gridItem}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/services/custom-software"
                onClick={() => {
                  navigationContext.changeTab('/services');
                  navigationContext.changeIndex(1);
                }}
                sx={footerStyles.gridItem}
              >
                Custom software development
              </Grid>
              <Grid
                item
                component={Link}
                to="/services/mobile-app-software"
                onClick={() => {
                  navigationContext.changeTab('/services');
                  navigationContext.changeIndex(1);
                }}
                sx={footerStyles.gridItem}
              >
                Mobile app development
              </Grid>
              <Grid
                item
                component={Link}
                to="/services/website-development"
                onClick={() => {
                  navigationContext.changeTab('/services');
                  navigationContext.changeIndex(1);
                }}
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
                onClick={() => {
                  navigationContext.changeTab('/revolution');
                  navigationContext.changeIndex(2);
                }}
                sx={footerStyles.gridItem}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => {
                  navigationContext.changeTab('/revolution');
                  navigationContext.changeIndex(2);
                }}
                sx={footerStyles.gridItem}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => {
                  navigationContext.changeTab('/revolution');
                  navigationContext.changeIndex(2);
                }}
                sx={footerStyles.gridItem}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => {
                  navigationContext.changeTab('/revolution');
                  navigationContext.changeIndex(2);
                }}
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
                onClick={() => {
                  navigationContext.changeTab('/about');
                  navigationContext.changeIndex(3);
                }}
                sx={footerStyles.gridItem}
              >
                About us
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => {
                  navigationContext.changeTab('/about');
                  navigationContext.changeIndex(3);
                }}
                sx={footerStyles.gridItem}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => {
                  navigationContext.changeTab('/about');
                  navigationContext.changeIndex(3);
                }}
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
                onClick={() => {
                  navigationContext.changeTab('/contact');
                  navigationContext.changeIndex(4);
                }}
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
