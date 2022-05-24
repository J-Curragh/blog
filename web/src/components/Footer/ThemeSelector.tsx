import React, { useContext } from 'react';

import { ThemeColours } from '../../constants/Colors';
import { Selector } from './style';
import ThemeContext from '../../contexts/ThemeContext';

const ThemeSelector = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(currentTheme);
    setCurrentTheme(ThemeColours[event.target.value]);
  };

  return (
    <Selector>
      <span>Select Theme: </span>
      <select onChange={handleChange}>
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
