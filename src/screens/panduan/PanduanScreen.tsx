import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const panduan = [
  {
    title: "Panduan Login",
    desc: "Gunakan email dan password aktif untuk masuk.",
  },
  {
    title: "Panduan Penggunaan Chat",
    desc: "Klik menu chat untuk memulai percakapan.",
  },
];

export default function PanduanScreen() {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* HEADER */}
        <View className="bg-green-600 px-5 pt-16 pb-10 rounded-b-[35px] overflow-hidden">
          {/* BG LOGO */}
          <Image
            source={require("../../assets/logo/rsds_white.png")}
            className="absolute -right-10 top-10 w-64 h-64 opacity-10"
            resizeMode="contain"
          />

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
            Panduan
          </Text>

          <Text className="text-green-100 mt-2 text-base leading-6">
            Pilih panduan yang tersedia
          </Text>
        </View>

        {/* CONTENT */}
        <View className="px-5 mt-6">
          {panduan.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.85}
              className="bg-white rounded-3xl p-5 mb-4 border border-gray-100 shadow-sm"
              style={{
                elevation: 3,
              }}
            >
              {/* TOP */}
              <View className="flex-row items-start">
                {/* ICON */}
                <View className="w-14 h-14 rounded-2xl bg-green-100 items-center justify-center mr-4">
                  <Ionicons name="book-outline" size={28} color="#16a34a" />
                </View>

                {/* CONTENT */}
                <View className="flex-1">
                  <Text className="text-lg font-bold text-gray-800 leading-6">
                    {item.title}
                  </Text>

                  <Text className="text-gray-500 mt-2 text-sm leading-6">
                    {item.desc}
                  </Text>
                </View>
              </View>

              {/* FOOTER */}
              <View className="mt-4 flex-row items-center justify-between">
                <View className="bg-green-600 px-3 py-1 rounded-full">
                  <Text className="text-white text-xs font-semibold">
                    Panduan Pengguna
                  </Text>
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  className="bg-green-600 px-4 py-2 rounded-xl flex-row items-center"
                >
                  <Text className="text-white text-xs font-bold mr-1">
                    Baca
                  </Text>

                  <Ionicons name="arrow-forward" size={14} color="white" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
