import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const layanan = [
  {
    title: "Layanan Medis",
    icon: "medkit-outline",
    color: "bg-green-100",
    iconColor: "#16a34a",
    screen: "LayananMedis",
  },
  {
    title: "Layanan SDM",
    icon: "people-outline",
    color: "bg-orange-100",
    iconColor: "#ea580c",
    screen: "LayananSDM",
  },
  {
    title: "Layanan IT",
    icon: "desktop-outline",
    color: "bg-purple-100",
    iconColor: "#9333ea",
    screen: "LayananIT",
  },
  {
    title: "Layanan Umum",
    icon: "business-outline",
    color: "bg-blue-100",
    iconColor: "#2563eb",
    screen: "LayananUmum",
  },
  {
    title: "Layanan Keuangan",
    icon: "wallet-outline",
    color: "bg-yellow-100",
    iconColor: "#ca8a04",
    screen: "LayananKeuangan",
  },
  {
    title: "Layanan Diklat",
    icon: "school-outline",
    color: "bg-cyan-100",
    iconColor: "#0891b2",
    screen: "LayananDiklat",
  },
];

export default function LayananScreen() {
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState("");

  const filteredLayanan = layanan.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView className="flex-1 bg-white pt-8 px-5">
      <StatusBar style="dark" />
      <Text className="text-3xl font-extrabold text-gray-800">Layanan</Text>

      {/* SEARCH */}
      <View className="bg-[#f5f5f5] rounded-2xl px-4 py-1 mt-5 flex-row items-center">
        <Ionicons name="search" size={20} color="#9ca3af" />

        <TextInput
          placeholder="Cari layanan..."
          className="flex-1 ml-3 py-3"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <Text className="text-lg font-bold text-gray-800 mt-8 mb-5">
        Kategori Layanan
      </Text>

      <View className="flex-row flex-wrap justify-between">
        {filteredLayanan.length > 0 ? (
          filteredLayanan.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => navigation.navigate(item.screen)}
              className="w-[31%] bg-white border border-gray-100 rounded-3xl p-4 mb-4 items-center shadow-sm"
            >
              <View
                className={`${item.color} w-16 h-16 rounded-2xl items-center justify-center`}
              >
                <Ionicons
                  name={item.icon as any}
                  size={28}
                  color={item.iconColor}
                />
              </View>

              <Text className="font-semibold text-gray-800 mt-4 text-xs text-center leading-4">
                {item.title}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <View className="w-full items-center py-10">
            <Ionicons name="search-outline" size={40} color="#9ca3af" />

            <Text className="text-gray-500 mt-3">Layanan tidak ditemukan</Text>
          </View>
        )}
      </View>

      {/* HISTORY */}
      <View className="mt-5 mb-10">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-bold">Riwayat Layanan</Text>

          <Text className="text-green-600 font-semibold">Lihat semua</Text>
        </View>

        <View className="bg-white border border-gray-100 rounded-2xl p-4 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="bg-green-100 p-3 rounded-xl">
              <Ionicons
                name="document-text-outline"
                size={20}
                color="#16a34a"
              />
            </View>

            <View className="ml-3">
              <Text className="font-bold text-gray-800">
                Permintaan Akses SIM RS
              </Text>

              <Text className="text-gray-500 text-xs mt-1">IT Support</Text>
            </View>
          </View>

          <View className="bg-green-100 px-3 py-1 rounded-full">
            <Text className="text-green-700 text-xs font-semibold">
              Selesai
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
