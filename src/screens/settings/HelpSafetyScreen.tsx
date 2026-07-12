import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScreenContainer } from "@/components/ScreenContainer";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 4:475 — "help-safety"
const LINKS: { icon: keyof typeof Ionicons.glyphMap; label: string }[] = [
  { icon: "people-outline", label: "Community Guidelines" },
  { icon: "person-add-outline", label: "Verify Identity" },
  { icon: "help-circle-outline", label: "FAQ & Support" },
  { icon: "document-text-outline", label: "Terms & Conditions" },
  { icon: "lock-closed-outline", label: "Privacy Policy" },
];

export function HelpSafetyScreen() {
  return (
    <ScreenContainer edges={["top"]}>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={typography.h1Black}>Help &amp; Safety</Text>

        <Pressable style={styles.reportCard}>
          <View style={styles.reportIcon}>
            <Ionicons name="shield-checkmark-outline" size={24} color={colors.primary} />
          </View>
          <View style={styles.reportInfo}>
            <Text style={[typography.bodyStrong, { color: colors.onColor }]}>
              Report a Problem
            </Text>
            <Text style={[typography.body, { color: colors.onColor, opacity: 0.8 }]}>
              We&apos;re here to help 24/7
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={20} color={colors.onColor} />
        </Pressable>

        <View style={styles.list}>
          {LINKS.map((link) => (
            <Pressable key={link.label} style={styles.row}>
              <Ionicons name={link.icon} size={20} color={colors.textPrimary} />
              <Text style={[typography.body, styles.rowLabel]}>{link.label}</Text>
              <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
            </Pressable>
          ))}
        </View>

        <View style={styles.contactCard}>
          <Text style={typography.bodyStrong}>Need to talk to us?</Text>
          <Text style={typography.label}>supporto@localz.com</Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: spacing.xl,
    gap: spacing.xxl,
    paddingBottom: spacing.xxxl,
  },
  reportCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
    backgroundColor: colors.primary,
    borderRadius: radius.card,
    padding: spacing.xl,
  },
  reportIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  reportInfo: {
    flex: 1,
    gap: 2,
  },
  list: {
    gap: spacing.xl,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  rowLabel: {
    flex: 1,
    fontSize: 15,
    color: colors.textPrimary,
  },
  contactCard: {
    backgroundColor: "#D9C7B8",
    borderRadius: radius.card,
    padding: spacing.xl,
    alignItems: "center",
    gap: spacing.sm,
  },
});
