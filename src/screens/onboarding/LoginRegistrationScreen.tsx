import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { OnboardingStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { Button } from "@/components/Button";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 3:93 — "login-registration"
type Props = NativeStackScreenProps<OnboardingStackParamList, "LoginRegistration">;

function SocialButton({ iconName }: { iconName: keyof typeof Ionicons.glyphMap }) {
  return (
    <Pressable style={styles.socialButton}>
      <Ionicons name={iconName} size={26} color={colors.textPrimary} />
    </Pressable>
  );
}

export function LoginRegistrationScreen({ navigation }: Props) {
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.header}>
        <Text style={typography.brandSmall}>localz</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.fields}>
          <View style={styles.field}>
            <Text style={typography.label}>Email</Text>
            <Text style={[typography.bodyStrong, styles.placeholderText]}>
              mario.rossi@email.it
            </Text>
          </View>
          <View style={styles.field}>
            <Text style={typography.label}>Phone</Text>
            <Text style={[typography.bodyStrong, styles.placeholderText]}>
              +39 345 678 9101
            </Text>
          </View>
        </View>

        <View style={styles.actions}>
          <Button
            label="Sign Up"
            fullRadius={false}
            onPress={() => navigation.navigate("IdentityVerification")}
          />
          <Button
            label="Log In"
            variant="secondary"
            fullRadius={false}
            onPress={() => navigation.navigate("IdentityVerification")}
          />
        </View>

        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={typography.label}>Or</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>
          <SocialButton iconName="logo-google" />
          <SocialButton iconName="logo-apple" />
          <SocialButton iconName="logo-facebook" />
        </View>
      </View>

      <View style={styles.footer} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    paddingTop: spacing.xxl,
  },
  body: {
    padding: spacing.xl,
    gap: spacing.xl,
  },
  fields: {
    gap: spacing.lg,
  },
  field: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.lg,
  },
  placeholderText: {
    opacity: 0.3,
  },
  actions: {
    gap: spacing.md,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.lg,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  socialRow: {
    flexDirection: "row",
    gap: spacing.lg,
    justifyContent: "center",
  },
  socialButton: {
    width: 64,
    height: 64,
    borderRadius: radius.card,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: 40,
  },
});
