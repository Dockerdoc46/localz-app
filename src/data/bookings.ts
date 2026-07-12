import { getTableById } from "./tables";

// Mock booking history — links a guest to a table they've booked (or attended).
// Replace with real API data once the backend exists.

export type BookingStatus = "upcoming" | "past";

export type Booking = {
  id: string;
  tableId: string;
  seats: number;
  status: BookingStatus;
  dateLabel: string; // display string for the booking
};

export const MOCK_BOOKINGS: Booking[] = [
  { id: "b1", tableId: "sofia-dinner", seats: 2, status: "upcoming", dateLabel: "Tonight, 8:30 PM" },
  { id: "b2", tableId: "lukas-brunch", seats: 1, status: "upcoming", dateLabel: "Saturday, 10:00 AM" },
  { id: "b3", tableId: "clara-lunch", seats: 3, status: "past", dateLabel: "Last Sunday, 1:00 PM" },
];

export function getBookingsByStatus(status: BookingStatus) {
  return MOCK_BOOKINGS
    .filter((b) => b.status === status)
    .map((b) => ({ ...b, table: getTableById(b.tableId) }))
    .filter((b) => b.table !== undefined);
}
