import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScreenContainer } from "@/components/ScreenContainer";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 4:320 — "notifications-list"
const TODAY = [
  { title: "New Booking!", body: "Elena booked a seat for Roman Dinner.", time: "2h ago", highlighted: true },
  { title: "Message from Lukas", body: "Hi Marco, thanks again for lunch yesterday!", time: "2h ago" },
];
const YESTERDAY = [
  { title: "Level Reached 🚀", body: "You've reached level 4! Keep it up.", time: "2h ago" },
  { title: "Feedback Received", body: "Marco Rossi left 5 stars on your table.", time: "2h ago" },
];

function NotificationRow({
  title,
  body,
  time,
  highlighted,
}: {
  title: string;
  body: string;
  time: string;
  highlighted?: boolean;
}) {
  return (
    <View style={[styles.row, highlighted ? styles.rowHighlighted : null]}>
      <View style={styles.iconCircle}>
        <Ionicons name="notifications-outline" size={20} color={colors.textPrimary} />
      </View>
      <View style={styles.rowBody}>
        <View style={styles.rowTop}>
          <Text style={typography.bodyStrong}>{title}</Text>
          <Text style={typography.caption}>{time}</Text>
        </View>
        <Text style={[typography.body, { fontSize: 14, lineHeight: 20 }]}>{body}</Text>
      </View>
    </View>
  );
}

export function NotificationsListScreen() {
  return (
    <ScreenContainer edges={["top"]}>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={typography.h1Black}>Notifications</Text>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Today</Text>
          {TODAY.map((n) => (
            <NotificationRow key={n.title} {...n} />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Yesterday</Text>
          {YESTERDAY.map((n) => (
            <NotificationRow key={n.title} {...n} />
          ))}
        </View>
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
  section: {
    gap: spacing.lg,
  },
  sectionLabel: {
    fontFamily: typography.buttonLabel.fontFamily,
    fontSize: 16,
    color: colors.textSecondary,
    textTransform: "uppercase",
  },
  row: {
    flexDirection: "row",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.lg,
    overflow: "hidden",
  },
  rowHighlighted: {
    borderLeftWidth: 4,
    borderLeftColor: "#D95D39",
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFCF5",
    alignItems: "center",
    justifyContent: "center",
  },
  rowBody: {
    flex: 1,
    gap: 4,
  },
  rowTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
