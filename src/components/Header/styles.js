import { theme } from '../../theme/theme';

export const headerStyles = {
  tabs: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: '24px',
  },
  freeEstimateButton: {
    ...theme.typography.pacificoBtn,
    marginLeft: '50px',
    marginRight: '25px',
  },
};
