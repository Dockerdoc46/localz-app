import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ProfileStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { ProfileModeToggle } from "@/components/ProfileModeToggle";
import { ProfileQuickLinks } from "@/components/ProfileQuickLinks";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { useHostMode } from "@/context/HostModeContext";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 4:549 — "host-guest-toggle" (Host/Localz mode profile)
const MY_TABLES = [
  { title: "Authentic Roman Dinner", rating: "4.9" },
  { title: "Terrace Brunch", rating: "4.8" },
];

export function HostProfileScreen() {
  const { setHostMode } = useHostMode();
  const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();

  return (
    <ScreenContainer edges={["top"]}>
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.avatarRing}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitials}>MR</Text>
          </View>
        </View>

        <View style={styles.nameBlock}>
          <Text style={typography.h1}>Marco Rossi</Text>
          <Text style={typography.label}>Milan, Italy</Text>
        </View>

        <ProfileModeToggle isHostMode onChange={setHostMode} />

        <ProfileQuickLinks />

        <View style={styles.section}>
          <Text style={typography.h2}>My Tables</Text>
          <View style={styles.tablesRow}>
            {MY_TABLES.map((table) => (
              <View key={table.title} style={styles.tableCard}>
                <PhotoPlaceholder icon="restaurant-outline" style={styles.tableImage} />
                <Text style={typography.bodyStrong} numberOfLines={1}>
                  {table.title}
                </Text>
                <Text style={typography.label}>★ {table.rating}</Text>
              </View>
            ))}
            <Pressable
              style={styles.newTableCard}
              onPress={() => navigation.navigate("CreateTableStep1")}
            >
              <Ionicons name="add" size={24} color={colors.primary} />
              <Text style={[typography.label, { color: colors.primary }]}>New Table</Text>
            </Pressable>
          </View>
        </View>

        <Pressable style={styles.dashboardCard} onPress={() => navigation.navigate("HostRewards")}>
          <Text style={typography.h2}>Quick Dashboard</Text>
          <View style={styles.dashboardRow}>
            <View>
              <Text style={styles.dashboardValue}>12</Text>
              <Text style={typography.caption}>Meals Hosted</Text>
            </View>
            <View>
              <Text style={styles.dashboardValue}>4.9</Text>
              <Text style={typography.caption}>Avg. Reviews</Text>
            </View>
            <View>
              <Text style={styles.dashboardValue}>€45</Text>
              <Text style={typography.caption}>Total Earnings</Text>
            </View>
          </View>
        </Pressable>
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
  avatarRing: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 3,
    borderColor: "#D95D39",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
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
  section: {
    width: "100%",
    gap: spacing.md,
  },
  tablesRow: {
    flexDirection: "row",
    gap: spacing.md,
  },
  tableCard: {
    width: 140,
    gap: 6,
  },
  tableImage: {
    height: 90,
    width: "100%",
    borderRadius: 16,
  },
  newTableCard: {
    width: 100,
    height: 90,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.border,
    borderRadius: radius.card,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
  },
  dashboardCard: {
    width: "100%",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.xl,
    gap: spacing.md,
  },
  dashboardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dashboardValue: {
    fontFamily: typography.h1.fontFamily,
    fontSize: 18,
    color: colors.textPrimary,
  },
});
