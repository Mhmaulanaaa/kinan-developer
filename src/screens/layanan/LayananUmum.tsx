import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const umum = [
  {
    title: "Kebersihan",
    desc: "Pelaporan dan monitoring kebersihan area",
    icon: "sparkles",
    color: "#10b981",
  },
  {
    title: "Keamanan",
    desc: "Informasi keamanan dan pengaduan",
    icon: "shield-checkmark",
    color: "#ef4444",
  },
  {
    title: "Transportasi",
    desc: "Layanan kendaraan operasional",
    icon: "bus",
    color: "#3b82f6",
  },
  {
    title: "Pemeliharaan Gedung",
    desc: "Perbaikan fasilitas dan sarana",
    icon: "construct",
    color: "#f59e0b",
  },
];

export default function LayananUmumScreen() {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-1 bg-white">
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
            Layanan Umum
          </Text>

          <Text className="text-blue-100 mt-2 text-base leading-6">
            Pilih layanan Umum yang tersedia
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
          {/* QUICK STATUS */}
          <View className="flex-row justify-between mb-6">
            <View className="bg-green-50 flex-1 mr-2 p-4 rounded-3xl">
              <Ionicons name="checkmark-circle" size={24} color="#16a34a" />

              <Text className="text-2xl font-bold text-gray-800 mt-2">24</Text>

              <Text className="text-gray-500 text-sm">Layanan Aktif</Text>
            </View>

            <View className="bg-orange-50 flex-1 ml-2 p-4 rounded-3xl">
              <Ionicons name="warning" size={24} color="#f97316" />

              <Text className="text-2xl font-bold text-gray-800 mt-2">3</Text>

              <Text className="text-gray-500 text-sm">Pengaduan</Text>
            </View>
          </View>

          {/* QUICK REPORT */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-green-600 rounded-3xl p-5 mb-5"
          >
            <View className="flex-row items-center">
              <Ionicons name="add-circle" size={32} color="white" />

              <View className="ml-3 flex-1">
                <Text className="text-white text-lg font-bold">
                  Buat Laporan Baru
                </Text>

                <Text className="text-green-100">
                  Laporkan fasilitas yang membutuhkan perhatian
                </Text>
              </View>

              <Ionicons name="chevron-forward" size={22} color="white" />
            </View>
          </TouchableOpacity>

          {/* INFO CARD */}
          <View className="bg-blue-50 rounded-3xl p-4 mb-5 flex-row">
            <Ionicons name="information-circle" size={24} color="#2563eb" />

            <View className="ml-3 flex-1">
              <Text className="font-bold text-gray-800">
                Informasi Fasilitas
              </Text>

              <Text className="text-gray-600 mt-1 text-sm">
                Seluruh layanan fasilitas umum dapat dipantau secara realtime.
              </Text>
            </View>
          </View>

          {/* MENU LIST */}
          {umum.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.85}
              className="bg-white border border-gray-100 rounded-3xl p-4 mb-4 flex-row items-center shadow-sm"
            >
              <View
                style={{
                  backgroundColor: `${item.color}20`,
                }}
                className="w-16 h-16 rounded-2xl items-center justify-center"
              >
                <Ionicons
                  name={item.icon as any}
                  size={28}
                  color={item.color}
                />
              </View>

              <View className="flex-1 ml-4">
                <Text className="font-bold text-gray-800 text-base">
                  {item.title}
                </Text>

                <Text className="text-gray-500 mt-1">{item.desc}</Text>
              </View>

              <View className="items-end">
                <View className="bg-green-100 px-3 py-1 rounded-full">
                  <Text className="text-green-700 text-xs font-semibold">
                    Aktif
                  </Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color="#9ca3af"
                  style={{ marginTop: 8 }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
