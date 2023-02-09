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
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';

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

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const handleCurrentListIndex = (event, index) =>
    props.setCurrentListIndex(index);

  const menuOptions = [
    { label: 'Custom software development', route: 'custom-software' },
    { label: 'Mobile app development', route: 'mobile-app-software' },
    { label: 'Website development', route: 'website-development' },
  ];

  const navOptions = [
    { label: 'Home', route: '/home', icon: <HomeIcon /> },
    {
      label: 'Services',
      route: '/services',
      icon: <DesignServicesIcon />,
      id: 'hover-menu-button',
      ariaControls: open ? 'hover-menu' : undefined,
      ariaHasPopup: 'true',
      ariaExpanded: open ? 'true' : undefined,
      onMouseOver: handleClick,
    },
    { label: 'The Revolution', route: '/revolution', icon: <AddRoadIcon /> },
    { label: 'About Us', route: '/about', icon: <InfoIcon /> },
    { label: 'Contact Us', route: '/contact', icon: <AlternateEmailIcon /> },
  ];

  const tabs = (
    <React.Fragment>
      <Tabs
        sx={headerStyles.tabs}
        textColor="secondary"
        value={props.currentTab}
      >
        {navOptions.map((item, index) => (
          <Tab
            key={index}
            id={item.id}
            aria-controls={item.ariaControls}
            aria-haspopup={item.ariaHasPopup}
            aria-expanded={item.ariaExpanded}
            onMouseOver={item.onMouseOver}
            component={Link}
            label={item.label}
            value={item.route}
            to={item.route}
            onClick={() => props.setCurrentTab(item.route)}
            sx={headerStyles.tab}
          />
        ))}
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
              props.setCurrentTab('/services');
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

  const list = (
    <React.Fragment>
      <Offset />
      <Box
        sx={headerStyles.drawerList}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {navOptions.map((item, index) => (
            <ListItemButton
              key={index}
              component={Link}
              value={item.route}
              to={item.route}
              selected={index === props.currentListIndex}
              onClick={(event) => {
                props.setCurrentTab(item.route);
                props.handleCurrentListIndex(event, index);
              }}
              divider
              sx={headerStyles.listItem}
            >
              <ListItemIcon sx={headerStyles.listItemIcon}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
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
        sx={headerStyles.drawer}
      >
        {list}
        <Button
          variant="contained"
          color="secondary"
          sx={headerStyles.freeEstimateButton}
        >
          Free estimate
        </Button>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer((prev) => !prev)}
        disableRipple
        sx={{ marginLeft: 'auto', color: 'white' }}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed" sx={headerStyles.appBar}>
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
