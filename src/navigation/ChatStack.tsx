import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatScreen from "../screens/chat/ChatListScreen";
import ChatDetailScreen from "../screens/chat/ChatDetailScreen";
import NewChatScreen from "../screens/chat/NewChatScreen";
import ChatInternalScreen from "../screens/chat/ChatInternalScreen";

const Stack = createNativeStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
      <Stack.Screen name="NewChat" component={NewChatScreen} />
      <Stack.Screen name="ChatInternal" component={ChatInternalScreen} />
    </Stack.Navigator>
  );
}
