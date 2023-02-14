import revolutionBackground from '../../assets/repeatingBackground.svg';
import { theme } from '../../theme/theme';

export const revolutionStyles = {
  grid: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '50em',
    margin: '3em 0',
    [theme.breakpoints.down('md')]: {
      height: '40em',
    },
  },
  card: {
    margin: '10em 0',
    padding: '5em',
    [theme.breakpoints.down('md')]: {
      margin: '5em 1em',
      padding: '3em',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
    textAlign: 'center',
  },
  header: {
    fontFamily: 'Pacifico',
    color: 'primary.main',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
};
