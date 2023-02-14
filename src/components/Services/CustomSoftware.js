import React from 'react';
import Service from './Service';

import Typography from '@mui/material/Typography';
import custom from '../../assets/Custom Software Icon.svg';

const servicesStyles = {
  pacificoSpan: {
    color: 'secondary.main',
    fontFamily: 'Pacifico',
  },
};

const CustomSoftware = () => {
  const bodySpan = (
    <Typography variant="span" sx={servicesStyles.pacificoSpan}>
      celebration.
    </Typography>
  );

  return (
    <Service
      title="Custom Software Development"
      subtitle="Save Energy. Save Time. Save Money."
      body="Complete digital solutions, from investigation to "
      bodySpan={bodySpan}
      image={custom}
      justify="flex-start"
      tab="/services/custom-software"
      index="3"
    />
  );
};

export default CustomSoftware;
