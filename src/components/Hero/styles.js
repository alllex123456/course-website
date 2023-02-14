import { theme } from '../../theme/theme';

export const heroStyles = {
  grid: {
    marginTop: '4rem',
    marginBottom: '6rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem',
    },
  },
  gridItem: {
    textAlign: 'center',
  },
  innerGridItem: {
    display: 'flex',
  },
  header: {
    color: 'primary.main',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
  freeEstimateButton: {
    backgroundColor: 'secondary.main',
    fontFamily: 'Pacifico',
    textTransform: 'none',
    borderRadius: '50px',
    mr: '1rem',
    '&:hover': {
      backgroundColor: 'secondary.dark',
    },
  },
};
