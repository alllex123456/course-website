import React from 'react';

import Service from './Service';

import mobile from '../../assets/mobile.svg';

const MobileApp = (props) => {
  return (
    <Service
      title="iOS/Android App Development"
      subtitle="Extend Functionality. Extend Access. Increase Engagement."
      body="Integrate your web experience or create a standalone app with either mobile platform."
      image={mobile}
      justify="flex-end"
      index="3"
      tab="/services/mobile-app"
    />
  );
};

export default MobileApp;
