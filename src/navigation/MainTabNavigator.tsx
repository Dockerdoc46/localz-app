import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import type { MainTabParamList } from "./types";
import { HomeDiscoveryFeedScreen } from "@/screens/discovery/HomeDiscoveryFeedScreen";
import { MapScreen } from "@/screens/discovery/MapScreen";
import { MyBookingsScreen } from "@/screens/booking/MyBookingsScreen";
import { ChatStackNavigator } from "./ChatStackNavigator";
import { ProfileStackNavigator } from "./ProfileStackNavigator";
import { colors } from "@/theme";

const Tab = createBottomTabNavigator<MainTabParamList>();

const ICONS: Record<keyof MainTabParamList, keyof typeof Ionicons.glyphMap> = {
  ExploreTab: "compass-outline",
  MapTab: "map-outline",
  BookingsTab: "calendar-outline",
  MessagesTab: "chatbubble-outline",
  ProfileTab: "person-outline",
};

// Labels match the bottom-nav copy in Figma: Explore, Map, Bookings, Messages, Profile
const LABELS: Record<keyof MainTabParamList, string> = {
  ExploreTab: "Explore",
  MapTab: "Map",
  BookingsTab: "Bookings",
  MessagesTab: "Messages",
  ProfileTab: "Profile",
};

export function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: { backgroundColor: colors.bg, borderTopColor: colors.border },
        tabBarLabel: LABELS[route.name as keyof MainTabParamList],
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={ICONS[route.name as keyof MainTabParamList]} color={color} size={size} />
        ),
      })}
    >
      <Tab.Screen name="ExploreTab" component={HomeDisc