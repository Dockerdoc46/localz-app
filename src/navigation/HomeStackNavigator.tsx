import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { HomeStackParamList } from "./types";
import { HomeDiscoveryFeedScreen } from "@/screens/discovery/HomeDiscoveryFeedScreen";
import { HomeFiltersExpandedScreen } from "@/screens/discovery/HomeFiltersExpandedScreen";
import { MapViewScreen } from "@/screens/discovery/MapViewScreen";
import { MapBottomSheetScreen } from "@/screens/discovery/MapBottomSheetScreen";
import { TableDetailScreen } from "@/screens/discovery/TableDetailScreen";
import { BookingSeatsScreen } from "@/screens/booking/BookingSeatsScreen";
import { BookingSummaryScreen } from "@/screens/booking/BookingSummaryScreen";
import { BookingConfirmationScreen } from "@/screens/booking/BookingConfirmationScreen";
import { PostDinnerReviewScreen } from "@/screens/booking/PostDinnerReviewScreen";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeDiscoveryFeed" component={HomeDiscoveryFeedScreen} />
      <Stack.Screen name="HomeFiltersExpanded" component={HomeFiltersExpandedScreen} />
      <Stack.Screen name="MapView" component={MapViewScreen} />
      <Stack.Screen name="MapBottomSheet" component={MapBottomSheetScreen} />
      <Stack.Screen name="TableDetail" component={TableDetailScreen} />
      <Stack.Screen name="BookingSeats" component={BookingSeatsScreen} />
      <Stack.Screen name="BookingSummary" component={BookingSummaryScreen} />
      <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
      <Stack.Screen name="PostDinnerReview" component={PostDinnerReviewScreen} />
    </Stack.Navigator>
  );
}
