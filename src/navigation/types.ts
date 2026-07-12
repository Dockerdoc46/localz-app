import { NavigatorScreenParams } from "@react-navigation/native";

// ---- Onboarding (guest) stack — matches Figma section "1. Login & Onboarding (Guest)" ----
export type OnboardingStackParamList = {
  SplashWelcome: undefined;
  IntroSlide1: undefined;
  IntroSlide2: undefined;
  IntroSlide3: undefined;
  LoginRegistration: undefined;
  IdentityVerification: undefined;
  CityLanguageSelection: undefined;
};

// ---- Chat stack ----
export type ChatStackParamList = {
  ChatList: undefined;
  ChatThread: { threadId: string; hostName: string };
};

// ---- Profile stack — matches Figma section "General & Settings" plus
// "User as a host" (create-table, host-rewards). ProfileHome renders either
// the guest profile (59:2) or the host profile (4:549) depending on the
// global host-mode toggle (see HostModeContext). ----
export type ProfileStackParamList = {
  ProfileHome: undefined;
  WalletRewards: undefined;
  NotificationsList: undefined;
  SettingsMain: undefined;
  HelpSafety: undefined;
  CreateTableStep1: undefined;
  CreateTableStep2: { mealType: string; seats: number };
  HostRewards: undefined;
};

// ---- Bottom tabs — matches the 5-tab bottom-nav shown across Figma discovery/map/booking screens ----
export type MainTabParamList = {
  ExploreTab: undefined;
  MapTab: undefined;
  BookingsTab: undefined;
  MessagesTab: NavigatorScreenParams<ChatStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

// ---- Root ----
// TableDetail / booking flow / filters live at the root level (presented as
// push/modal screens) so they're reachable from both the Explore feed and
// the Map pins without duplicating routes per tab.
export type RootStackParamList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  HomeFiltersExpanded: undefined;
  TableDetail: { tableId: string };
  BookingSeats: { tableId: string };
  BookingSummary: { tableId: string; seats: number };
  BookingConfirmation: { tableId: string };
  PostDinnerReview: { tableId: string };
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
