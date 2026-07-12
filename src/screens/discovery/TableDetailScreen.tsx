import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { Button } from "@/components/Button";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { getTableById } from "@/data/tables";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node — "table-detail" (presented as a modal from feed / map)
type Props = NativeStackScreenProps<RootStackParamList, "TableDetail">;

export function TableDetailScreen({ route }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const table = getTableById(route.params.tableId);

  if (!table) return null;

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.heroWrap}>
          <PhotoPlaceholder icon="restaurant-outline" style={styles.hero} />
          <Pressable style={styles.closeButton} onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={22} color={colors.textPrimary} />
          </Pressable>
          <View style={styles.mealBadge}>
            <Text style={[typography.caption, styles.mealBadgeText]}>{table.mealType}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={typography.h1Black}>{table.title}</Text>
            <Text style={styles.price}>€{table.price}</Text>
          </View>

          <View style={styles.hostRow}>
            <View style={styles.hostAvatar} />
            <View style={styles.flex}>
              <View style={styles.hostNameRow}>
                <Text style={typography.bodyStrong}>{table.hostName}</Text>
                {table.hostVerified && (
                  <Ionicons name="checkmark-circle" size={16} color={colors.primary} />
                )}
              </View>
              <Text style={typography.caption}>{table.hostBio}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={typography.h2}>About this table</Text>
            <Text style={typography.body}>{table.description}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={18} color={colors.textSecondary} />
            <Text style={typography.body}>{table.fullDateTime}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={18} color={colors.textSecondary} />
            <Text style={typography.body}>{table.address}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="people-outline" size={18} color={colors.textSecondary} />
            <Text style={typography.body}>
              {table.seatsLeft} of {table.seatsTotal} seats left
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={typography.h2}>Dietary Options</Text>
            <View style={styles.tagsRow}>
              {table.tags.map((tag) => (
                <View key={tag} style={styles.tag}>
                  <Text style={typography.caption}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label="Book a Seat"
          onPress={() => navigation.navigate("BookingSeats", { tableId: table.id })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  flex: {
    flex: 1,
  },
  body: {
    paddingBottom: spacing.xl,
  },
  heroWrap: {
    height: 280,
    width: "100%",
  },
  hero: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 56,
    left: spacing.xl,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  mealBadge: {
    position: "absolute",
    right: spacing.xl,
    bottom: spacing.lg,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.pill,
  },
  mealBadgeText: {
    color: colors.onColor,
    fontFamily: typography.bodyStrong.fontFamily,
  },
  content: {
    padding: spacing.xl,
    gap: spacing.xl,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.md,
  },
  price: {
    fontFamily: typography.h1.fontFamily,
    fontSize: 22,
    color: colors.primary,
  },
  hostRow: {
    flexDirection: "row",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.lg,
  },
  hostAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.border,
  },
  hostNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  section: {
    gap: spacing.sm,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  tag: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.surface,
  },
  footer: {
    padding: spacing.xl,
    borderTopWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bg,
  },
});
