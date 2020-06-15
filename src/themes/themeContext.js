import React from 'react';
import LightTheme from './light';
import DarkTheme from './dark';

export const themes = {
    light: {
      foreground: LightTheme.primaryColor,
      background: LightTheme.secondaryColor
    },
    dark: {
        foreground: DarkTheme.primaryColor,
        background: DarkTheme.secondaryColo
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.dark // default value
  );
