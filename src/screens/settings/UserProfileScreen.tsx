import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "@/components/ScreenContainer";
import { ProfileModeToggle } from "@/components/ProfileModeToggle";
import { ProfileQuickLinks } from "@/components/ProfileQuickLinks";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { useHostMode } from "@/context/HostModeContext";
import { TABLES } from "@/data/tables";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 59:2 — "user-profile" (Guest mode)
const TABLES_ATTENDED = [
  { title: "Pizzoccheri in Milan", rating: "4.9" },
  { title: "Pizzoccheri in Milan", rating: "4.9" },
];

export function UserProfileScreen() {
  const { setHostMode } = useHostMode();

  return (
    <ScreenContainer edges={["top"]}>
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.avatar}>
          <Text style={styles.avatarInitials}>MR</Text>
        </View>

        <View style={styles.nameBlock}>
          <Text style={typography.h1}>Marco Rossi</Text>
          <Text style={typography.label}>Milan, Italy</Text>
        </View>

        <Text style={[typography.body, styles.bio]}>
          Food lover and backpack traveler. Always seeking authenticity in every city I visit.
        </Text>

        <View style={styles.tagsRow}>
          <View style={styles.tag}>
            <Text style={typography.caption}>Italian</Text>
          </View>
          <View style={styles.tag}>
            <Text style={typography.caption}>English</Text>
          </View>
        </View>

        <ProfileModeToggle isHostMode={false} onChange={setHostMode} />

        <ProfileQuickLinks />

        <View style={styles.section}>
          <Text style={typography.h2}>Tables Attended</Text>
          <View style={styles.row}>
            {TABLES_ATTENDED.map((table, i) => (
              <View key={i} style={styles.attendedCard}>
                <PhotoPlaceholder source={TABLES[i % TABLES.length].image} icon="restaurant-outline" style={styles.attendedImage} />
                <Text style={typography.bodyStrong}>{table.title}</Text>
                <Text style={typography.label}>★ {table.rating}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={typography.h2}>Host Portfolio</Text>
            <View style={styles.superHostBadge}>
              <Text style={styles.superHostText}>Super Host</Text>
            </View>
          </View>
          <Text style={typography.caption}>Photos guests chose to feature after their dinner</Text>
          <View style={styles.row}>
            <PhotoPlaceholder source={TABLES[0].image} icon="image-outline" style={styles.portfolioImage} />
            <PhotoPlaceholder source={TABLES[1].image} icon="image-outline" style={styles.portfolioImage} />
            <PhotoPlaceholder source={TABLES[2].image} icon="image-outline" style={styles.portfolioImage} />
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: spacing.xl,
    gap: spacing.xl,
    alignItems: "center",
    paddingBottom: spacing.xxxl,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: colors.primary,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitials: {
    fontFamily: typography.h1.fontFamily,
    fontSize: 28,
    color: colors.primary,
  },
  nameBlock: {
    alignItems: "center",
    gap: 4,
  },
  bio: {
    textAlign: "center",
  },
  tagsRow: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  tag: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: 14,
    paddingVertical: 7,
    backgroundColor: colors.surface,
  },
  section: {
    width: "100%",
    gap: spacing.sm,
  },
  row: {
    flexDirection: "row",
    gap: spacing.md,
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  attendedCard: {
    flex: 1,
    gap: 6,
  },
  attendedImage: {
    height: 100,
    width: "100%",
    borderRadius: 16,
  },
  superHostBadge: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  superHostText: {
    color: colors.onColor,
    fontFamily: typography.label.fontFamily,
    fontSize: 11,
  },
  portfolioImage: {
    flex: 1,
    height: 100,
    borderRadius: 14,
  },
});
