import { useState, createContext } from 'react';

import { darkTheme, lightTheme, ITheme } from './use-theme.util';

export const useTheme = () => {
  const [theme, setTheme] = useState<ITheme>(lightTheme);

  const SensorSystemThemeContext = createContext(lightTheme);

  const updateTheme = () => {
    if (theme.variant === 'light') {
      setTheme(darkTheme);

      return;
    }

    setTheme(lightTheme);
  };

  return { SensorSystemThemeContext, theme, updateTheme };
};
