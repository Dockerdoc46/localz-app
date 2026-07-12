import React from "react";
import { useHostMode } from "@/context/HostModeContext";
import { UserProfileScreen } from "./UserProfileScreen";
import { HostProfileScreen } from "@/screens/host/HostProfileScreen";

/** Router for the "Profile" tab initial screen — swaps guest/host profile UI. */
export function ProfileHomeScreen() {
  const { isHostMode } = useHostMode();
  return isHostMode ? <HostProfileScreen /> : <UserProfileScreen />;
}
