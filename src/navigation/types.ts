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

// ---- Host stack — matches Figma section "User as a host" (wired in a later iteration) ----
export type HostStackParamList = {
  HostDashboard: undefined;
  CreateTableStep1: undefined;
  CreateTableStep2: undefined;
  HostRewards: undefined;
  HostGuestToggle: undefined;
};

// ---- Profile / Settings stack — matches Figma section "General & Settings" ----
export type ProfileStackParamList = {
  UserProfile: undefined;
  WalletRewards: undefined;
  NotificationsList: undefined;
  SettingsMain: undefined;
  HelpSafety: undefined;
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
  // eslint-disable-next-line @typescript-esl