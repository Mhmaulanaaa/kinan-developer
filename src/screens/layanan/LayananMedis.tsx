import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const medis = [
  {
    title: "Poli Umum",
    desc: "Konsultasi dan pemeriksaan umum",
    icon: "medkit",
    color: "#16a34a",
    available: true,
    queue: 5,
    time: "08.00 - 16.00",
  },
  {
    title: "Poli Bedah",
    desc: "Pelayanan konsultasi bedah",
    icon: "cut",
    color: "#2563eb",
    available: false,
    queue: 0,
    time: "08.00 - 14.00",
  },
  {
    title: "Rawat Inap",
    desc: "Perawatan pasien menginap",
    icon: "bed",
    color: "#ea580c",
    available: true,
    queue: 3,
    time: "24 Jam",
  },
  {
    title: "IGD",
    desc: "Instalasi Gawat Darurat 24 Jam",
    icon: "alert-circle",
    color: "#dc2626",
    available: true,
    queue: 2,
    time: "24 Jam",
  },
  {
    title: "Laboratorium",
    desc: "Pemeriksaan laboratorium medis",
    icon: "flask",
    color: "#9333ea",
    available: true,
    queue: 4,
    time: "08.00 - 17.00",
  },
];

export default function LayananMedisScreen() {
  const [search, setSearch] = useState("");
  const filteredMedis = medis.filter(
    (item) =>
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.desc?.toLowerCase().includes(search.toLowerCase()),
  );
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View className="bg-green-600 px-5 pt-16 pb-20 rounded-b-[35px]">
          {/* BACK BUTTON */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            className="w-12 h-12 rounded-2xl bg-white/20 items-center justify-center"
          >
            <Ionicons name="arrow-back" size={22} color="white" />
          </TouchableOpacity>

          {/* TITLE */}
          <Text className="text-white text-3xl font-extrabold mt-8">
            Layanan Medis
          </Text>

          <Text className="text-blue-100 mt-2 text-base leading-6">
            Pilih layanan medis yang tersedia
          </Text>
        </View>
        {/* BG LOGO */}
        <Image
          source={require("../../assets/logo/rsds_white.png")}
          className="absolute -right-10 top-10 w-64 h-64 opacity-10"
          resizeMode="contain"
        />

        {/* CONTENT CARD */}
        <View className="flex-1 bg-white -mt-12 rounded-t-[35px] px-5 pt-6">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 30 }}
          >
            <View className="bg-gray-100 rounded-2xl flex-row items-center px-4 py-3 mt-6 mb-5">
              <Ionicons name="search" size={20} color="#9ca3af" />

              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Cari layanan medis..."
                placeholderTextColor="#9ca3af"
                className="flex-1 ml-3 text-gray-700"
              />

              {search.length > 0 && (
                <TouchableOpacity onPress={() => setSearch("")}>
                  <Ionicons name="close-circle" size={22} color="#9ca3af" />
                </TouchableOpacity>
              )}
            </View>
            {filteredMedis.length === 0 ? (
              <View className="items-center mt-16">
                <Ionicons name="search-outline" size={70} color="#d1d5db" />

                <Text className="text-lg font-semibold text-gray-500 mt-4">
                  Layanan tidak ditemukan
                </Text>

                <Text className="text-gray-400 mt-1 text-center px-10">
                  Coba gunakan kata kunci lain.
                </Text>
              </View>
            ) : (
              filteredMedis.map((item, index) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  className="bg-white rounded-[28px] p-5 mb-4"
                  style={{
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.08,
                    shadowRadius: 16,
                    elevation: 3,
                  }}
                >
                  <View className="flex-row">
                    <View
                      className="w-16 h-16 rounded-3xl items-center justify-center"
                      style={{
                        backgroundColor: `${item.color}15`,
                      }}
                    >
                      <Ionicons
                        name={item.icon as any}
                        size={30}
                        color={item.color}
                      />
                    </View>

                    <View className="flex-1 ml-4">
                      <View className="flex-row justify-between">
                        <Text className="text-lg font-bold text-gray-800">
                          {item.title}
                        </Text>

                        <View
                          className={`px-3 py-1 rounded-full ${
                            item.available ? "bg-green-100" : "bg-red-100"
                          }`}
                        >
                          <Text
                            className={`text-xs font-semibold ${
                              item.available ? "text-green-700" : "text-red-700"
                            }`}
                          >
                            {item.available ? "Buka" : "Tutup"}
                          </Text>
                        </View>
                      </View>

                      <Text className="text-gray-500 mt-1">{item.desc}</Text>

                      <View className="flex-row mt-4">
                        <View className="flex-row items-center mr-5">
                          <Ionicons
                            name="people-outline"
                            size={16}
                            color="#6b7280"
                          />

                          <Text className="text-gray-500 ml-1 text-xs">
                            {item.queue} Antrean
                          </Text>
                        </View>

                        <View className="flex-row items-center">
                          <Ionicons
                            name="time-outline"
                            size={16}
                            color="#6b7280"
                          />

                          <Text className="text-gray-500 ml-1 text-xs">
                            {item.time}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <TouchableOpacity className="bg-green-600 rounded-2xl py-3 mt-5 items-center">
                    <Text className="text-white font-semibold">
                      Lihat Detail
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              ))
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
