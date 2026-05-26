import React, { useMemo, useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const initialChats = [
  {
    id: 1,
    type: "chat",
    name: "dr. Andi Nugroho, Sp.B",
    message: "Operasi laparotomi sudah selesai...",
    time: "09:45",
    unread: 2,
  },
  {
    id: 2,
    type: "chat",
    name: "Ns. Siti Rahayu, S.Kep",
    message: "Terima kasih Ns. Siti",
    time: "09:32",
    unread: 0,
  },
  {
    id: 3,
    type: "group",
    name: "Group ICU",
    message: "Pasien di ruang ICU stabil",
    time: "09:28",
    unread: 5,
  },
  {
    id: 4,
    type: "chat",
    name: "Ns. Dewi Lestari",
    message: "Dok, triage pasien baru...",
    time: "Kemarin",
    unread: 1,
  },
];

export default function ChatListScreen({ navigation }: any) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // FILTER + SEARCH
  const filteredChats = useMemo(() => {
    return initialChats.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.message.toLowerCase().includes(search.toLowerCase());

      const matchFilter =
        activeFilter === "all" ? true : activeFilter === item.type;

      return matchSearch && matchFilter;
    });
  }, [search, activeFilter]);

  return (
    <SafeAreaView className="flex-1 bg-white pt-5 px-5">
      <StatusBar style="dark" />

      {/* HEADER */}
      <View className="flex-row items-center justify-between">
        <Text className="text-4xl font-extrabold text-gray-800">Chat</Text>

        <TouchableOpacity
          className="bg-gray-100 p-3 rounded-full"
          onPress={() => navigation.navigate("NewChat")}
        >
          <Ionicons name="add" size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      {/* SEARCH */}
      <View className="bg-[#f5f6f8] rounded-2xl px-4 py-1 mt-6 flex-row items-center">
        <Ionicons name="search" size={20} color="#9ca3af" />

        <TextInput
          placeholder="Cari staf, departemen, grup..."
          value={search}
          onChangeText={setSearch}
          className="flex-1 ml-3 py-3"
        />
      </View>

      {/* FILTER */}
      <View className="flex-row mt-5">
        <TouchableOpacity
          onPress={() => setActiveFilter("all")}
          className={`px-5 py-2 rounded-full mr-3 ${
            activeFilter === "all" ? "bg-green-100" : "bg-gray-100"
          }`}
        >
          <Text
            className={`font-semibold ${
              activeFilter === "all" ? "text-green-700" : "text-gray-500"
            }`}
          >
            Semua
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveFilter("chat")}
          className={`px-5 py-2 rounded-full mr-3 ${
            activeFilter === "chat" ? "bg-green-100" : "bg-gray-100"
          }`}
        >
          <Text
            className={`font-semibold ${
              activeFilter === "chat" ? "text-green-700" : "text-gray-500"
            }`}
          >
            Chat
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveFilter("group")}
          className={`px-5 py-2 rounded-full ${
            activeFilter === "group" ? "bg-green-100" : "bg-gray-100"
          }`}
        >
          <Text
            className={`font-semibold ${
              activeFilter === "group" ? "text-green-700" : "text-gray-500"
            }`}
          >
            Grup
          </Text>
        </TouchableOpacity>
      </View>

      {/* CHAT LIST */}
      <ScrollView className="mt-5" showsVerticalScrollIndicator={false}>
        {filteredChats.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            className="flex-row items-center mb-6"
            onPress={() =>
              navigation.navigate("ChatDetail", {
                chat: item,
              })
            }
          >
            <Image
              source={{
                uri: `https://i.pravatar.cc/150?img=${index + 10}`,
              }}
              className="w-14 h-14 rounded-full"
            />

            <View className="flex-1 ml-4">
              <Text className="font-bold text-gray-800 text-base">
                {item.name}
              </Text>

              <Text className="text-gray-500 mt-1" numberOfLines={1}>
                {item.message}
              </Text>
            </View>

            <View className="items-end">
              <Text className="text-gray-400 text-xs">{item.time}</Text>

              {item.unread > 0 && (
                <View className="bg-green-600 min-w-[24px] h-6 px-1 rounded-full items-center justify-center mt-2">
                  <Text className="text-white text-xs font-bold">
                    {item.unread}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}

        {filteredChats.length === 0 && (
          <View className="items-center mt-20">
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={60}
              color="#d1d5db"
            />

            <Text className="text-gray-400 mt-4">Chat tidak ditemukan</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
