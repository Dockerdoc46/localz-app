import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { HostStackParamList } from "./types";
import { HostDashboardScreen } from "@/screens/host/HostDashboardScreen";
import { CreateTableStep1Screen } from "@/screens/host/CreateTableStep1Screen";
import { CreateTableStep2Screen } from "@/screens/host/CreateTableStep2Screen";
import { HostRewardsScreen } from "@/screens/host/HostRewardsScreen";
import { HostGuestToggleScreen } from "@/screens/host/HostGuestToggleScreen";

const Stack = createNativeStackNavigator<HostStackParamList>();

export function HostStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HostDashboard" component={HostDashboardScreen} />
      <Stack.Screen name="CreateTableStep1" component={CreateTableStep1Screen} />
      <Stack.Screen name="CreateTableStep2" component={CreateTableStep2Screen} />
      <Stack.Screen name="HostRewards" component={HostRewardsScreen} />
      <Stack.Screen name="HostGuestToggle" component={HostGuestToggleScreen} />
    </Stack.Navigator>
  );
}
