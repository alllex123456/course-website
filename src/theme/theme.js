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
    tab: {
      fontFamily: 'Raleway',
      fontSize: '0.8rem',
      textTransform: 'none',
      fontWeight: 700,
      color: 'common.white',
    },
    pacificoBtn: {
      fontFamily: 'Pacifico',
      fontSize: '0.8rem',
      textTransform: 'none',
      color: 'common.white',
      borderRadius: '50px',
    },
  },
});
