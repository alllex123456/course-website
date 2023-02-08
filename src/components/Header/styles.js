import { theme } from '../../theme/theme';

export const headerStyles = {
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
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
  drawer: {
    '& .MuiDrawer-paper': { backgroundColor: 'primary.main' },
    '& .MuiButtonBase-root': {
      margin: 0,
      borderRadius: 0,
    },
  },

  drawerList: {
    width: '240px',
    color: 'common.white',
  },
  listItem: {
    '&.Mui-selected': { color: 'secondary.main' },
    ...theme.typography.tab,
    '.MuiTypography-root': {
      fontFamily: 'Raleway',
    },
  },

  listItemIcon: {
    color: 'common.white',
  },
};
