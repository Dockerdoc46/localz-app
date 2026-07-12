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
import { BookingConfirmationScreen } from "@/screens/booking/BookingConfirmation