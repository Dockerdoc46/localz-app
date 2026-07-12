import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScreenContainer } from "@/components/ScreenContainer";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 4:254 — "wallet-rewards"
const TRANSACTIONS = [
  { title: "Roman Dinner Credit", date: "22 Mag 2024", amount: "+€25.50", positive: true },
  { title: "Grocery Voucher Redemption", date: "15 Mag 2024", amount: "-€10.00", positive: false },
  { title: "Sunday Brunch Credit", date: "10 Mag 2024", amount: "+€29.50", positive: true },
];

export function WalletRewardsScreen() {
  return (
    <ScreenContainer edges={["top"]}>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={typography.h2}>My Wallet</Text>

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceValue}>€45.00</Text>
        </View>

        <View style={styles.section}>
          <Text style={typography.h2}>Active Vouchers</Text>
          <View style={styles.voucherRow}>
            <Ionicons name="pricetag-outline" size={28} color={colors.onColor} />
            <View>
              <Text style={[typography.bodyStrong, { color: colors.onColor }]}>
                €5 Butcher Discount
              </Text>
              <Text style={[typography.caption, { color: colors.onColor, opacity: 0.8 }]}>
                Expires June 30
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={typography.h2}>Transaction History</Text>
          {TRANSACTIONS.map((tx) => (
            <View key={tx.title} style={styles.txRow}>
              <View>
                <Text style={typography.bodyStrong}>{tx.title}</Text>
                <Text style={typography.caption}>{tx.date}</Text>
              </View>
              <Text
                style={[
                  styles.txAmount,
                  { color: tx.positive ? "#5E6B4F" : colors.primary },
                ]}
              >
                {tx.amount}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: spacing.xl,
    gap: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  balanceCard: {
    backgroundColor: "#D95D39",
    borderRadius: radius.cardLarge,
    padding: spacing.xxl,
    alignItems: "center",
    gap: spacing.sm,
  },
  balanceLabel: {
    fontFamily: typography.bodyStrong.fontFamily,
    fontSize: 14,
    color: colors.onColor,
    opacity: 0.8,
  },
  balanceValue: {
    fontFamily: "Urbanist_900Black",
    fontSize: 48,
    color: colors.onColor,
  },
  section: {
    gap: spacing.md,
  },
  voucherRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
    backgroundColor: colors.textPrimary,
    borderRadius: radius.card,
    padding: spacing.xl,
  },
  txRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  txAmount: {
    fontFamily: typography.h1.fontFamily,
    fontSize: 15,
  },
});
