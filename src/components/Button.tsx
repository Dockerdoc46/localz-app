import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import { colors, radius, typography } from "@/theme";

type Variant = "primary" | "secondary";

type Props = {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  fullRadius?: boolean; // true = pill-style CTA (radius/outer), false = card radius
};

/** btn-Get Started / btn-Avanti / btn-Registrati / btn-Accedi ... from Figma */
export function Button({
  label,
  onPress,
  variant = "primary",
  disabled,
  loading,
  style,
  fullRadius = true,
}: Props) {
  const isPrimary = variant === "primary";
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.base,
        { borderRadius: fullRadius ? radius.outer : radius.card },
        isPrimary ? styles.primary : styles.secondary,
        disabled ? styles.disabled : null,
        pressed ? styles.pressed : null,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? colors.onColor : colors.primary} />
      ) : (
        <Text
          style={[
            typography.buttonLabel,
            !isPrimary ? { color: colors.textPrimary } : null,
          ]}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 56,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.85,
  },
});
