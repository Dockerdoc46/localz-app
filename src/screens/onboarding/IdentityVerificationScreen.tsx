import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { OnboardingStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { Button } from "@/components/Button";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 3:132 — "identity-verification"
type Props = NativeStackScreenProps<OnboardingStackParamList, "IdentityVerification">;

export function IdentityVerificationScreen({ navigation }: Props) {
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.body}>
        <View style={styles.headerBlock}>
          <View style={styles.progressRow}>
            <View style={[styles.progressBar, styles.progressBarActive]} />
            <View style={styles.progressBar} />
          </View>
          <Text style={typography.h1Black}>Verify Your Identity</Text>
          <Text style={typography.body}>
            Verification helps ensure trust and safety in the localz community.
          </Text>
        </View>

        <View style={styles.uploadOptions}>
          <Pressable style={[styles.uploadCard, styles.uploadCardPrimary]}>
            <Ionicons name="camera-outline" size={32} color={colors.primary} />
            <Text style={[typography.buttonLabel, { color: colors.primary }]}>
              Upload a Document
            </Text>
          </Pressable>
          <Pressable style={styles.uploadCard}>
            <Ionicons name="person-add-outline" size={32} color={colors.textSecondary} />
            <Text style={[typography.buttonLabel, { color: colors.textSecondary }]}>
              Take a Selfie
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.footer}>
        <Button label="Continue" onPress={() => navigation.navigate("CityLanguageSelection")} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  body: {
    padding: spacing.xl,
    gap: spacing.xl,
  },
  headerBlock: {
    gap: spacing.sm,
  },
  progressRow: {
    flexDirection: "row",
    gap: spacing.xs,
    marginBottom: spacing.xs,
  },
  progressBar: {
    height: 6,
    width: 60,
    borderRadius: 3,
    backgroundColor: colors.progressTrack,
  },
  progressBarActive: {
    backgroundColor: colors.danger,
  },
  uploadOptions: {
    gap: spacing.lg,
  },
  uploadCard: {
    height: 160,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
  },
  uploadCardPrimary: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: colors.primary,
  },
  footer: {
    padding: spacing.xl,
  },
});
