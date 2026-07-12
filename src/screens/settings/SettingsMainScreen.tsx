import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScreenContainer } from "@/components/ScreenContainer";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 4:395 — "settings-main"
function SettingsGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <View style={styles.section}>
      <Text style={typography.h2}>{title}</Text>
      <View style={styles.card}>
        {items.map((item, i) => (
          <Pressable
            key={item}
            style={[styles.row, i < items.length - 1 ? styles.rowBorder : null]}
          >
            <Text style={[typography.body, { fontSize: 15, color: colors.textPrimary }]}>
              {item}
            </Text>
            <Ionicons name="chevron-forward" size={16} color={colors.textSecondary} />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export function SettingsMainScreen() {
  return (
    <ScreenContainer edges={["top"]}>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={typography.h1Black}>Settings</Text>

        <View style={styles.profileCard}>
          <View style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={typography.h2}>Marco Rossi</Text>
            <Text style={typography.label}>marco.rossi@email.it</Text>
          </View>
          <Text style={styles.editLink}>Edit</Text>
        </View>

        <SettingsGroup
          title="Account"
          items={["Personal Information", "Security", "Notifications"]}
        />
        <SettingsGroup
          title="Payments"
          items={["Payment Methods", "Wallet & Transactions", "Coupons"]}
        />
        <SettingsGroup title="Preferences" items={["Language", "Time Zone", "Privacy"]} />
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
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.xl,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.border,
  },
  profileInfo: {
    flex: 1,
    gap: 2,
  },
  editLink: {
    fontFamily: typography.buttonLabel.fontFamily,
    fontSize: 14,
    color: colors.primary,
  },
  section: {
    gap: spacing.md,
  },
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing.xl,
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
});
