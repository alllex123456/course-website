import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from '@emotion/styled';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import logo from '../../assets/logo.svg';
import { headerStyles } from './styles';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Header = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [currentTab, setCurrentTab] = useState(
    `/${window.location.pathname.split('/')[1]}`
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuOptions = [
    { label: 'Custom software development', route: 'custom-software' },
    { label: 'Mobile app development', route: 'mobile-app-software' },
    { label: 'Website development', route: 'website-development' },
  ];

  const tabs = (
    <React.Fragment>
      <Tabs sx={headerStyles.tabs} textColor="secondary" value={currentTab}>
        <Tab
          component={Link}
          value="/home"
          to="/home"
          sx={headerStyles.tab}
          label="Home"
          onClick={() => setCurrentTab('/home')}
        />
        <Tab
          component={Link}
          value="/services"
          to="/services"
          sx={headerStyles.tab}
          label="Services"
          onClick={() => setCurrentTab('/services')}
          id="hover-menu-button"
          aria-controls={open ? 'hover-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onMouseOver={handleClick}
        />
        <Tab
          component={Link}
          value="/revolution"
          to="/revolution"
          sx={headerStyles.tab}
          label="The Revolution"
          onClick={() => setCurrentTab('/revolution')}
        />
        <Tab
          component={Link}
          value="/about"
          to="/about"
          sx={headerStyles.tab}
          label="About Us"
          onClick={() => setCurrentTab('/about')}
        />
        <Tab
          component={Link}
          value="/contact"
          to="/contact"
          sx={headerStyles.tab}
          label="Contact Us"
          onClick={() => setCurrentTab('/contact')}
        />
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        sx={headerStyles.freeEstimateButton}
      >
        Free estimate
      </Button>
      <Menu
        id="hover-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'hover-menu-button',
          onMouseLeave: handleClose,
        }}
        elevation={0}
        sx={headerStyles.menu}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={`/services/${option.route}`}
            onClick={(event) => {
              setCurrentTab('/services');
              handleClose();
            }}
            sx={headerStyles.menuItem}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <Box>sdghfg</Box>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer((prev) => !prev)} disableRipple>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link}
              value="/home"
              to="/home"
              sx={headerStyles.logoBtn}
              disableRipple
            >
              <img src={logo} alt="company logo" height="100%" />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Offset />
      <Outlet />
    </React.Fragment>
  );
};

export default Header;
