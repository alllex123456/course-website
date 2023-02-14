import React from 'react';
import Grid from '@mui/material/Grid';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = (props) => {
  return (
    <Grid container direction="column" sx={{ minHeight: '100vh' }}>
      <Grid item>
        <Header
          currentTab={props.currentTab}
          setCurrentTab={props.setCurrentTab}
          currentListIndex={props.currentListIndex}
          setCurrentListIndex={props.setCurrentListIndex}
        />
      </Grid>
      <Grid item>
        <main>{props.children}</main>
      </Grid>
      <Grid item sx={{ marginTop: 'auto' }}>
        <Footer
          currentTab={props.currentTab}
          setCurrentTab={props.setCurrentTab}
          currentListIndex={props.currentListIndex}
          setCurrentListIndex={props.setCurrentListIndex}
        />
      </Grid>
    </Grid>
  );
};

export default Layout;
