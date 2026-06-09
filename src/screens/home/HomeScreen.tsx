import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const quickMenus = [
  {
    title: "Chat Internal",
    icon: "chatbubble-outline",
    bg: "bg-green-100",
    color: "#16a34a",
    screen: "ChatInternalHome",
  },
  {
    title: "Informasi",
    icon: "document-text-outline",
    bg: "bg-blue-100",
    color: "#2563eb",
    screen: "InformasiHome",
  },
  {
    title: "Pengumuman",
    icon: "megaphone-outline",
    bg: "bg-yellow-100",
    color: "#ca8a04",
    screen: "PengumumanHome",
  },
  {
    title: "Layanan",
    icon: "grid-outline",
    bg: "bg-purple-100",
    color: "#9333ea",
    screen: "Layanan",
  },
  {
    title: "Dokumen",
    icon: "folder-outline",
    bg: "bg-orange-100",
    color: "#ea580c",
    screen: "DokumenHome",
  },
  {
    title: "Panduan",
    icon: "book-outline",
    bg: "bg-cyan-100",
    color: "#0891b2",
    screen: "PanduanHome",
  },
];

const news = [
  {
    title: "Pengumuman",
    desc: "Update jadwal pelatihan BLS",
    bg: "bg-green-100",
    icon: "bullhorn",
    color: "#0891b2",
  },
  {
    title: "Protokol Baru",
    desc: "Panduan tatalaksana sepsis",
    bg: "bg-blue-100",
    icon: "file-text",
    color: "#2563eb",
  },
  {
    title: "SOP",
    desc: "Revisi SOP Identifikasi Pasien",
    bg: "bg-orange-100",
    icon: "clipboard",
    color: "#ea580c",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-1 bg-[#f3f5f7]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View className="bg-green-600 px-6 pt-16 pb-12 rounded-b-[20px]">
          {/* BACKGROUND IMAGE */}
          <Image
            source={require("../../assets/logo/rsds_white.png")}
            className="absolute -left-20 top-5 w-72 h-72 opacity-10"
            resizeMode="contain"
          />
          {/* Content Header */}
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-white text-4xl font-extrabold">KINAN</Text>

              <Text className="text-green-100 mt-1">
                Kanal Informasi dan Layanan
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Notifikasi")}
            >
              <View className="bg-white/20 p-3 rounded-full">
                <Ionicons
                  name="notifications-outline"
                  size={22}
                  color="white"
                />
              </View>
              <View className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 rounded-full items-center justify-center">
                <Text className="text-white text-[10px]">3</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* PROFILE */}
          <View className="flex-row items-center mt-7">
            <Image
              source={{
                uri: "https://i.pravatar.cc/106",
              }}
              className="w-16 h-16 rounded-full"
            />

            <View className="ml-4 flex-1 mt-2 mb-2">
              <Text className="text-green-100">Selamat pagi,</Text>

              <Text className="text-white text-xl font-bold mt-1">
                dr. Sarah Wijaya, Sp.JP
              </Text>
              <Text className="text-green-100 mt-1">
                Spesialis Penyakit Dalam
              </Text>

              <View className="flex-row items-center mt-2">
                <View className="w-2 h-2 rounded-full bg-green-300 mr-2" />

                <Text className="text-green-100">24/7 staf sedang online</Text>
              </View>
            </View>
          </View>
        </View>

        {/* CONTENT */}
        <View className="px-5 -mt-8">
          {/* QUICK MENU */}
          <View className="bg-white rounded-[30px] p-5 shadow-sm">
            <Text className="text-lg font-bold text-gray-800 mb-5">
              Akses Cepat
            </Text>

            <View className="flex-row flex-wrap justify-between">
              {quickMenus.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.9}
                  onPress={() => navigation.navigate(item.screen as any)}
                  className="w-[30%] bg-white rounded-3xl p-4 items-center mb-4 shadow-sm"
                  style={{
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.06,
                    shadowRadius: 6,
                    elevation: 3,
                  }}
                >
                  <View
                    className={`${item.bg} w-14 h-14 rounded-2xl items-center justify-center`}
                  >
                    <Ionicons
                      name={item.icon as any}
                      size={24}
                      color={item.color}
                    />
                  </View>

                  <Text className="text-gray-700 text-center text-[11px] mt-3 font-semibold leading-5">
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* NEWS */}
          <View className="mt-6">
            <View className="flex-row items-center justify-between mb-5">
              <Text className="text-xl font-bold text-gray-800">
                Informasi Terbaru
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate("AllNewsHome")}
              >
                <Text className="text-green-600 font-semibold">
                  Lihat semua
                </Text>
              </TouchableOpacity>
            </View>

            {news.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="bg-white rounded-2xl p-4 mb-4 flex-row items-center"
              >
                <View className={`${item.bg}   p-3 rounded-2xl`}>
                  <FontAwesome
                    name={item.icon as any}
                    size={24}
                    color={item.color}
                  />
                </View>

                <View className="ml-4 flex-1">
                  <Text className="font-bold text-gray-800">{item.title}</Text>

                  <Text className="text-gray-500 mt-1">{item.desc}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
