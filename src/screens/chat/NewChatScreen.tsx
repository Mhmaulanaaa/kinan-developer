import React from "react";

import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const users = [
  {
    id: 1,
    name: "dr. Budi Santoso",
    role: "Dokter Bedah",
  },
  {
    id: 2,
    name: "Ns. Amanda Putri",
    role: "Perawat ICU",
  },
  {
    id: 3,
    name: "IT Support RS",
    role: "Teknologi Informasi",
  },
];

export default function NewChatScreen({ navigation }: any) {
  const openChat = (user: any) => {
    navigation.navigate("ChatDetail", {
      chat: user,
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* HEADER */}
      <View className="px-5 py-4 flex-row items-center border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#111827" />
        </TouchableOpacity>

        <Text className="text-2xl font-bold ml-4">Chat Baru</Text>
      </View>

      {/* USER LIST */}
      <ScrollView className="px-5 pt-5">
        {users.map((user, index) => (
          <TouchableOpacity
            key={user.id}
            onPress={() => openChat(user)}
            className="flex-row items-center mb-6"
          >
            <Image
              source={{
                uri: `https://i.pravatar.cc/150?img=${index + 20}`,
              }}
              className="w-14 h-14 rounded-full"
            />

            <View className="ml-4">
              <Text className="font-bold text-base text-gray-800">
                {user.name}
              </Text>

              <Text className="text-gray-500 mt-1">{user.role}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
