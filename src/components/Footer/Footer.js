import React from 'react';

import Box from '@mui/material/Box';

import { footerStyles } from './styles';
import footerImage from '../../assets/Footer Adornment.svg';

const Footer = () => {
  return (
    <Box component={'footer'} sx={footerStyles.footer}>
      <img src={footerImage} alt="footer black decoration" height="100%" />
    </Box>
  );
};

export default Footer;
