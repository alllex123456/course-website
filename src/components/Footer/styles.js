import { theme } from '../../theme/theme';

export const footerStyles = {
  footer: {
    backgroundColor: 'primary.main',
    height: '12rem',
    [theme.breakpoints.down('md')]: {
      height: '4rem',
    },
  },

  gridContainer: {
    color: 'common.white',
    fontSize: '0.8rem',
  },

  innerContainer: {
    margin: '2rem',
  },

  gridItem: {
    textDecoration: 'none',
    color: 'common.white',
    margin: '0.6em',
    '&:hover': {
      color: 'secondary.main',
    },
  },
};
