import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const news = [
  {
    title: "Pengumuman Baru",
    desc: "Update jadwal pelatihan BLS",
    icon: "bullhorn",
    color: "#2563eb",
    bg: "bg-blue-100",
  },
  {
    title: "Layanan Disetujui",
    desc: "Permintaan akses SIM RS disetujui",
    icon: "check-circle",
    color: "#16a34a",
    bg: "bg-green-100",
  },
  {
    title: "Pesan Baru",
    desc: "dr. Andi mengirim pesan",
    icon: "envelope",
    color: "#9333ea",
    bg: "bg-purple-100",
  },
];

export default function AllNewsScreen() {
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* HEADER */}
        <View className="bg-green-600 px-5 pt-16 pb-12 rounded-b-[40px] overflow-hidden">
          {/* BG LOGO */}
          <Image
            source={require("../../assets/logo/rsds_white.png")}
            className="absolute -right-16 top-5 w-72 h-72 opacity-10"
            resizeMode="contain"
          />

          {/* TOP BAR */}
          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}
              className="w-12 h-12 rounded-2xl bg-white/20 items-center justify-center"
            >
              <Ionicons name="arrow-back" size={22} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              className="w-12 h-12 rounded-2xl bg-white/20 items-center justify-center"
            >
              <Ionicons name="notifications-outline" size={22} color="white" />
            </TouchableOpacity>
          </View>

          {/* TITLE */}
          <Text className="text-white text-3xl font-extrabold mt-8">
            Semua Informasi
          </Text>

          <Text className="text-green-100 mt-2 text-base leading-6">
            Dapatkan update terbaru mengenai layanan, pengumuman, pelatihan, dan
            informasi rumah sakit.
          </Text>

          {/* SEARCH */}
          <View className="bg-white mt-6 rounded-2xl px-4 py-3 flex-row items-center">
            <Ionicons name="search" size={20} color="#9ca3af" />

            <Text className="text-gray-400 ml-3 flex-1">Cari informasi...</Text>

            <Ionicons name="options-outline" size={20} color="#16a34a" />
          </View>
        </View>

        {/* CONTENT */}
        <View className="px-5 mt-6">
          {/* SECTION TITLE */}
          <View className="flex-row items-center justify-between mb-5">
            <Text className="text-xl font-bold text-gray-800">
              Informasi Terbaru
            </Text>

            <View className="bg-green-100 px-3 py-1 rounded-full">
              <Text className="text-green-700 font-semibold text-xs">
                {news.length} Informasi
              </Text>
            </View>
          </View>

          {news.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.85}
              className="bg-white rounded-[28px] p-4 mb-5 shadow-sm border border-gray-100"
            >
              <View className="flex-row">
                {/* ICON */}
                <View
                  className={`${item.bg} w-16 h-16 rounded-3xl items-center justify-center`}
                >
                  <FontAwesome
                    name={item.icon as any}
                    size={26}
                    color={item.color}
                  />
                </View>

                {/* CONTENT */}
                <View className="ml-4 flex-1">
                  <View className="flex-row items-center justify-between">
                    <Text
                      numberOfLines={1}
                      className="text-lg font-extrabold text-gray-800 flex-1"
                    >
                      {item.title}
                    </Text>

                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color="#9ca3af"
                    />
                  </View>

                  <Text
                    numberOfLines={2}
                    className="text-gray-500 mt-2 leading-5"
                  >
                    {item.desc}
                  </Text>

                  {/* FOOTER */}
                  <View className="flex-row items-center justify-between mt-4">
                    <View className="flex-row items-center">
                      <Ionicons name="time-outline" size={15} color="#9ca3af" />

                      <Text className="text-gray-400 text-xs ml-1">
                        2 jam lalu
                      </Text>
                    </View>

                    <View className="bg-green-50 px-3 py-1 rounded-full">
                      <Text className="text-green-700 text-xs font-semibold">
                        Baru
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
