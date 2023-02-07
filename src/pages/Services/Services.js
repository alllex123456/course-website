import React from 'react';
import { Outlet } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <React.Fragment>
      <div>ServicesPage</div>
      <Outlet />
    </React.Fragment>
  );
};

export default ServicesPage;
