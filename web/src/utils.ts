/*
 * Helpful global utils
 */

import { ThemeColour, ThemeColours } from './constants/Colors';

export const getThemeName = (theme: ThemeColour) => {
  const availableThemes = Object.keys(ThemeColours);
  return availableThemes.find(
    (currentTheme) =>
      ThemeColours[currentTheme].Base == theme.Base &&
      ThemeColours[currentTheme].Primary == theme.Primary &&
      ThemeColours[currentTheme].Emphasis == theme.Emphasis &&
      ThemeColours[currentTheme].PrimaryText == theme.PrimaryText &&
      ThemeColours[currentTheme].SubtitleText == theme.SubtitleText
  );
};
