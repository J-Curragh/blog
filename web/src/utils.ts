/*
 * Helpful global utils
 */

import { ThemeColour, ThemeColours } from './constants/Colors';

// TODO: Fix this
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

export const getTagColour = (x: number, theme: ThemeColour) => {
  const tagColours = [
    theme.Pine,
    theme.Foam,
    theme.Iris,
    theme.Gold,
    theme.Love,
  ];
  return tagColours[x % tagColours.length];
};
