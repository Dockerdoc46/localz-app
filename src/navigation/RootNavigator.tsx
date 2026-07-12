import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./types";
import { OnboardingNavigator } from "./OnboardingNavigator";
import { MainTabNavigator } from "./MainTabNavigator";
import { HomeFiltersExpandedScreen } from "@/screens/discovery/HomeFiltersExpandedScreen";
import { TableDetailScreen } from "@/screens/discovery/TableDetailScreen";
import { BookingSeatsScreen } from "@/screens/booking/BookingSeatsScreen";
import { BookingSummaryScreen } from "@/screens/booking/BookingSummaryScreen";
import { BookingConfirmationScreen } from "@/screens/booking/BookingConfirmationScreen";
import { PostDinnerReviewScreen } from "@/screens/booking/PostDinnerReviewScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen
          name="HomeFiltersExpanded"
          component={HomeFiltersExpandedScreen}
          options={{ presentation: "transparentModal", animation: "fade" }}
        />
        <Stack.Screen
          name="TableDetail"
          component={TableDetailScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="BookingSeats"
          component={BookingSeatsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="BookingSummary" component={BookingSummaryScreen} />
        <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
        <Stack.Screen name="PostDinnerReview" component={PostDinnerReviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
