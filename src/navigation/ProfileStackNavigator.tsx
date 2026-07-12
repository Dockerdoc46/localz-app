import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { ProfileStackParamList } from "./types";
import { UserProfileScreen } from "@/screens/settings/UserProfileScreen";
import { WalletRewardsScreen } from "@/screens/settings/WalletRewardsScreen";
import { NotificationsListScreen } from "@/screens/settings/NotificationsListScreen";
import { SettingsMainScreen } from "@/screens/settings/SettingsMainScreen";
import { HelpSafetyScreen } from "@/screens/settings/HelpSafetyScreen";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export function ProfileStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="WalletRewards" component={WalletRewardsScreen} />
      <Stack.Screen name="NotificationsList" component={NotificationsListScreen} />
      <Stack.Screen name="SettingsMain" component={SettingsMainScreen} />
      <Stack.Screen name="HelpSafety" component={HelpSafetyScreen} />
    </Stack.Navigator>
  );
}
