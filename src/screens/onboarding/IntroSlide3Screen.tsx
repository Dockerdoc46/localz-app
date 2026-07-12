import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { OnboardingStackParamList } from "@/navigation/types";
import { IntroSlideTemplate } from "@/components/IntroSlideTemplate";

// Figma node 3:72 — "intro-slide-3"
type Props = NativeStackScreenProps<OnboardingStackParamList, "IntroSlide3">;

export function IntroSlide3Screen({ navigation }: Props) {
  return (
    <IntroSlideTemplate
      step={2}
      icon="people-outline"
      image={require("../../../assets/images/intro-3-meet.png")}
      title="Meet New People"
      description="Sit at the table with students, travelers, and locals. Share stories and unique flavors."
      ctaLabel="Start"
      onPressCta={() => navigation.navigate("LoginRegistration")}
    />
  );
}
