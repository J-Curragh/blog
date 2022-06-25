import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeColour, ThemeColours } from "../constants/Colors";
import ThemeContext from "./ThemeContext";

interface ThemeProps {
  children: ReactNode;
}

const Theme = ({ children }: ThemeProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColour>(ThemeColours['Seafoam Dark'])
  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )


};

export default Theme;
