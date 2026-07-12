import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScreenContainer } from "./ScreenContainer";
import { colors, typography } from "@/theme";

type Props = {
  title: string;
  note?: string;
};

/**
 * Temporary stand-in for screens not yet pixel-matched to Figma.
 * Keeps every route in the app navigable end-to-end while the remaining
 * flows (Discovery, Booking, Chat, Host, Wallet, Settings) are built out.
 */
export function PlaceholderScreen({ title, note }: Props) {
  return (
    <ScreenContainer style={styles.center}>
      <Ionicons name="construct-outline" size={40} color={colors.primary} />
      <Text style={[typography.h2, styles.title]}>{title}</Text>
      <Text style={[typography.body, styles.note]}>
        {note ?? "Schermata in costruzione — arriva nella prossima iterazione."}
      </Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  title: {
    marginTop: 16,
    textAlign: "center",
  },
  note: {
    marginTop: 8,
    textAlign: "center",
  },
});
