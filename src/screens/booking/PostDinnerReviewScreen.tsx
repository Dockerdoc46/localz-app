import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions, useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { Button } from "@/components/Button";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 55:2 — "post-dinner-review"
const PHOTO_OPTIONS = [
  { key: "dish", emoji: "🍝", label: "Dish only" },
  { key: "group", emoji: "🥂", label: "With the group" },
] as const;

export function PostDinnerReviewScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [rating, setRating] = useState(4);
  const [comment, setComment] = useState("");
  const [photoOption, setPhotoOption] = useState<"dish" | "group">("dish");
  const [submitted, setSubmitted] = useState(false);

  function goHome() {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Main" }],
      })
    );
  }

  function submit() {
    setSubmitted(true);
    setTimeout(goHome, 900);
  }

  function skip() {
    goHome();
  }

  return (
    <ScreenContainer edges={["top"]}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={colors.textPrimary} />
        </Pressable>
        <Text style={typography.h2}>Rate Your Dinner</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.tableCard}>
          <View style={styles.tableThumb} />
          <View>
            <Text style={typography.bodyStrong}>Homemade Pasta</Text>
            <Text style={typography.caption}>Sofia · Tonight 8:30 PM</Text>
          </View>
        </View>

        <View style={styles.starsRow}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Pressable key={star} onPress={() => setRating(star)}>
              <Ionicons
                name={star <= rating ? "star" : "star-outline"}
                size={36}
                color={star <= rating ? colors.primary : colors.border}
              />
            </Pressable>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={typography.bodyStrong}>Share your experience</Text>
          <TextInput
            style={styles.textarea}
            multiline
            placeholder="Tell others what made this table special..."
            placeholderTextColor={colors.textSecondary}
            value={comment}
            onChangeText={setComment}
          />
        </View>

        <View style={styles.section}>
          <Text style={typography.bodyStrong}>Add a photo (optional)</Text>
          <View style={styles.photoRow}>
            {PHOTO_OPTIONS.map((option) => (
              <Pressable
                key={option.key}
                style={[
                  styles.photoOption,
                  photoOption === option.key ? styles.photoOptionActive : null,
                ]}
                onPress={() => setPhotoOption(option.key)}
              >
                <Text style={styles.photoEmoji}>{option.emoji}</Text>
                <Text style={typography.label}>{option.label}</Text>
              </Pressable>
            ))}
          </View>
          <Text style={typography.caption}>
            Group photos are only shared with people who attended this table.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button label={submitted ? "Thank you!" : "Submit Review"} onPress={submit} disabled={submitted} />
        <Pressable onPress={skip}>
          <Text style={styles.skipLink}>Skip for now</Text>
        </Pressable>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.lg,
  },
  body: {
    padding: spacing.xl,
    gap: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  tableCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.md,
  },
  tableThumb: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: colors.border,
  },
  starsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.md,
    paddingVertical: spacing.md,
  },
  section: {
    gap: spacing.sm,
  },
  textarea: {
    minHeight: 100,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.md,
    fontFamily: typography.body.fontFamily,
    fontSize: 15,
    color: colors.textPrimary,
    textAlignVertical: "top",
  },
  photoRow: {
    flexDirection: "row",
    gap: spacing.md,
  },
  photoOption: {
    flex: 1,
    alignItems: "center",
    gap: 6,
    paddingVertical: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    backgroundColor: colors.surface,
  },
  photoOptionActive: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  photoEmoji: {
    fontSize: 28,
  },
  footer: {
    padding: spacing.xl,
    gap: spacing.md,
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  skipLink: {
    fontFamily: typography.label.fontFamily,
    fontSize: 14,
    color: colors.textSecondary,
    textDecorationLine: "underline",
  },
});
