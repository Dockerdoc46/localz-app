import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { OnboardingStackParamList } from "@/navigation/types";
import { IntroSlideTemplate } from "@/components/IntroSlideTemplate";

// Figma node 3:30 — "intro-slide-1"
type Props = NativeStackScreenProps<OnboardingStackParamList, "IntroSlide1">;

export function IntroSlide1Screen({ navigation }: Props) {
  return (
    <IntroSlideTemplate
      step={0}
      icon="restaurant-outline"
      image={require("../../../assets/images/intro-1-discover.png")}
      title="Discover Local Tables"
      description="Find local hosts ready to share an authentic meal with you. No restaurants, just real hospitality."
      ctaLabel="Next"
      onPressCta={() => navigation.navigate("IntroSlide2")}
    />
  );
}
