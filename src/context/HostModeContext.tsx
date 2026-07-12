import React, { createContext, useContext, useMemo, useState } from "react";

type HostModeContextValue = {
  isHostMode: boolean;
  setHostMode: (value: boolean) => void;
  toggleHostMode: () => void;
};

const HostModeContext = createContext<HostModeContextValue | undefined>(undefined);

/**
 * Global "Guest / Localz (Host)" mode switch — matches the segmented control
 * shown in Figma on the profile screens (node 59:2 and 4:549). Flipping it
 * swaps what the Explore tab and Profile tab render, without duplicating the
 * bottom tab bar.
 */
export function HostModeProvider({ children }: { children: React.ReactNode }) {
  const [isHostMode, setHostMode] = useState(false);

  const value = useMemo(
    () => ({
      isHostMode,
      setHostMode,
      toggleHostMode: () => setHostMode((v) => !v),
    }),
    [isHostMode]
  );

  return <HostModeContext.Provider value={value}>{children}</HostModeContext.Provider>;
}

export function useHostMode() {
  const ctx = useContext(HostModeContext);
  if (!ctx) throw new Error("useHostMode must be used within a HostModeProvider");
  return ctx;
}
