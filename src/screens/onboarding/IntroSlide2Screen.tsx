import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { OnboardingStackParamList } from "@/navigation/types";
import { IntroSlideTemplate } from "@/components/IntroSlideTemplate";

// Figma node 3:51 — "intro-slide-2"
type Props = NativeStackScreenProps<OnboardingStackParamList, "IntroSlide2">;

export function IntroSlide2Screen({ navigation }: Props) {
  return (
    <IntroSlideTemplate
      step={1}
      icon="calendar-outline"
      title="Book Your Seat"
      description="Choose the experience you prefer and book in a few taps. Simple, safe, and transparent."
      ctaLabel="Next"
      onPressCta={() => navigation.navigate("IntroSlide3")}
    />
  );
}
