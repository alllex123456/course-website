import React from 'react';

import Service from './Service';

import website from '../../assets/website.svg';

const WebsiteDevelopment = (props) => {
  return (
    <Service
      title="Website Development"
      subtitle="Reach more. Discover more. Sell more."
      body="Optimized for Search Engines, built for speed."
      image={website}
      justify="flex-start"
      index="3"
      tab="/services/website-development"
    />
  );
};

export default WebsiteDevelopment;
