import React from "react";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";
import { colors, radius, typography } from "@/theme";

type Props = {
  label: string;
  active?: boolean;
  onPress?: () => void;
  size?: "sm" | "md";
  style?: ViewStyle;
};

/** Pill/chip used for filters, meal-type tags, dietary tags across the app. */
export function Chip({ label, active, onPress, size = "md", style }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.base,
        size === "sm" ? styles.sm : styles.md,
        active ? styles.active : styles.inactive,
        style,
      ]}
    >
      <Text
        style={[
          size === "sm" ? typography.caption : typography.label,
          { fontFamily: typography.bodyStrong.fontFamily },
          active ? styles.activeText : styles.inactiveText,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.pill,
    alignItems: "center",
    justifyContent: "center",
  },
  sm: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  md: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  active: {
    backgroundColor: colors.primary,
  },
  inactive: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  activeText: {
    color: colors.onColor,
  },
  inactiveText: {
    color: colors.textPrimary,
  },
});
