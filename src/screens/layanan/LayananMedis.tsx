import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const medis = [
  {
    title: "Poli Umum",
    desc: "Konsultasi dan pemeriksaan umum",
    icon: "medkit",
    color: "#16a34a",
  },
  {
    title: "Poli Bedah",
    desc: "Pelayanan konsultasi bedah",
    icon: "cut",
    color: "#2563eb",
  },
  {
    title: "Rawat Inap",
    desc: "Perawatan pasien menginap",
    icon: "bed",
    color: "#ea580c",
  },
  {
    title: "IGD",
    desc: "Instalasi Gawat Darurat 24 Jam",
    icon: "alert-circle",
    color: "#dc2626",
  },
  {
    title: "Laboratorium",
    desc: "Pemeriksaan laboratorium medis",
    icon: "flask",
    color: "#9333ea",
  },
];

export default function LayananMedisScreen() {
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
            {medis.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                className="bg-white rounded-3xl p-4 mb-4 flex-row items-center"
                style={{
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.05,
                  shadowRadius: 5,
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    backgroundColor: `${item.color}15`,
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
                  <Text className="text-base font-bold text-gray-800">
                    {item.title}
                  </Text>

                  <Text className="text-gray-500 text-sm mt-1">
                    {item.desc}
                  </Text>

                  <View className="flex-row items-center mt-2">
                    <View className="w-2 h-2 rounded-full bg-green-500 mr-2" />

                    <Text className="text-green-600 text-xs font-semibold">
                      Tersedia
                    </Text>
                  </View>
                </View>

                <Ionicons name="chevron-forward" size={22} color="#9ca3af" />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
