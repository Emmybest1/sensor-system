import React from 'react';

import { useTheme } from './use-theme.hook';

type ThemeProviderPropTypes = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderPropTypes> = ({ children }) => {
  const { SensorSystemThemeContext, theme } = useTheme();

  return useTheme !== undefined ? <SensorSystemThemeContext.Provider value={theme}>{children}</SensorSystemThemeContext.Provider> : null;
};

export default ThemeProvider;
