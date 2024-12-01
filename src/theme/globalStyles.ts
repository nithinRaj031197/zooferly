import { StyleSheet } from "react-native";
import palette from "./palette"; // Import your color palette for consistency

const globalStyles = StyleSheet.create({
  // 1. Containers
  container: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: palette.background,
  },
  card: {
    backgroundColor: palette.white,
    borderRadius: 8,
    shadowColor: palette.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 16,
  },

  // 2. Text
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: palette.textPrimary,
    marginBottom: 8,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "500",
    color: palette.textSecondary,
    marginBottom: 4,
  },
  bodyText: {
    fontSize: 14,
    color: palette.textPrimary,
    lineHeight: 20,
  },
  smallText: {
    fontSize: 12,
    color: palette.textSecondary,
  },
  linkText: {
    fontSize: 14,
    color: palette.primary,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  // 3. Buttons
  button: {
    backgroundColor: palette.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: palette.white,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: palette.secondary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  // 4. Inputs
  inputField: {
    borderWidth: 1,
    borderColor: palette.textSecondary,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: palette.textPrimary,
    backgroundColor: palette.white,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 12,
    color: palette.danger,
    marginTop: -8,
    marginBottom: 8,
  },

  // 5. Spacing and Layout Helpers
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spacingSmall: {
    margin: 8,
  },
  spacingMedium: {
    margin: 16,
  },
  spacingLarge: {
    margin: 24,
  },

  // 6. Shadows (Reusable styles for shadow effects)
  shadowSmall: {
    shadowColor: palette.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  shadowMedium: {
    shadowColor: palette.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default globalStyles;
