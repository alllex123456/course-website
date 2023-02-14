import { theme } from '../../../theme/theme';

export const customSoftwareStyles = {
  grid: {
    padding: '5em',
    maxWidth: '100rem',
    [theme.breakpoints.down('md')]: {
      padding: '1em',
    },
  },
  header: {
    color: 'primary.main',
  },
  iconTitle: {
    color: 'primary.main',
  },
  innerContainer: {
    mb: '8rem',
    [theme.breakpoints.down('md')]: {
      mb: '4rem',
    },
  },
};
