import React from "react";
import { StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { OnboardingStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { Button } from "@/components/Button";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { colors, spacing, typography } from "@/theme";

// Figma node 3:12 — "splash-welcome"
// Uncomment once exported from Figma (see README):
// const heroImage = require("../../../assets/images/hero-splash.jpg");

type Props = NativeStackScreenProps<OnboardingStackParamList, "SplashWelcome">;

export function SplashWelcomeScreen({ navigation }: Props) {
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.header}>
        <Text style={typography.brand}>localz</Text>
        <Text style={[typography.body, styles.tagline]}>
          Don&apos;t visit the city. Join the table.
        </Text>
      </View>

      <View style={styles.heroWrap}>
        <PhotoPlaceholder icon="restaurant-outline" style={styles.hero} />
      </View>

      <View style={styles.footer}>
        <Button
          label="Get Started"
          onPress={() => navigation.navigate("IntroSlide1")}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    gap: spacing.md,
    paddingTop: 100,
  },
  tagline: {
    textAlign: "center",
    width: 280,
  },
  heroWrap: {
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  hero: {
    width: 340,
    height: 340,
    borderRadius: 170,
    borderWidth: 2,
    borderColor: colors.border,
  },
  footer: {
    padding: spacing.xl,
  },
});
