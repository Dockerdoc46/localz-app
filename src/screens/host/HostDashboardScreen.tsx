import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ProfileStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { TABLES } from "@/data/tables";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 4:12 — "host-dashboard" (Explore tab content while in host mode)
export function HostDashboardScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();

  return (
    <ScreenContainer edges={["top"]}>
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.headerBlock}>
          <Text style={typography.h1Black}>Hi, Marco!</Text>
          <Text style={typography.body}>Your kitchen smells amazing today.</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Bookings</Text>
            <Text style={styles.statValue}>3</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Credits</Text>
            <Text style={styles.statValue}>€45</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Tables</Text>
            <Text style={styles.statValue}>12</Text>
          </View>
        </View>

        <Pressable style={styles.reputationCard} onPress={() => navigation.navigate("HostRewards")}>
          <View style={styles.reputationHeader}>
            <Text style={typography.bodyStrong}>Host Reputation</Text>
            <View style={styles.levelBadge}>
              <Text style={styles.levelBadgeText}>Level 4</Text>
            </View>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: "70%" }]} />
          </View>
          <Text style={typography.body}>250 points away from &apos;Super Host&apos;</Text>
        </Pressable>

        <View style={styles.section}>
          <Text style={typography.h2}>Upcoming Tables</Text>
          <View style={styles.tableCard}>
            <PhotoPlaceholder source={TABLES[0].image} icon="restaurant-outline" style={styles.tableThumb} />
            <View style={styles.tableInfo}>
              <Text style={typography.bodyStrong}>Authentic Roman Dinner</Text>
              <Text style={typography.label}>Today, 8:30 PM • 3 guests</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
          </View>
        </View>

        <Pressable
          style={styles.newTableButton}
          onPress={() => navigation.navigate("CreateTableStep1")}
        >
          <Ionicons name="add" size={20} color={colors.onColor} />
          <Text style={[typography.buttonLabel]}>Create a New Table</Text>
        </Pressable>
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
  headerBlock: {
    gap: 4,
  },
  statsRow: {
    flexDirection: "row",
    gap: spacing.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  statLabel: {
    fontFamily: typography.bodyStrong.fontFamily,
    fontSize: 14,
    color: colors.textSecondary,
  },
  statValue: {
    fontFamily: typography.h1.fontFamily,
    fontSize: 24,
    color: colors.primary,
  },
  reputationCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.xl,
    gap: spacing.md,
  },
  reputationHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  levelBadge: {
    backgroundColor: colors.primary,
    borderRadius: radius.chip,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  levelBadgeText: {
    color: colors.onColor,
    fontFamily: typography.buttonLabel.fontFamily,
    fontSize: 12,
  },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
  },
  section: {
    gap: spacing.md,
  },
  tableCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.lg,
  },
  tableThumb: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: colors.border,
  },
  tableInfo: {
    flex: 1,
    gap: 4,
  },
  newTableButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    backgroundColor: colors.primary,
    borderRadius: radius.card,
    height: 56,
  },
});
