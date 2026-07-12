import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ProfileStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";
import { Dots } from "@/components/Dots";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 4:80 — "create-table-step1"
const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Brunch"];
const DIET_TAGS = ["Vegetarian", "Vegan", "Gluten Free", "Lactose Free"];

export function CreateTableStep1Screen() {
  const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();
  const [meal, setMeal] = useState("Dinner");
  const [seats, setSeats] = useState(4);
  const [diets, setDiets] = useState<string[]>(["Vegetarian"]);

  function toggleDiet(tag: string) {
    setDiets((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  }

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.body}>
        <View style={styles.headerRow}>
          <Text style={typography.h1Black}>Create Your Table</Text>
          <Text style={styles.stepLabel}>1 / 2</Text>
        </View>

        <View style={styles.section}>
          <Text style={typography.h2}>What type of meal?</Text>
          <View style={styles.chipWrap}>
            {MEAL_TYPES.map((type) => (
              <Chip key={type} label={type} active={meal === type} onPress={() => setMeal(type)} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={typography.h2}>Tell us the menu</Text>
          <View style={styles.menuInput}>
            <Text style={[typography.body, { fontSize: 15 }]}>
              E.g. Let&apos;s prepare tonnarelli cacio e pepe followed by saltimbocca alla
              romana...
            </Text>
          </View>
        </View>

        <View style={styles.rowBetween}>
          <Text style={typography.h2}>Available Seats</Text>
          <View style={styles.stepper}>
            <View style={styles.stepperButton}>
              <Text
                style={styles.stepperSymbol}
                onPress={() => setSeats((s) => Math.max(1, s - 1))}
              >
                −
              </Text>
            </View>
            <Text style={styles.seatsValue}>{seats}</Text>
            <View style={[styles.stepperButton, styles.stepperButtonPrimary]}>
              <Text
                style={[styles.stepperSymbol, { color: colors.onColor }]}
                onPress={() => setSeats((s) => s + 1)}
              >
                +
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={typography.h2}>Diets &amp; Preferences</Text>
          <View style={styles.chipWrap}>
            {DIET_TAGS.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                active={diets.includes(tag)}
                onPress={() => toggleDiet(tag)}
              />
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <Dots count={2} activeIndex={0} />
          <Button
            label="Continue"
            fullRadius={false}
            onPress={() => navigation.navigate("CreateTableStep2", { mealType: meal, seats })}
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
  chipWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  menuInput: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.lg,
    height: 140,
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
  },
  stepperButton: {
    width: 40,
    height: 40,
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
    fontSize: 20,
    color: colors.textPrimary,
  },
  seatsValue: {
    fontFamily: typography.h1.fontFamily,
    fontSize: 20,
    color: colors.textPrimary,
  },
  footer: {
    alignItems: "center",
    gap: spacing.xl,
  },
});
