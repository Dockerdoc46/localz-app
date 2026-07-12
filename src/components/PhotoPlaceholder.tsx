import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/theme";

type Props = {
  source?: ImageSourcePropType; // pass a require('../../assets/images/xxx.jpg') once exported from Figma
  style?: ViewStyle;
  icon?: keyof typeof Ionicons.glyphMap;
};

/**
 * Renders the real photo if `source` is provided, otherwise a themed
 * placeholder. Figma photo assets couldn't be auto-exported (sandbox has no
 * network access to figma.com) — see README "Esportare le immagini da Figma".
 */
export function PhotoPlaceholder({ source, style, icon = "image-outline" }: Props) {
  if (source) {
    return <Image source={source} style={[styles.image, style]} resizeMode="cover" />;
  }
  return (
    <View style={[styles.image, styles.placeholder, style]}>
      <Ionicons name={icon} size={32} color={colors.border} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  placeholder: {
    backgroundColor: "#F1E9DD",
    alignItems: "center",
    justifyContent: "center",
  },
});
