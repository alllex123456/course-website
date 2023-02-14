import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import { theme } from '../../theme/theme';

export const call2ActionStyles = {
  grid: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '50em',
    padding: '0 5em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
      height: '30em',
    },
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
    },
  },
  freeEstimateButton: {
    ...theme.typography.pacificoBtn,
    fontSize: '1.4rem',
    width: '12rem',
    height: '4rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      width: '8rem',
      height: '2rem',
    },
  },
  title: {
    color: 'primary.main',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  subtitle: {
    color: 'common.white',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem',
    },
  },
};
