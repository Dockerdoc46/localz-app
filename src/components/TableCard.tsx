import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Table } from "@/data/tables";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { colors, radius, spacing, typography } from "@/theme";

type Props = {
  table: Table;
  onPress?: () => void;
};

/** Card used in the discovery feed (Figma node 3:235 pattern, repeated per table). */
export function TableCard({ table, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageWrap}>
        <PhotoPlaceholder icon="restaurant-outline" style={styles.image} />
        <View style={styles.mealBadge}>
          <Text style={[typography.caption, styles.mealBadgeText]}>{table.mealType}</Text>
        </View>
        <View style={styles.avatar}>
          <PhotoPlaceholder icon="person-outline" style={styles.avatarImage} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.row}>
          <View style={styles.hostRow}>
            <Text style={typography.h2}>{table.hostName}</Text>
            {table.hostVerified && (
              <Ionicons name="checkmark-circle" size={16} color={colors.primary} />
            )}
          </View>
          <Text style={styles.price}>€{table.price}</Text>
        </View>

        <View style={styles.metaRow}>
          <Text style={typography.label}>
            {table.seatsLeft} {table.seatsLeft === 1 ? "seat" : "seats"} left
          </Text>
          <View style={styles.dot} />
          <Text style={[typography.body, { fontSize: 14 }]}>{table.time}</Text>
        </View>

        <View style={styles.tagsRow}>
          {table.tags.map((tag) => (
            <View key={tag} style={styles.tag}>
              <Text style={[typography.caption, { color: colors.textSecondary }]}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </Pressable>
  );
}

const AVATAR_SIZE = 64;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.cardLarge,
    overflow: "hidden",
  },
  imageWrap: {
    height: 220,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  mealBadge: {
    position: "absolute",
    left: 16,
    top: 16,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.pill,
  },
  mealBadgeText: {
    color: colors.onColor,
    fontFamily: typography.bodyStrong.fontFamily,
  },
  avatar: {
    position: "absolute",
    left: 16,
    bottom: -AVATAR_SIZE / 2,
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: radius.cardLarge,
    borderWidth: 3,
    borderColor: colors.surface,
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  body: {
    paddingTop: AVATAR_SIZE / 2 + 4,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.xl,
    gap: spacing.sm,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hostRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  price: {
    fontFamily: typography.h1.fontFamily,
    fontSize: 18,
    color: colors.primary,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.textSecondary,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: spacing.xs,
  },
  tag: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});
