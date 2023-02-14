import { createTheme } from '@mui/material';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

export const theme = createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    tab: {
      fontFamily: 'Raleway',
      fontSize: '0.8rem',
      textTransform: 'none',
      color: 'common.white',
      opacity: 0.8,
      '&: hover': {
        opacity: 1,
      },
    },
    bodyGrey: {
      color: '#999',
    },
    pacificoBtn: {
      fontFamily: 'Pacifico',
      fontSize: '0.8rem',
      textTransform: 'none',
      color: 'common.white',
      backgroundColor: 'secondary.main',
      borderRadius: '50px',
      '&:hover': {
        backgroundColor: 'secondary.dark',
      },
    },
  },
});
