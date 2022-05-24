import { ThemeColour, ThemeColours } from '../constants/Colors';
import React from 'react';

interface DefaultValueProps {
  currentTheme: ThemeColour;
  setCurrentTheme: React.Dispatch<React.SetStateAction<ThemeColour>>;
}

const defaultValue: DefaultValueProps = {
  currentTheme: ThemeColours['Seafoam Dark'],
  setCurrentTheme: () => {},
};

const ThemeContext = React.createContext(defaultValue);

export default ThemeContext;
