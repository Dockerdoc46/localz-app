import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node — "home-filters-expanded" (presented as a transparent modal / bottom sheet)
const MEAL_TYPES = ["Breakfast", "Brunch", "Lunch", "Dinner"];
const DIET_TAGS = ["Vegetarian", "Vegan", "Gluten Free", "Lactose Free"];
const PRICE_RANGES = ["€", "€€", "€€€"];

export function HomeFiltersExpandedScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [meals, setMeals] = useState<string[]>([]);
  const [diets, setDiets] = useState<string[]>([]);
  const [price, setPrice] = useState<string | null>(null);

  function toggle(list: string[], setList: (v: string[]) => void, value: string) {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  return (
    <View style={styles.root}>
      <Pressable style={styles.dimmer} onPress={() => navigation.goBack()} />
      <View style={styles.sheet}>
        <View style={styles.handleRow}>
          <View style={styles.handle} />
        </View>

        <View style={styles.headerRow}>
          <Text style={typography.h1Black}>Filters</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={24} color={colors.textPrimary} />
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.body}>
          <View style={styles.section}>
            <Text style={typography.h2}>Meal Type</Text>
            <View style={styles.chipWrap}>
              {MEAL_TYPES.map((type) => (
                <Chip
                  key={type}
                  label={type}
                  active={meals.includes(type)}
                  onPress={() => toggle(meals, setMeals, type)}
                />
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={typography.h2}>Price Range</Text>
            <View style={styles.chipWrap}>
              {PRICE_RANGES.map((range) => (
                <Chip
                  key={range}
                  label={range}
                  active={price === range}
                  onPress={() => setPrice(price === range ? null : range)}
                />
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={typography.h2}>Dietary Preferences</Text>
            <View style={styles.chipWrap}>
              {DIET_TAGS.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  active={diets.includes(tag)}
                  onPress={() => toggle(diets, setDiets, tag)}
                />
              ))}
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Button label="Apply Filters" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-end",
  },
  dimmer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(43, 36, 32, 0.4)",
  },
  sheet: {
    maxHeight: "80%",
    backgroundColor: colors.bg,
    borderTopLeftRadius: radius.outer,
    borderTopRightRadius: radius.outer,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
  },
  handleRow: {
    alignItems: "center",
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: spacing.lg,
  },
  body: {
    gap: spacing.xxl,
    paddingBottom: spacing.xl,
  },
  section: {
    gap: spacing.md,
  },
  chipWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  footer: {
    paddingTop: spacing.md,
  },
});
