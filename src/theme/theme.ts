// src/theme/theme.ts

import palette, { lightPalette, darkPalette } from "./palette";

// Common theme structure
const baseTheme = {
  spacing: (factor: number) => factor * 8, // Utility for spacing
  typography: {
    fontSizeSmall: 12,
    fontSizeMedium: 16,
    fontSizeLarge: 20,
    fontWeightLight: "300",
    fontWeightRegular: "400",
    fontWeightBold: "700",
  },
};

// Light theme
export const lightTheme = {
  colors: lightPalette,
  ...baseTheme,
};

// Dark theme
export const darkTheme = {
  colors: darkPalette,
  ...baseTheme,
};

// Default theme (fallback or shared utility theme)
const theme = {
  colors: palette,
  ...baseTheme,
};

export type ThemeType = typeof lightTheme;
export default theme;
