import { TextStyle } from "react-native";
import { colors } from "./colors";

// Font family: Urbanist (matches Figma). Loaded via @expo-google-fonts/urbanist in App.tsx.
// Figma weight names -> Urbanist font family keys
export const fontFamily = {
  regular: "Urbanist_400Regular",
  medium: "Urbanist_500Medium",
  semiBold: "Urbanist_600SemiBold",
  bold: "Urbanist_700Bold",
  extraBold: "Urbanist_800ExtraBold",
  black: "Urbanist_900Black",
};

type Style = TextStyle;

export const typography: Record<string, Style> = {
  // Big brand wordmark ("localz") on splash / auth headers
  brand: {
    fontFamily: fontFamily.black,
    fontSize: 40,
    color: colors.primary,
  },
  brandSmall: {
    fontFamily: fontFamily.black,
    fontSize: 28,
    color: colors.primary,
  },
  // Screen titles (e.g. "Discover Local Tables", "Verify Your Identity")
  h1: {
    fontFamily: fontFamily.extraBold,
    fontSize: 32,
    color: colors.textPrimary,
    lineHeight: 38,
  },
  h1Black: {
    fontFamily: fontFamily.black,
    fontSize: 28,
    color: colors.textPrimary,
    lineHeight: 34,
  },
  h2: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    color: colors.textPrimary,
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22.5,
  },
  bodyStrong: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    color: colors.textPrimary,
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.textSecondary,
  },
  buttonLabel: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    color: colors.onColor,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    color: colors.textSecondary,
  },
};
