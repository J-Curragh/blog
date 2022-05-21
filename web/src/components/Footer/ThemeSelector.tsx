import {ThemeColours} from "../../constants/Colors";

const ThemeSelector = () => {
  return (
    <>
      <span>Select Theme:</span>
      <select>
        {Object.keys(ThemeColours).map(theme => <option key={theme} value={theme}>{theme}</option>)}
      </select>
    </>
  )
}

export default ThemeSelector;