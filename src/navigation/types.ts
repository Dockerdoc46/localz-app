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

// ---- Home / Discovery / Booking stack ----
export type HomeStackParamList = {
  HomeDiscoveryFeed: undefined;
  HomeFiltersExpanded: undefined;
  MapView: undefined;
  MapBottomSheet: undefined;
  TableDetail: { tableId: string };
  BookingSeats: { tableId: string };
  BookingSummary: { tableId: string; seats: number };
  BookingConfirmation: { bookingId: string };
  PostDinnerReview: { bookingId: string };
};

// ---- Chat stack ----
export type ChatStackParamList = {
  ChatList: undefined;
  ChatThread: { threadId: string; hostName: string };
};

// ---- Host stack — matches Figma section "User as a host" ----
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

// ---- Bottom tabs ----
export type MainTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  ChatTab: NavigatorScreenParams<ChatStackParamList>;
  HostTab: NavigatorScreenParams<HostStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

// ---- Root ----
export type RootStackParamList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
