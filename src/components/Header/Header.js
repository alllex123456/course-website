import React from 'react';
import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

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
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img src={logo} alt="company logo" height={64} />
            <Tabs
              sx={headerStyles.tabs}
              textColor="secondary"
              value={value}
              onChange={handleChange}
            >
              <Tab sx={headerStyles.tab} label="Home" />
              <Tab sx={headerStyles.tab} label="Services" />
              <Tab sx={headerStyles.tab} label="The Revolution" />
              <Tab sx={headerStyles.tab} label="About Us" />
              <Tab sx={headerStyles.tab} label="Contact Us" />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              sx={headerStyles.freeEstimateButton}
            >
              Free estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Offset />
      <Outlet />
    </React.Fragment>
  );
};

export default Header;
