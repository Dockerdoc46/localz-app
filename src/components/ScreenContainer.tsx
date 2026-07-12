import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView, Edge } from "react-native-safe-area-context";
import { colors } from "@/theme";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  edges?: Edge[];
};

/** Standard screen wrapper: safe area + app background color. */
export function ScreenContainer({ children, style, edges = ["top", "bottom"] }: Props) {
  return (
    <SafeAreaView style={[styles.container, style]} edges={edges}>
      <View style={styles.flex}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  flex: {
    flex: 1,
  },
});
