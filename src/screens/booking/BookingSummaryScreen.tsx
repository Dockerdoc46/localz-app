import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { Button } from "@/components/Button";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { getTableById } from "@/data/tables";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node — "booking-summary"
type Props = NativeStackScreenProps<RootStackParamList, "BookingSummary">;

export function BookingSummaryScreen({ route }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { tableId, seats } = route.params;
  const table = getTableById(tableId);

  if (!table) return null;

  const subtotal = table.price * seats;
  const serviceFee = Math.round(subtotal * 0.1 * 100) / 100;
  const total = subtotal + serviceFee;

  return (
    <ScreenContainer edges={["top"]}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={colors.textPrimary} />
        </Pressable>
        <Text style={typography.h2}>Booking Summary</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.tableCard}>
          <PhotoPlaceholder source={table.image} icon="restaurant-outline" style={styles.tableThumb} />
          <View>
            <Text style={typography.bodyStrong}>{table.title}</Text>
            <Text style={typography.caption}>
              {table.hostName} · {table.fullDateTime}
            </Text>
            <Text style={typography.caption}>
              {seats} {seats === 1 ? "seat" : "seats"}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={typography.h2}>Cost Sharing</Text>
          <View style={styles.costCard}>
            <View style={styles.costRow}>
              <Text style={typography.body}>
                €{table.price} × {seats} {seats === 1 ? "seat" : "seats"}
              </Text>
              <Text style={typography.body}>€{subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.costRow}>
              <Text style={typography.body}>Service fee</Text>
              <Text style={typography.body}>€{serviceFee.toFixed(2)}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.costRow}>
              <Text style={typography.bodyStrong}>Total</Text>
              <Text style={styles.totalValue}>€{total.toFixed(2)}</Text>
            </View>
          </View>
          <Text style={typography.caption}>
            This contribution covers the estimated ingredient cost, split fairly among
            guests, plus a small platform fee.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={typography.h2}>Payment Method</Text>
          <View style={styles.paymentRow}>
            <Ionicons name="card-outline" size={20} color={colors.textPrimary} />
            <Text style={typography.body}>Visa •••• 4242</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label={`Confirm & Pay €${total.toFixed(2)}`}
          onPress={() => navigation.navigate("BookingConfirmation", { tableId: table.id })}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.lg,
  },
  body: {
    padding: spacing.xl,
    gap: spacing.xl,
    paddingBottom: spacing.xxxl,
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
  section: {
    gap: spacing.md,
  },
  costCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.lg,
    gap: spacing.md,
  },
  costRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
  },
  totalValue: {
    fontFamily: typography.h1.fontFamily,
    fontSize: 18,
    color: colors.primary,
  },
  paymentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.lg,
  },
  footer: {
    padding: spacing.xl,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
});
