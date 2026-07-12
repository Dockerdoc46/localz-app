import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import type { MainTabParamList } from "./types";
import { HomeStackNavigator } from "./HomeStackNavigator";
import { ChatStackNavigator } from "./ChatStackNavigator";
import { HostStackNavigator } from "./HostStackNavigator";
import { ProfileStackNavigator } from "./ProfileStackNavigator";
import { colors } from "@/theme";

const Tab = createBottomTabNavigator<MainTabParamList>();

const ICONS: Record<keyof MainTabParamList, keyof typeof Ionicons.glyphMap> = {
  HomeTab: "compass-outline",
  ChatTab: "chatbubble-outline",
  HostTab: "restaurant-outline",
  ProfileTab: "person-outline",
};

const LABELS: Record<keyof MainTabParamList, string> = {
  HomeTab: "Discover",
  ChatTab: "Messages",
  HostTab: "Host",
  ProfileTab: "Profile",
};

export function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
        tabBarLabel: LABELS[route.name as keyof MainTabParamList],
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={ICONS[route.name as keyof MainTabParamList]} color={color} size={size} />
        ),
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="ChatTab" component={ChatStackNavigator} />
      <Tab.Screen name="HostTab" component={HostStackNavigator} />
      <Tab.Screen name="ProfileTab" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}
