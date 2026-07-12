import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing, typography } from "@/theme";

type Props = {
  isHostMode: boolean;
  onChange: (hostMode: boolean) => void;
};

/** Guest / Localz segmented control shown on both profile variants (Figma 59:2, 4:549). */
export function ProfileModeToggle({ isHostMode, onChange }: Props) {
  return (
    <View style={styles.track}>
      <Pressable
        style={[styles.segment, !isHostMode ? styles.segmentActive : null]}
        onPress={() => onChange(false)}
      >
        <Text style={!isHostMode ? styles.labelActive : styles.label}>Guest</Text>
      </Pressable>
      <Pressable
        style={[styles.segment, isHostMode ? styles.segmentActive : null]}
        onPress={() => onChange(true)}
      >
        <Text style={isHostMode ? styles.labelActive : styles.label}>Localz</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    flexDirection: "row",
    backgroundColor: colors.border,
    borderRadius: radius.pill,
    padding: 4,
    width: "100%",
  },
  segment: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: radius.pill,
  },
  segmentActive: {
    backgroundColor: colors.surface,
  },
  label: {
    fontFamily: typography.bodyStrong.fontFamily,
    fontSize: 14,
    color: colors.textSecondary,
  },
  labelActive: {
    fontFamily: typography.buttonLabel.fontFamily,
    fontSize: 14,
    color: colors.textPrimary,
  },
});
