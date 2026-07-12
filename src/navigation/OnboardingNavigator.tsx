import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { OnboardingStackParamList } from "./types";
import { SplashWelcomeScreen } from "@/screens/onboarding/SplashWelcomeScreen";
import { IntroSlide1Screen } from "@/screens/onboarding/IntroSlide1Screen";
import { IntroSlide2Screen } from "@/screens/onboarding/IntroSlide2Screen";
import { IntroSlide3Screen } from "@/screens/onboarding/IntroSlide3Screen";
import { LoginRegistrationScreen } from "@/screens/onboarding/LoginRegistrationScreen";
import { IdentityVerificationScreen } from "@/screens/onboarding/IdentityVerificationScreen";
import { CityLanguageSelectionScreen } from "@/screens/onboarding/CityLanguageSelectionScreen";

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export function OnboardingNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashWelcome" component={SplashWelcomeScreen} />
      <Stack.Screen name="IntroSlide1" component={IntroSlide1Screen} />
      <Stack.Screen name="IntroSlide2" component={IntroSlide2Screen} />
      <Stack.Screen name="IntroSlide3" component={IntroSlide3Screen} />
      <Stack.Screen name="LoginRegistration" component={LoginRegistrationScreen} />
      <Stack.Screen name="IdentityVerification" component={IdentityVerificationScreen} />
      <Stack.Screen name="CityLanguageSelection" component={CityLanguageSelectionScreen} />
    </Stack.Navigator>
  );
}
