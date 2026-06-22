import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const chats = [
  {
    name: "Dr. Andi",
    message: "Mohon review hasil lab pasien",
    time: "10:20",
    unread: 2,
    icon: "person",
    color: "#3b82f6",
  },
  {
    name: "Perawat Sinta",
    message: "Pasien sudah dipindahkan ke ruang ICU",
    time: "09:45",
    unread: 1,
    icon: "woman",
    color: "#22c55e",
  },
  {
    name: "Admin Rawat Inap",
    message: "Data pasien berhasil diperbarui",
    time: "Kemarin",
    unread: 0,
    icon: "desktop",
    color: "#f97316",
  },
];

const groups = [
  {
    name: "Tim ICU",
    message: "Meeting dimulai pukul 13.00 WIB",
    time: "10:10",
    unread: 5,
    icon: "medkit",
    color: "#22c55e",
  },
  {
    name: "Tim Bedah",
    message: "Jadwal operasi diperbarui",
    time: "09:50",
    unread: 2,
    icon: "medical",
    color: "#3b82f6",
  },
  {
    name: "Manajemen RS",
    message: "Rapat koordinasi besok pagi",
    time: "Kemarin",
    unread: 0,
    icon: "people",
    color: "#8b5cf6",
  },
];

export default function ChatInternalScreen() {
  const navigation = useNavigation<any>();

  const [activeTab, setActiveTab] = useState<"chat" | "group">("chat");

  const [search, setSearch] = useState("");

  const data = activeTab === "chat" ? chats : groups;

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const totalUnread = [...chats, ...groups].reduce(
    (sum, item) => sum + item.unread,
    0,
  );

  const [showMenu, setShowMenu] = useState(false);

  return (
    <View className="flex-1 bg-slate-100">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View className="bg-green-600 px-5 pt-16 pb-8 rounded-b-[35px]">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="w-12 h-12 rounded-2xl bg-white/20 items-center justify-center"
          >
            <Ionicons name="arrow-back" size={22} color="white" />
          </TouchableOpacity>

          <Text className="text-white text-3xl font-extrabold mt-6">
            Chat Internal
          </Text>

          <Text className="text-green-100 mt-2">
            Komunikasi internal rumah sakit
          </Text>

          {/* SEARCH */}
          <View className="bg-white rounded-2xl mt-5 px-4 py-3 flex-row items-center">
            <Ionicons name="search" size={20} color="#64748b" />
            <TextInput
              placeholder="Cari chat atau grup..."
              value={search}
              onChangeText={setSearch}
              className="flex-1 ml-3 text-gray-700"
              placeholderTextColor="#94a3b8"
            />
          </View>
        </View>

        {/* WATERMARK */}
        <Image
          source={require("../../assets/logo/rsds_white.png")}
          className="absolute top-10 right-[-50] w-64 h-64 opacity-10"
          resizeMode="contain"
        />

        {/* SUMMARY */}
        <View className="flex-row px-5 mt-5">
          <View className="flex-1 bg-white rounded-3xl p-4 mr-2">
            <Text className="text-gray-400 text-xs">Total Chat</Text>
            <Text className="text-2xl font-bold text-green-600 mt-1">
              {chats.length}
            </Text>
          </View>

          <View className="flex-1 bg-white rounded-3xl p-4 ml-2">
            <Text className="text-gray-400 text-xs">Pesan Baru</Text>
            <Text className="text-2xl font-bold text-green-600 mt-1">
              {totalUnread}
            </Text>
          </View>
        </View>

        {/* TAB */}
        <View className="mx-5 mt-5 bg-white rounded-2xl p-1 flex-row">
          <TouchableOpacity
            onPress={() => setActiveTab("chat")}
            className={`flex-1 py-3 rounded-xl ${
              activeTab === "chat" ? "bg-green-600" : ""
            }`}
          >
            <Text
              className={`text-center font-bold ${
                activeTab === "chat" ? "text-white" : "text-gray-500"
              }`}
            >
              Chat
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("group")}
            className={`flex-1 py-3 rounded-xl ${
              activeTab === "group" ? "bg-green-600" : ""
            }`}
          >
            <Text
              className={`text-center font-bold ${
                activeTab === "group" ? "text-white" : "text-gray-500"
              }`}
            >
              Grup
            </Text>
          </TouchableOpacity>
        </View>

        {/* LIST */}
        <View className="px-5 mt-5 pb-24">
          {filteredData.length === 0 ? (
            <View className="items-center py-10">
              <Ionicons name="chatbubble-outline" size={50} color="#94a3b8" />

              <Text className="text-slate-500 mt-3">
                Tidak ada data ditemukan
              </Text>
            </View>
          ) : (
            filteredData.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                className="bg-white rounded-3xl p-4 mb-4 flex-row items-center"
              >
                {/* AVATAR */}
                <View
                  style={{
                    backgroundColor: `${item.color}20`,
                  }}
                  className="w-14 h-14 rounded-2xl items-center justify-center"
                >
                  <Ionicons
                    name={item.icon as any}
                    size={26}
                    color={item.color}
                  />
                </View>

                {/* CONTENT */}
                <View className="flex-1 ml-4">
                  <Text className="font-bold text-slate-800 text-base">
                    {item.name}
                  </Text>

                  <Text numberOfLines={1} className="text-slate-500 mt-1">
                    {item.message}
                  </Text>
                </View>

                {/* RIGHT */}
                <View className="items-end">
                  <Text className="text-xs text-slate-400">{item.time}</Text>

                  {item.unread > 0 && (
                    <View className="bg-green-600 min-w-[22px] h-[22px] rounded-full items-center justify-center mt-2 px-1">
                      <Text className="text-white text-xs font-bold">
                        {item.unread}
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>

      {/* FLOATING BUTTON */}
      {showMenu && (
        <View className="absolute bottom-28 right-6">
          {/* Grup Baru */}
          <TouchableOpacity
            className="flex-row items-center bg-white px-4 py-3 rounded-full mb-3 shadow"
            onPress={() => {
              setShowMenu(false);
              navigation.navigate("NewGroup");
            }}
          >
            <Ionicons name="people" size={22} color="#16a34a" />
            <Text className="ml-2 text-gray-800 font-medium">Grup Baru</Text>
          </TouchableOpacity>

          {/* Chat Baru */}
          <TouchableOpacity
            className="flex-row items-center bg-white px-4 py-3 rounded-full shadow"
            onPress={() => {
              setShowMenu(false);
              navigation.navigate("NewChat");
            }}
          >
            <Ionicons name="chatbubble-ellipses" size={22} color="#16a34a" />
            <Text className="ml-2 text-gray-800 font-medium">Chat Baru</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        className="absolute bottom-5 right-6 w-16 h-16 rounded-full bg-green-600 items-center justify-center shadow"
        activeOpacity={0.8}
        onPress={() => setShowMenu(!showMenu)}
        style={{
          shadowColor: "#16a34a",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 8,
        }}
      >
        <Ionicons name={showMenu ? "close" : "add"} size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}
