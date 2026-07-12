import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { Button } from "@/components/Button";
import { getTableById } from "@/data/tables";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node — "booking-seats" (presented as a modal)
type Props = NativeStackScreenProps<RootStackParamList, "BookingSeats">;

export function BookingSeatsScreen({ route }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const table = getTableById(route.params.tableId);
  const [seats, setSeats] = useState(1);

  if (!table) return null;

  const maxSeats = Math.max(1, table.seatsLeft);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color={colors.textPrimary} />
        </Pressable>
        <Text style={typography.h2}>Choose Seats</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.body}>
        <View style={styles.tableCard}>
          <View style={styles.tableThumb} />
          <View>
            <Text style={typography.bodyStrong}>{table.title}</Text>
            <Text style={typography.caption}>
              {table.hostName} · {table.fullDateTime}
            </Text>
          </View>
        </View>

        <View style={styles.stepperCard}>
          <Text style={typography.h2}>How many seats?</Text>
          <View style={styles.stepperRow}>
            <Pressable
              style={styles.stepperButton}
              onPress={() => setSeats((s) => Math.max(1, s - 1))}
            >
              <Text style={styles.stepperSymbol}>−</Text>
            </Pressable>
            <Text style={styles.seatsValue}>{seats}</Text>
            <Pressable
              style={[styles.stepperButton, styles.stepperButtonPrimary]}
              onPress={() => setSeats((s) => Math.min(maxSeats, s + 1))}
            >
              <Text style={[styles.stepperSymbol, { color: colors.onColor }]}>+</Text>
            </Pressable>
          </View>
          <Text style={typography.caption}>{table.seatsLeft} seats available</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          label="Continue"
          onPress={() => navigation.navigate("BookingSummary", { tableId: table.id, seats })}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.xl,
    paddingTop: 56,
    paddingBottom: spacing.lg,
  },
  body: {
    flex: 1,
    padding: spacing.xl,
    gap: spacing.xl,
  },
  tableCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.lg,
  },
  tableThumb: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: colors.border,
  },
  stepperCard: {
    alignItems: "center",
    gap: spacing.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.xxl,
  },
  stepperRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xxl,
  },
  stepperButton: {
    width: 48,
    height: 48,
    borderRadius: radius.card,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  stepperButtonPrimary: {
    backgroundColor: colors.primary,
    borderWidth: 0,
  },
  stepperSymbol: {
    fontSize: 24,
    color: colors.textPrimary,
  },
  seatsValue: {
    fontFamily: typography.h1.fontFamily,
    fontSize: 32,
    color: colors.textPrimary,
    minWidth: 40,
    textAlign: "center",
  },
  footer: {
    padding: spacing.xl,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
});
