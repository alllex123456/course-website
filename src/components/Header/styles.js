import { theme } from '../../theme/theme';

export const headerStyles = {
  tabs: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    fontWeight: 700,
    minWidth: '24px',
  },
  freeEstimateButton: {
    ...theme.typography.pacificoBtn,
    marginLeft: '50px',
    marginRight: '25px',
  },
  logoBtn: {
    backgroundColor: 'transparent',
    padding: 0,
    height: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: '3.5rem',
    },
  },
  menu: {
    borderRadius: '0px',
    '& .MuiPaper-root': {
      backgroundColor: 'common.blue',
    },
  },
  menuItem: {
    ...theme.typography.tab,
    '&:hover': {
      color: 'secondary.main',
    },
  },
};
