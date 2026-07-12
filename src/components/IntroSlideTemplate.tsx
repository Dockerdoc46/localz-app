import React from "react";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "./ScreenContainer";
import { Button } from "./Button";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { Dots } from "./Dots";
import { spacing, typography } from "@/theme";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  image?: ImageSourcePropType;
  step: number; // 0,1,2
  ctaLabel: string;
  onPressCta: () => void;
};

/** Shared layout for intro-slide-1 / 2 / 3 (Figma nodes 3:30, 3:51, 3:72). */
export function IntroSlideTemplate({ title, description, icon, image, step, ctaLabel, onPressCta }: Props) {
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.imageBlock}>
        <PhotoPlaceholder source={image} icon={icon} style={styles.image} />
        <View style={styles.textBlock}>
          <Text style={typography.h1}>{title}</Text>
          <Text style={typography.body}>{description}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Dots count={3} activeIndex={step} />
        <Button label={ctaLabel} onPress={onPressCta} style={styles.button} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  imageBlock: {
    padding: spacing.xl,
    gap: spacing.xxl,
  },
  image: {
    height: 380,
    borderRadius: 40,
  },
  textBlock: {
    gap: spacing.lg,
  },
  footer: {
    padding: spacing.xl,
    alignItems: "center",
    gap: spacing.xxl,
  },
  button: {
    width: "100%",
  },
});
