import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions, useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ProfileStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { Button } from "@/components/Button";
import { Dots } from "@/components/Dots";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 4:136 — "create-table-step2"
type Props = NativeStackScreenProps<ProfileStackParamList, "CreateTableStep2">;

export function CreateTableStep2Screen({ route }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();
  const [published, setPublished] = useState(false);

  function publish() {
    setPublished(true);
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({ index: 0, routes: [{ name: "ProfileHome" }] })
      );
    }, 900);
  }

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.body}>
        <View style={styles.headerRow}>
          <Text style={typography.h1Black}>Almost Ready...</Text>
          <Text style={styles.stepLabel}>2 / 2</Text>
        </View>

        <View style={styles.section}>
          <Text style={typography.h2}>Date &amp; Time</Text>
          <View style={styles.dateRow}>
            <View style={styles.dateField}>
              <Text style={[typography.body, { fontSize: 15, color: colors.textPrimary }]}>
                Saturday, May 24
              </Text>
            </View>
            <View style={styles.dateField}>
              <Text style={[typography.body, { fontSize: 15, color: colors.textPrimary }]}>
                20:30
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={typography.h2}>Suggested Expense Contribution</Text>
            <Text style={styles.priceValue}>€8.50</Text>
          </View>
          <View style={styles.hintBox}>
            <Text style={[typography.body, { fontSize: 15 }]}>
              This amount covers the average ingredient cost for an authentic meal ({route.params.mealType}
              , {route.params.seats} seats). You can adjust it as you wish.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={typography.h2}>Photo of Your Table</Text>
          <Pressable style={styles.uploadBox}>
            <Ionicons name="image-outline" size={32} color={colors.textSecondary} />
            <Text style={[typography.label]}>Upload a photo of the dish or dining area</Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Dots count={2} activeIndex={1} />
          <Button
            label={published ? "Published!" : "Publish Your Table"}
            fullRadius={false}
            disabled={published}
            onPress={publish}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
  },
  body: {
    padding: spacing.xl,
    gap: spacing.xxl,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stepLabel: {
    fontFamily: typography.buttonLabel.fontFamily,
    fontSize: 14,
    color: colors.primary,
  },
  section: {
    gap: spacing.lg,
  },
  dateRow: {
    flexDirection: "row",
    gap: spacing.md,
  },
  dateField: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.lg,
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceValue: {
    fontFamily: "Urbanist_900Black",
    fontSize: 24,
    color: colors.primary,
  },
  hintBox: {
    backgroundColor: "#D9C7B8",
    borderRadius: radius.card,
    padding: spacing.lg,
  },
  uploadBox: {
    height: 160,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.border,
    borderRadius: radius.card,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
  },
  footer: {
    alignItems: "center",
    gap: spacing.xl,
  },
});
