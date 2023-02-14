import { createContext } from 'react';

export const NavigationContext = createContext({
  currentTab: null,
  currentIndex: null,
  changeTab: (value) => {},
  changeIndex: (value) => {},
});
