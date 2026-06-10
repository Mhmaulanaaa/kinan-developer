import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const itServices = [
  {
    title: "Permintaan Perangkat",
    desc: "Ajukan permintaan perangkat IT baru",
    icon: "laptop",
    color: "#22c55e",
  },
  {
    title: "Bantuan Teknis",
    desc: "Dapatkan bantuan untuk masalah IT",
    icon: "help-circle",
    color: "#3b82f6",
  },
  {
    title: "Akses Software",
    desc: "Ajukan akses ke software tertentu",
    icon: "key",
    color: "#f97316",
  },
  {
    title: "Laporan Masalah",
    desc: "Laporkan masalah IT yang Anda alami",
    icon: "bug",
    color: "#8b5cf6",
  },
];

export default function LayananITScreen() {
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
            Layanan IT
          </Text>

          <Text className="text-blue-100 mt-2 text-base leading-6">
            Pilih layanan IT yang tersedia
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
          <ScrollView>
            {itServices.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="bg-green-50 rounded-3xl p-5 mb-4 flex-row items-center"
              >
                <View className="w-14 h-14 rounded-2xl bg-green-100 items-center justify-center">
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

                <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
