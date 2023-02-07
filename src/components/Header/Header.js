import React, { useState } from 'react';
import {
  Outlet,
  MemoryRouter,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
  const [currentTab, setCurrentTab] = useState(window.location.pathname);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <img src={logo} alt="company logo" height={64} />
            </Button>
            <Tabs
              sx={headerStyles.tabs}
              textColor="secondary"
              value={currentTab}
            >
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
            >
              <MenuItem
                component={Link}
                to="/services/software-development"
                onClick={() => {
                  handleClose();
                  setCurrentTab('/services');
                }}
              >
                Custom software development
              </MenuItem>
              <MenuItem
                component={Link}
                to="/services/mobile-app-development"
                onClick={handleClose}
              >
                Mobile app development
              </MenuItem>
              <MenuItem
                component={Link}
                to="/services/website-development"
                onClick={handleClose}
              >
                Website development
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Offset />
      <Outlet />
    </React.Fragment>
  );
};

export default Header;
