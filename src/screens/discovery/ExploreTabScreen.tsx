import React from "react";
import { useHostMode } from "@/context/HostModeContext";
import { HomeDiscoveryFeedScreen } from "./HomeDiscoveryFeedScreen";
import { HostDashboardScreen } from "@/screens/host/HostDashboardScreen";

/**
 * The "Explore" tab shows the guest discovery feed (Figma 3:205) normally,
 * or the host dashboard (Figma 4:12) when the user has switched to Localz
 * (host) mode via the profile toggle.
 */
export function ExploreTabScreen() {
  const { isHostMode } = useHostMode();
  return isHostMode ? <HostDashboardScreen /> : <HomeDiscoveryFeedScreen />;
}
