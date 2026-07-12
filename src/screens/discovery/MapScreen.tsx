import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { TABLES, type Table } from "@/data/tables";
import { colors, radius, spacing, typography } from "@/theme";

// Figma nodes 3:661 "map-view" + 3:709 "map-bottom-sheet" — the sheet is a
// local UI state of this same screen (opened when a pin is tapped), not a
// separate route.
export function MapScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selected, setSelected] = useState<Table | null>(null);

  return (
    <ScreenContainer edges={["top"]} style={{ backgroundColor: "#DCE7DD" }}>
      <View style={styles.topBar}>
        <View style={styles.locationPill}>
          <Ionicons name="location-outline" size={18} color={colors.textPrimary} />
          <Text style={typography.h2}>Rome</Text>
        </View>
      </View>

      <View style={styles.mapArea}>
        {TABLES.map((table) => (
          <Pressable
            key={table.id}
            onPress={() => setSelected(table)}
            style={[
              styles.pin,
              { top: table.mapPosition.top * 0.55, left: table.mapPosition.left },
              selected?.id === table.id ? styles.pinActive : null,
            ]}
          >
            <Text style={styles.pinText}>€{table.price}</Text>
          </Pressable>
        ))}
      </View>

      {selected && (
        <>
          <Pressable style={styles.dimmer} onPress={() => setSelected(null)} />
          <View style={styles.sheet}>
            <View style={styles.handleRow}>
              <View style={styles.handle} />
            </View>
            <View style={styles.sheetRow}>
              <PhotoPlaceholder source={selected.image} icon="restaurant-outline" style={styles.sheetImage} />
              <View style={styles.sheetInfo}>
                <View style={styles.sheetTitleRow}>
                  <Text style={typography.h2} numberOfLines={1}>
                    Dinner at {selected.hostName}&apos;s
                  </Text>
                  <Text style={styles.sheetPrice}>€{selected.price}</Text>
                </View>
                <View style={styles.hostRow}>
                  <View style={styles.avatarDot} />
                  <Text style={typography.label}>{selected.hostName}</Text>
                  {selected.hostVerified && (
                    <Ionicons name="checkmark-circle" size={14} color={colors.primary} />
                  )}
                </View>
                <Text style={[typography.label, { color: colors.primary }]}>
                  {selected.seatsLeft} seats left
                </Text>
              </View>
            </View>
            <View style={styles.chipRow}>
              {selected.tags.map((tag) => (
                <View key={tag} style={styles.chip}>
                  <Text style={typography.caption}>{tag}</Text>
                </View>
              ))}
            </View>
            <Pressable
              onPress={() => {
                const tableId = selected.id;
                setSelected(null);
                navigation.navigate("TableDetail", { tableId });
              }}
            >
              <Text style={styles.viewDetails}>View Details</Text>
            </Pressable>
          </View>
        </>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  topBar: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.md,
  },
  locationPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    alignSelf: "flex-start",
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.pill,
  },
  mapArea: {
    flex: 1,
  },
  pin: {
    position: "absolute",
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radius.pill,
  },
  pinActive: {
    borderWidth: 3,
    borderColor: colors.surface,
  },
  pinText: {
    color: colors.onColor,
    fontFamily: typography.h1.fontFamily,
    fontSize: 14,
  },
  dimmer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.18)",
  },
  sheet: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.outer,
    borderTopRightRadius: radius.outer,
    padding: spacing.xl,
    gap: spacing.lg,
  },
  handleRow: {
    alignItems: "center",
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
  },
  sheetRow: {
    flexDirection: "row",
    gap: spacing.lg,
  },
  sheetImage: {
    width: 100,
    height: 100,
    borderRadius: 14,
  },
  sheetInfo: {
    flex: 1,
    gap: spacing.xs,
  },
  sheetTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sheetPrice: {
    fontFamily: typography.h1.fontFamily,
    fontSize: 18,
    color: colors.primary,
  },
  hostRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  avatarDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.border,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.chip,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.surface,
  },
  viewDetails: {
    fontFamily: typography.buttonLabel.fontFamily,
    fontSize: 16,
    color: colors.primary,
    textDecorationLine: "underline",
  },
});
