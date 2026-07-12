import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { ChatStackParamList } from "./types";
import { ChatListScreen } from "@/screens/chat/ChatListScreen";
import { ChatThreadScreen } from "@/screens/chat/ChatThreadScreen";

const Stack = createNativeStackNavigator<ChatStackParamList>();

export function ChatStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatList" component={ChatListScreen} />
      <Stack.Screen name="ChatThread" component={ChatThreadScreen} />
    </Stack.Navigator>
  );
}
