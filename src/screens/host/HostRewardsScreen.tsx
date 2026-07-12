import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScreenContainer } from "@/components/ScreenContainer";
import { Button } from "@/components/Button";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 4:176 — "host-rewards"
const REDEEMABLES = [
  { icon: "🛒", title: "Grocery Voucher", subtitle: "€10 off grocery shopping" },
  { icon: "🧺", title: "Local Products Basket", subtitle: "Local km 0 selection" },
  { icon: "🌟", title: "Star Chef Badge", subtitle: "Featured profile" },
];

export function HostRewardsScreen() {
  return (
    <ScreenContainer edges={["top"]}>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={typography.h2}>Your Rewards</Text>

        <View style={styles.heroCard}>
          <View style={styles.heroRow}>
            <View style={styles.trophy}>
              <Text style={styles.trophyEmoji}>🏆</Text>
            </View>
            <View>
              <Text style={styles.heroTitle}>Super Host</Text>
              <Text style={styles.heroSubtitle}>Next goal: Master Chef</Text>
            </View>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: "82%" }]} />
          </View>
          <Text style={styles.progressLabel}>820 / 1000 PT</Text>
        </View>

        <View style={styles.creditRow}>
          <Text style={typography.bodyStrong}>Credit Balance</Text>
          <Text style={styles.creditValue}>€45.00</Text>
        </View>

        <View style={styles.section}>
          <Text style={[typography.buttonLabel, { color: colors.textSecondary }]}>
            Available to Redeem
          </Text>
          {REDEEMABLES.map((item) => (
            <Pressable key={item.title} style={styles.redeemRow}>
              <View style={styles.redeemIcon}>
                <Text style={{ fontSize: 24 }}>{item.icon}</Text>
              </View>
              <View style={styles.redeemInfo}>
                <Text style={typography.bodyStrong}>{item.title}</Text>
                <Text style={typography.caption}>{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
            </Pressable>
          ))}
        </View>

        <Button label="Redeem a Reward" />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: spacing.xl,
    gap: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  heroCard: {
    backgroundColor: "#D95D39",
    borderRadius: radius.cardLarge,
    padding: spacing.xl,
    gap: spacing.lg,
  },
  heroRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
  },
  trophy: {
    width: 64,
    height: 64,
    borderRadius: radius.cardLarge,
    backgroundColor: "#FFD700",
    alignItems: "center",
    justifyContent: "center",
  },
  trophyEmoji: {
    fontSize: 28,
  },
  heroTitle: {
    fontFamily: "Urbanist_900Black",
    fontSize: 20,
    color: colors.onColor,
  },
  heroSubtitle: {
    fontFamily: typography.body.fontFamily,
    fontSize: 15,
    color: colors.onColor,
    opacity: 0.8,
  },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.4)",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.onColor,
  },
  progressLabel: {
    fontFamily: typography.buttonLabel.fontFamily,
    fontSize: 12,
    color: colors.onColor,
  },
  creditRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.xl,
  },
  creditValue: {
    fontFamily: "Urbanist_900Black",
    fontSize: 24,
    color: "#5E6B4F",
  },
  section: {
    gap: spacing.md,
  },
  redeemRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.lg,
  },
  redeemIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#FFFCF5",
    alignItems: "center",
    justifyContent: "center",
  },
  redeemInfo: {
    flex: 1,
    gap: 2,
  },
});
