import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions, useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { Button } from "@/components/Button";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { getTableById } from "@/data/tables";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node — "booking-confirmation"
type Props = NativeStackScreenProps<RootStackParamList, "BookingConfirmation">;

export function BookingConfirmationScreen({ route }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const table = getTableById(route.params.tableId);

  function goToBookings() {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Main" }],
      })
    );
  }

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.body}>
        <View style={styles.checkCircle}>
          <Ionicons name="checkmark" size={40} color={colors.onColor} />
        </View>

        <Text style={typography.h1Black}>You&apos;re all set!</Text>
        <Text style={[typography.body, styles.subtitle]}>
          Your seat has been booked. The host will be notified and you&apos;ll receive all the
          details in your Messages.
        </Text>

        {table && (
          <View style={styles.tableCard}>
            <PhotoPlaceholder source={table.image} icon="restaurant-outline" style={styles.tableThumb} />
            <View>
              <Text style={typography.bodyStrong}>{table.title}</Text>
              <Text style={typography.caption}>
                {table.hostName} · {table.fullDateTime}
              </Text>
            </View>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <Button label="View My Bookings" onPress={goToBookings} />
        <Pressable onPress={goToBookings}>
          <Text style={styles.skipLink}>Back to Explore</Text>
        </Pressable>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.xl,
    gap: spacing.lg,
  },
  checkCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#5E6B4F",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  subtitle: {
    textAlign: "center",
  },
  tableCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    width: "100%",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.lg,
    marginTop: spacing.lg,
  },
  tableThumb: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: colors.border,
  },
  footer: {
    padding: spacing.xl,
    gap: spacing.md,
    alignItems: "center",
  },
  skipLink: {
    fontFamily: typography.label.fontFamily,
    fontSize: 14,
    color: colors.textSecondary,
    textDecorationLine: "underline",
  },
});
