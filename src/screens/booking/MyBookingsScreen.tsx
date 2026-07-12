import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { getBookingsByStatus, type BookingStatus } from "@/data/bookings";
import { colors, radius, spacing, typography } from "@/theme";

// "Bookings" tab — no dedicated Figma frame was exported for this list, so it
// follows the same card language used across the discovery/booking flow.
export function MyBookingsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [tab, setTab] = useState<BookingStatus>("upcoming");
  const bookings = getBookingsByStatus(tab);

  return (
    <ScreenContainer edges={["top"]}>
      <View style={styles.header}>
        <Text style={typography.h1Black}>My Bookings</Text>
      </View>

      <View style={styles.tabRow}>
        <Pressable
          style={[styles.tabButton, tab === "upcoming" ? styles.tabButtonActive : null]}
          onPress={() => setTab("upcoming")}
        >
          <Text style={tab === "upcoming" ? styles.tabLabelActive : styles.tabLabel}>
            Upcoming
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tabButton, tab === "past" ? styles.tabButtonActive : null]}
          onPress={() => setTab("past")}
        >
          <Text style={tab === "past" ? styles.tabLabelActive : styles.tabLabel}>Past</Text>
        </Pressable>
      </View>

      {bookings.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="calendar-outline" size={40} color={colors.textSecondary} />
          <Text style={[typography.body, styles.emptyText]}>
            {tab === "upcoming"
              ? "No upcoming tables yet — go find one to join!"
              : "No past tables yet."}
          </Text>
        </View>
      ) : (
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={{ height: spacing.lg }} />}
          renderItem={({ item }) => {
            if (!item.table) return null;
            return (
              <Pressable
                style={styles.card}
                onPress={() =>
                  tab === "upcoming"
                    ? navigation.navigate("TableDetail", { tableId: item.table!.id })
                    : navigation.navigate("PostDinnerReview", { tableId: item.table!.id })
                }
              >
                <PhotoPlaceholder
                  source={item.table.image}
                  icon="restaurant-outline"
                  style={styles.thumb}
                />
                <View style={styles.cardInfo}>
                  <Text style={typography.bodyStrong} numberOfLines={1}>
                    {item.table.title}
                  </Text>
                  <Text style={typography.caption}>
                    {item.table.hostName} · {item.dateLabel}
                  </Text>
                  <Text style={typography.caption}>
                    {item.seats} {item.seats === 1 ? "seat" : "seats"}
                  </Text>
                </View>
                {tab === "past" ? (
                  <View style={styles.reviewBadge}>
                    <Text style={styles.reviewBadgeText}>Leave a review</Text>
                  </View>
                ) : (
                  <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
                )}
              </Pressable>
            );
          }}
        />
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.lg,
  },
  tabRow: {
    flexDirection: "row",
    marginHorizontal: spacing.xl,
    marginBottom: spacing.lg,
    backgroundColor: colors.border,
    borderRadius: radius.pill,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: radius.pill,
  },
  tabButtonActive: {
    backgroundColor: colors.surface,
  },
  tabLabel: {
    fontFamily: typography.bodyStrong.fontFamily,
    fontSize: 14,
    color: colors.textSecondary,
  },
  tabLabelActive: {
    fontFamily: typography.buttonLabel.fontFamily,
    fontSize: 14,
    color: colors.textPrimary,
  },
  list: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.md,
  },
  thumb: {
    width: 64,
    height: 64,
    borderRadius: 14,
  },
  cardInfo: {
    flex: 1,
    gap: 2,
  },
  reviewBadge: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  reviewBadgeText: {
    color: colors.onColor,
    fontFamily: typography.buttonLabel.fontFamily,
    fontSize: 11,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
    paddingHorizontal: spacing.xxl,
  },
  emptyText: {
    textAlign: "center",
  },
});
