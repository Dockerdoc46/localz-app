import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { OnboardingStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { Button } from "@/components/Button";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 3:160 — "city-language-selection"
type Props = NativeStackScreenProps<OnboardingStackParamList, "CityLanguageSelection">;

const CITIES = [
  { name: "Rome", image: require("../../../assets/images/city-rome.png") },
  { name: "Milano", image: require("../../../assets/images/city-milano.png") },
  { name: "Barcelona", image: require("../../../assets/images/city-barcelona.png") },
  { name: "Berlin", image: require("../../../assets/images/city-berlin.png") },
  { name: "Lisbon", image: require("../../../assets/images/city-lisbon.png") },
  { name: "Amsterdam", image: require("../../../assets/images/city-amsterdam.png") },
];

export function CityLanguageSelectionScreen({ navigation }: Props) {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.body}>
        <View style={styles.headerBlock}>
          <Text style={typography.h1Black}>Where Do You Want to Eat?</Text>
          <Text style={typography.body}>Choose the city you&apos;re in.</Text>
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color={colors.textSecondary} />
          <Text style={[typography.body, { opacity: 0.6 }]}>Search a city...</Text>
        </View>

        <View>
          <Text style={[typography.buttonLabel, styles.sectionTitle]}>Popular Cities</Text>
          <FlatList
            data={CITIES}
            keyExtractor={(item) => item.name}
            numColumns={3}
            columnWrapperStyle={styles.cityRow}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Pressable style={styles.cityItem} onPress={() => setSelectedCity(item.name)}>
                <PhotoPlaceholder
                  source={item.image}
                  icon="location-outline"
                  style={[
                    styles.cityImage,
                    selectedCity === item.name ? styles.cityImageSelected : null,
                  ]}
                />
                <Text style={typography.bodyStrong}>{item.name}</Text>
              </Pressable>
            )}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.languageRow}>
          <Text style={typography.bodyStrong}>Language: English</Text>
          <Ionicons name="chevron-down" size={20} color={colors.textPrimary} />
        </Pressable>
        <Button
          label="Confirm"
          onPress={() => navigation.getParent()?.navigate("Main" as never)}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  body: {
    padding: spacing.xl,
    gap: spacing.xl,
  },
  headerBlock: {
    gap: spacing.sm,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    padding: spacing.lg,
  },
  sectionTitle: {
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
  cityRow: {
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  cityItem: {
    alignItems: "center",
    gap: spacing.sm,
    width: 100,
  },
  cityImage: {
    width: 100,
    height: 100,
    borderRadius: radius.cardLarge,
  },
  cityImageSelected: {
    borderWidth: 3,
    borderColor: colors.primary,
  },
  footer: {
    padding: spacing.xl,
    gap: spacing.md,
  },
  languageRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: spacing.lg,
  },
});
