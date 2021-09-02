import React from 'react';

function getInitialColorMode() {
  const persistedColorPreference = localStorage.theme;
  const hasPersistedPreference = typeof persistedColorPreference === 'string';

  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }

  return 'light';
}

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(getInitialColorMode);
  const setColorMode = value => {
    rawSetColorMode(value);
    // Set Tailwind color mode
    if (value == 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Persist on update
    localStorage.theme = value;
  };
  return <ThemeContext.Provider value={{ colorMode, setColorMode }}>{children}</ThemeContext.Provider>;
};