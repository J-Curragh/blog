import {ThemeColours} from "../../constants/Colors";

const ThemeSelector = () => {
  return (
    <div>
      <span>Select Theme:</span>
      <select>
        {Object.keys(ThemeColours).map(theme => <option key={theme} value={theme}>{theme}</option>)}
      </select>
    </div>
  )
}

export default ThemeSelector;