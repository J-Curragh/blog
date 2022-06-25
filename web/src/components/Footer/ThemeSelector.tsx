import React, { useContext, useState } from 'react';

import { ThemeColours } from '../../constants/Colors';
import { Selector } from './style';
import ThemeContext from '../../contexts/ThemeContext';
import { getThemeName } from '../../utils';

const ThemeSelector = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentTheme(ThemeColours[event.target.value]);
  };

  return (
    <Selector>
      <span>Select Theme: </span>
      <select value={getThemeName(currentTheme)} onChange={handleChange}>
        {Object.keys(ThemeColours).map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </Selector>
  );
};

export default ThemeSelector;
