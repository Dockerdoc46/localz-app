import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ProfileStackParamList } from "@/navigation/types";
import { colors, radius, spacing, typography } from "@/theme";

const LINKS: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  route: keyof ProfileStackParamList;
}[] = [
  { icon: "wallet-outline", label: "Wallet", route: "WalletRewards" },
  { icon: "notifications-outline", label: "Notifications", route: "NotificationsList" },
  { icon: "settings-outline", label: "Settings", route: "SettingsMain" },
  { icon: "help-buoy-outline", label: "Help", route: "HelpSafety" },
];

/** Shared quick-access row (Wallet / Notifications / Settings / Help) on both profile variants. */
export function ProfileQuickLinks() {
  const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();
  return (
    <View style={styles.row}>
      {LINKS.map((link) => (
        <Pressable
          key={link.route}
          style={styles.item}
          onPress={() => navigation.navigate(link.route as never)}
        >
          <View style={styles.iconCircle}>
            <Ionicons name={link.icon} size={20} color={colors.textPrimary} />
          </View>
          <Text style={typography.caption}>{link.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    alignItems: "center",
    gap: spacing.sm,
    width: 72,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: radius.card,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
});
