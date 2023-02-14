import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import ButtonArrow from '../UI/ButtonArrow';
import { theme } from '../../theme/theme';
import { NavigationContext } from '../../context/Navigation';

export const LearnMoreButton = (props) => {
  const navigationContext = useContext(NavigationContext);

  const buttonStyles = {
    width: props.width || '10rem',
    color: props.color || 'primary.main',
    textTransform: 'none',
    borderColor: props.borderColor || 'primary.main',
    borderRadius: '50px',
    display: 'flex',
    gap: '0.8rem',
    '&:hover': {
      borderColor: props.borderColor || 'primary.main',
    },
  };

  if (props.component === 'Link') {
    return (
      <Button
        component={Link}
        to={props.to}
        variant="outlined"
        size={props.size}
        sx={buttonStyles}
        onClick={() => {
          navigationContext.changeTab(props.to);
          navigationContext.changeIndex(props.index);
        }}
      >
        Learn more
        <ButtonArrow
          width={20}
          height={20}
          fill={props.fill || theme.palette.primary.main}
        />
      </Button>
    );
  }

  return (
    <Button variant="outlined" size={props.size} sx={buttonStyles}>
      Learn more
      <ButtonArrow
        width={20}
        height={20}
        fill={props.fill || theme.palette.primary.main}
      />
    </Button>
  );
};
