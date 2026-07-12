import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { TableCard } from "@/components/TableCard";
import { TABLES } from "@/data/tables";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 3:205 — "home-discovery-feed"
export function HomeDiscoveryFeedScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer edges={["top"]}>
      <View style={styles.header}>
        <View>
          <Text style={typography.label}>Discover tables in</Text>
          <View style={styles.cityRow}>
            <Text style={typography.h1Black}>Rome</Text>
            <Ionicons name="chevron-down" size={18} color={colors.textPrimary} />
          </View>
        </View>
        <Pressable
          style={styles.filterButton}
          onPress={() => navigation.navigate("HomeFiltersExpanded")}
        >
          <Ionicons name="options-outline" size={20} color={colors.textPrimary} />
        </Pressable>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color={colors.textSecondary} />
        <Text style={styles.searchPlaceholder}>Search dishes, hosts, neighborhoods...</Text>
      </View>

      <FlatList
        data={TABLES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={{ height: spacing.xl }} />}
        renderItem={({ item }) => (
          <TableCard
            table={item}
            onPress={() => navigation.navigate("TableDetail", { tableId: item.id })}
          />
        )}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.lg,
  },
  cityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  filterButton: {
    width: 44,
    height: 44,
    borderRadius: radius.card,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  searchPlaceholder: {
    fontFamily: typography.body.fontFamily,
    fontSize: 14,
    color: colors.textSecondary,
  },
  list: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
});
