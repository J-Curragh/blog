import { ThemeColours } from '../../constants/Colors';
import { Selector } from './style';

const ThemeSelector = () => {
  return (
    <Selector>
      <span>Select Theme:</span>
      <select>
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
