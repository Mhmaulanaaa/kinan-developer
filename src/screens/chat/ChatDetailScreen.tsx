import React, { useRef, useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const initialMessages = [
  {
    id: 1,
    sender: "other",
    text: "Halo dok 👋",
    time: "09:10",
  },
  {
    id: 2,
    sender: "me",
    text: "Halo juga 🙏",
    time: "09:11",
  },
];

export default function ChatDetailScreen({ route, navigation }: any) {
  const { chat } = route.params;

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  const scrollViewRef = useRef<ScrollView | null>(null);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: message,
      time: "Now",
    };

    setMessages([...messages, newMessage]);

    setMessage("");

    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({
        animated: true,
      });
    }, 100);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f5f7fb]">
      <KeyboardAvoidingView
        className="flex-1 pt-8"
        behavior={Platform.OS === "android" ? "padding" : "height"}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1">
            {/* HEADER */}
            <View className="px-4 py-4 bg-white flex-row items-center border-b border-gray-100">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={28} color="#111827" />
              </TouchableOpacity>

              <Image
                source={{
                  uri: "https://i.pravatar.cc/150?img=12",
                }}
                className="w-11 h-11 rounded-full ml-3"
              />

              <View className="ml-3">
                <Text className="font-bold text-base text-gray-800">
                  {chat.name}
                </Text>

                <Text className="text-green-600 text-xs">Online</Text>
              </View>
            </View>

            {/* CHAT */}
            <ScrollView
              ref={scrollViewRef}
              className="flex-1 px-4 pt-4"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 20,
              }}
            >
              {messages.map((item: any) => (
                <View
                  key={item.id}
                  className={`mb-4 ${
                    item.sender === "me" ? "items-end" : "items-start"
                  }`}
                >
                  <View
                    className={`px-4 py-3 rounded-3xl max-w-[80%] ${
                      item.sender === "me"
                        ? "bg-green-600 rounded-br-md"
                        : "bg-white rounded-bl-md"
                    }`}
                  >
                    <Text
                      className={`text-[15px] ${
                        item.sender === "me" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {item.text}
                    </Text>
                  </View>

                  <Text className="text-gray-400 text-xs mt-1 px-2">
                    {item.time}
                  </Text>
                </View>
              ))}
            </ScrollView>

            {/* INPUT */}
            <View className="px-4 py-3 bg-white border-t border-gray-100">
              <View className="flex-row items-end">
                <TouchableOpacity className="bg-gray-100 w-12 h-12 rounded-full items-center justify-center mr-3">
                  <Ionicons name="add" size={26} color="#374151" />
                </TouchableOpacity>

                <View className="flex-1 bg-[#f3f4f6] rounded-3xl px-4 py-2 flex-row items-end">
                  <TextInput
                    placeholder="Ketik pesan..."
                    multiline
                    value={message}
                    onChangeText={setMessage}
                    className="flex-1 text-[15px] max-h-28 py-2"
                  />

                  <TouchableOpacity className="ml-2 mb-1">
                    <Ionicons name="camera-outline" size={24} color="#6b7280" />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  onPress={sendMessage}
                  className="bg-green-600 w-12 h-12 rounded-full items-center justify-center ml-3"
                >
                  <Ionicons name="send" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
