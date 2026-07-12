import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ChatStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { CONVERSATIONS } from "@/data/conversations";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 3:900 — "chat-list"
type Nav = NativeStackNavigationProp<ChatStackParamList, "ChatList">;

export function ChatListScreen() {
  const navigation = useNavigation<Nav>();
  const next = CONVERSATIONS[0];

  return (
    <ScreenContainer edges={["top"]}>
      <View style={styles.header}>
        <Text style={typography.h1Black}>Messages</Text>
      </View>

      <Pressable
        style={styles.nextTable}
        onPress={() => navigation.navigate("ChatThread", { threadId: next.id, hostName: next.hostName })}
      >
        <Text style={styles.nextTableLabel}>Next Table</Text>
        <View style={styles.nextTableRow}>
          <View style={styles.nextTableThumb} />
          <View style={styles.nextTableInfo}>
            <Text style={styles.nextTableTitle}>{next.tableTitle}</Text>
            <Text style={styles.nextTableSubtitle}>Rome • In 2 days</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.onColor} />
        </View>
      </Pressable>

      <FlatList
        data={CONVERSATIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.row}
            onPress={() =>
              navigation.navigate("ChatThread", { threadId: item.id, hostName: item.hostName })
            }
          >
            <View style={styles.avatar} />
            <View style={styles.rowInfo}>
              <View style={styles.rowTop}>
                <Text style={typography.bodyStrong}>{item.hostName}</Text>
                <Text style={typography.caption}>{item.time}</Text>
              </View>
              <View style={styles.rowBottom}>
                <Text style={[typography.body, styles.preview]} numberOfLines={1}>
                  {item.lastMessage}
                </Text>
                {item.unread && <View style={styles.unreadDot} />}
              </View>
            </View>
          </Pressable>
        )}
        contentContainerStyle={styles.list}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
  },
  nextTable: {
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    backgroundColor: colors.primary,
    borderRadius: radius.card,
    padding: spacing.lg,
    gap: spacing.md,
  },
  nextTableLabel: {
    fontFamily: typography.buttonLabel.fontFamily,
    fontSize: 12,
    color: colors.onColor,
    opacity: 0.8,
    textTransform: "uppercase",
  },
  nextTableRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  nextTableThumb: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  nextTableInfo: {
    flex: 1,
  },
  nextTableTitle: {
    fontFamily: typography.buttonLabel.fontFamily,
    fontSize: 16,
    color: colors.onColor,
  },
  nextTableSubtitle: {
    fontFamily: typography.body.fontFamily,
    fontSize: 14,
    color: colors.onColor,
    opacity: 0.9,
  },
  list: {
    paddingHorizontal: spacing.xl,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.border,
  },
  rowInfo: {
    flex: 1,
    gap: 4,
  },
  rowTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  preview: {
    flex: 1,
    fontSize: 14,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginLeft: spacing.sm,
  },
});
