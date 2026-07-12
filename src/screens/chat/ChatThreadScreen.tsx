import React, { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ChatStackParamList } from "@/navigation/types";
import { ScreenContainer } from "@/components/ScreenContainer";
import { getConversationByHost, type Message } from "@/data/conversations";
import { colors, radius, spacing, typography } from "@/theme";

// Figma node 3:969 — "chat-thread"
type Props = NativeStackScreenProps<ChatStackParamList, "ChatThread">;

export function ChatThreadScreen({ route }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<ChatStackParamList>>();
  const conversation = getConversationByHost(route.params.hostName);
  const [messages, setMessages] = useState<Message[]>(conversation?.messages ?? []);
  const [draft, setDraft] = useState("");

  if (!conversation) return null;

  function send() {
    if (!draft.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: String(prev.length + 1), text: draft.trim(), time: "Now", fromMe: true },
    ]);
    setDraft("");
  }

  return (
    <ScreenContainer edges={["top"]}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </Pressable>
        <View style={styles.headerAvatar} />
        <View>
          <Text style={typography.h2}>{conversation.hostName}</Text>
          <Text style={[typography.caption, { fontFamily: typography.buttonLabel.fontFamily }]}>
            Online
          </Text>
        </View>
      </View>

      <View style={styles.tableCard}>
        <View style={styles.tableThumb} />
        <View>
          <Text style={typography.bodyStrong}>{conversation.tableTitle}</Text>
          <Text style={typography.caption}>{conversation.tableTime}</Text>
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={90}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messages}
          renderItem={({ item }) => (
            <View
              style={[
                styles.bubble,
                item.fromMe ? styles.bubbleSent : styles.bubbleReceived,
              ]}
            >
              <Text style={item.fromMe ? styles.bubbleTextSent : styles.bubbleTextReceived}>
                {item.text}
              </Text>
              <Text
                style={[
                  styles.bubbleTime,
                  item.fromMe ? styles.bubbleTimeSent : styles.bubbleTimeReceived,
                ]}
              >
                {item.time}
              </Text>
            </View>
          )}
        />

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Write a message..."
            placeholderTextColor={colors.textSecondary}
            value={draft}
            onChangeText={setDraft}
          />
          <Pressable style={styles.sendButton} onPress={send}>
            <Ionicons name="send" size={20} color={colors.onColor} />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.lg,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.border,
  },
  tableCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    margin: spacing.xl,
    marginBottom: 0,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    padding: spacing.md,
  },
  tableThumb: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.border,
  },
  messages: {
    padding: spacing.xl,
    gap: spacing.lg,
  },
  bubble: {
    maxWidth: "80%",
    padding: spacing.lg,
    gap: 4,
  },
  bubbleReceived: {
    alignSelf: "flex-start",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderTopLeftRadius: 4,
    borderTopRightRadius: radius.card,
    borderBottomLeftRadius: radius.card,
    borderBottomRightRadius: radius.card,
  },
  bubbleSent: {
    alignSelf: "flex-end",
    backgroundColor: colors.primary,
    borderTopLeftRadius: radius.card,
    borderTopRightRadius: radius.card,
    borderBottomLeftRadius: radius.card,
    borderBottomRightRadius: 4,
  },
  bubbleTextReceived: {
    fontFamily: typography.body.fontFamily,
    fontSize: 15,
    color: colors.textPrimary,
    lineHeight: 21,
  },
  bubbleTextSent: {
    fontFamily: typography.body.fontFamily,
    fontSize: 15,
    color: colors.onColor,
    lineHeight: 21,
  },
  bubbleTime: {
    fontSize: 11,
    textAlign: "right",
  },
  bubbleTimeReceived: {
    color: colors.textSecondary,
  },
  bubbleTimeSent: {
    color: colors.onColor,
    opacity: 0.8,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.lg,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  input: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.card,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    fontFamily: typography.body.fontFamily,
    fontSize: 15,
    color: colors.textPrimary,
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: radius.card,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
