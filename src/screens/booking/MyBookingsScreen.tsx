import React from "react";
import { PlaceholderScreen } from "@/components/PlaceholderScreen";

// "Bookings" tab (calendar icon) shown in the Figma bottom-nav across
// discovery/map screens — no dedicated list screen was included in the
// exported Figma file yet, so this shows upcoming/past bookings once wired
// to real booking data.
export function MyBookingsScreen() {
  return (
    <PlaceholderScreen
      title="Le Tue Prenotazioni"
      note="Qui compariranno le tavole prenotate, passate e future."
    />
  );
}
