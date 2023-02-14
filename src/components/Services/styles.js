import { theme } from '../../theme/theme';

export const servicesStyles = {
  grid: {
    marginTop: '4rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '2rem',
      marginBottom: '4rem',
      justifyContent: 'center',
    },
  },
  innerGridItem: {
    mb: '1rem',

    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      '& .MuiButtonBase-root': {
        margin: '0 auto',
      },
    },
  },
  header: {
    color: 'primary.main',
  },
};
