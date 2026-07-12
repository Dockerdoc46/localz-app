import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { ProfileStackParamList } from "./types";
import { ProfileHomeScreen } from "@/screens/settings/ProfileHomeScreen";
import { WalletRewardsScreen } from "@/screens/settings/WalletRewardsScreen";
import { NotificationsListScreen } from "@/screens/settings/NotificationsListScreen";
import { SettingsMainScreen } from "@/screens/settings/SettingsMainScreen";
import { HelpSafetyScreen } from "@/screens/settings/HelpSafetyScreen";
import { CreateTableStep1Screen } from "@/screens/host/CreateTableStep1Screen";
import { CreateTableStep2Screen } from "@/screens/host/CreateTableStep2Screen";
import { HostRewardsScreen } from "@/screens/host/HostRewardsScreen";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export function ProfileStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileHome" component={ProfileHomeScreen} />
      <Stack.Screen name="WalletRewards" component={WalletRewardsScreen} />
      <Stack.Screen name="NotificationsList" component={NotificationsListScreen} />
      <Stack.Screen name="SettingsMain" component={SettingsMainScreen} />
      <Stack.Screen name="HelpSafety" component={HelpSafetyScreen} />
      <Stack.Screen name="CreateTableStep1" component={CreateTableStep1Screen} />
      <Stack.Screen name="CreateTableStep2" component={CreateTableStep2Screen} />
      <Stack.Screen name="HostRewards" component={HostRewardsScreen} />
    </Stack.Navigator>
  );
}
