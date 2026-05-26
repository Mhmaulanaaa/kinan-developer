import React, { useState } from "react";

import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const initialNotif = [
  {
    id: 1,
    title: "Pengumuman Baru",
    desc: "Update jadwal pelatihan BLS",
    time: "2 jam lalu",
    read: false,
    type: "announcement",
  },
  {
    id: 2,
    title: "Permintaan Layanan Disetujui",
    desc: "Permintaan akses SIM RS Anda telah disetujui.",
    time: "3 jam lalu",
    read: false,
    type: "service",
  },
  {
    id: 3,
    title: "Pesan Baru",
    desc: "dr. Andi Nugroho mengirim pesan",
    time: "Kemarin",
    read: true,
    type: "chat",
  },
];

export default function NotificationScreen({ navigation }: any) {
  const [notifications, setNotifications] = useState(initialNotif);

  // MARK AS READ
  const markAsRead = (id: number) => {
    const updated = notifications.map((item) =>
      item.id === id ? { ...item, read: true } : item,
    );

    setNotifications(updated);
  };

  // MARK ALL READ
  const markAllAsRead = () => {
    const updated = notifications.map((item) => ({
      ...item,
      read: true,
    }));

    setNotifications(updated);
  };

  // OPEN NOTIFICATION
  const openNotification = (item: any) => {
    markAsRead(item.id);

    // NAVIGATION
    if (item.type === "chat") {
      navigation.navigate("Chat");
    }

    if (item.type === "announcement") {
      navigation.navigate("Home");
    }

    if (item.type === "service") {
      navigation.navigate("Layanan");
    }
  };

  const unreadCount = notifications.filter((item) => !item.read).length;

  return (
    <SafeAreaView className="flex-1 bg-white pt-5 px-5">
      <StatusBar style="dark" />

      {/* HEADER */}
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-3xl font-extrabold text-gray-800">
            Notifikasi
          </Text>

          <Text className="text-gray-500 mt-1">{unreadCount} belum dibaca</Text>
        </View>

        <TouchableOpacity onPress={markAllAsRead}>
          <Text className="text-green-600 font-semibold">Tandai dibaca</Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <ScrollView className="mt-8" showsVerticalScrollIndicator={false}>
        {notifications.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => openNotification(item)}
            className={`flex-row items-start mb-5 p-4 rounded-3xl ${
              item.read ? "bg-white" : "bg-green-50"
            }`}
          >
            {/* AVATAR */}
            <Image
              source={{
                uri: `https://i.pravatar.cc/150?img=${index + 20}`,
              }}
              className="w-14 h-14 rounded-full"
            />

            {/* CONTENT */}
            <View className="flex-1 ml-4">
              <Text className="font-bold text-gray-800 text-[15px]">
                {item.title}
              </Text>

              <Text className="text-gray-500 mt-1 leading-5">{item.desc}</Text>

              <Text className="text-gray-400 text-xs mt-2">{item.time}</Text>
            </View>

            {/* UNREAD DOT */}
            {!item.read && (
              <View className="w-3 h-3 rounded-full bg-green-500 mt-2" />
            )}
          </TouchableOpacity>
        ))}

        {/* EMPTY */}
        {notifications.length === 0 && (
          <View className="items-center mt-20">
            <Text className="text-gray-400">Tidak ada notifikasi</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
