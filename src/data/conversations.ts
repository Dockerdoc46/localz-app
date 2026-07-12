// Mock chat data matching the Figma "chat-list" / "chat-thread" screens.

export type Message = {
  id: string;
  text: string;
  time: string;
  fromMe: boolean;
};

export type Conversation = {
  id: string;
  hostName: string;
  lastMessage: string;
  time: string;
  unread: boolean;
  tableTitle: string;
  tableTime: string;
  messages: Message[];
};

export const CONVERSATIONS: Conversation[] = [
  {
    id: "sofia",
    hostName: "Sofia",
    lastMessage: "We're expecting you at 8:30 PM!",
    time: "14:20",
    unread: true,
    tableTitle: "Dinner at Sofia's",
    tableTime: "October 12 • 8:30 PM",
    messages: [
      {
        id: "1",
        text: "Hi! I can't wait to host you. Any particular sauce preferences?",
        time: "14:15",
        fromMe: false,
      },
      {
        id: "2",
        text: "Hi Sofia! A bit of chili would be fantastic if possible.",
        time: "14:20",
        fromMe: true,
      },
    ],
  },
  {
    id: "lukas",
    hostName: "Lukas",
    lastMessage: "Sure, no problem with the time.",
    time: "Yesterday",
    unread: false,
    tableTitle: "Berlin Brunch Table",
    tableTime: "Saturday • 10:00 AM",
    messages: [
      { id: "1", text: "Sure, no problem with the time.", time: "Yesterday", fromMe: false },
    ],
  },
  {
    id: "clara",
    hostName: "Clara",
    lastMessage: "Thank you so much for the wonderful evening.",
    time: "Mon",
    unread: false,
    tableTitle: "Sunday Family Lunch",
    tableTime: "Sunday • 1:00 PM",
    messages: [
      {
        id: "1",
        text: "Thank you so much for the wonderful evening.",
        time: "Mon",
        fromMe: false,
      },
    ],
  },
];

export function getConversationByHost(hostName: string): Conversation | undefined {
  return CONVERSATIONS.find((c) => c.hostName.toLowerCase() === hostName.toLowerCase());
}
