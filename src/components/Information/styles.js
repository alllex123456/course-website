import infoBackground from '../../assets/infoBackground.svg';
import { theme } from '../../theme/theme';

export const informationStyles = {
  grid: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '50em',
    [theme.breakpoints.down('md')]: {
      height: '30em',
    },
  },
  tabs: {
    padding: '0 5em',
    width: '60vw',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 1em',
    },
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  title: {
    fontFamily: 'Raleway',
    fontWeight: 700,
    fontSize: '1.5rem',
    color: 'common.white',
  },
  subtitle: {
    fontFamily: 'Raleway',
    fontWeight: 500,
    fontSize: '1rem',
    color: 'common.white',
  },
};
