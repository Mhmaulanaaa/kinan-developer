import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const internalChats = [
  {
    title: "Rapat ICU",
    message: "Meeting dimulai pukul 13.00 WIB",
    time: "10:20",
  },
  {
    title: "Tim Bedah",
    message: "Jadwal operasi diperbarui",
    time: "09:50",
  },
  {
    title: "Admin Rawat Inap",
    message: "Data pasien telah sinkron",
    time: "Kemarin",
  },
];

export default function ChatInternalScreen() {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View className="bg-green-600 px-5 pt-16 pb-10 rounded-b-[35px]">
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
            Chat Internal
          </Text>

          <Text className="text-blue-100 mt-2 text-base leading-6">
            Pilih chat internal yang tersedia
          </Text>
        </View>
        {/* BG LOGO */}
        <Image
          source={require("../../assets/logo/rsds_white.png")}
          className="absolute -right-10 top-10 w-64 h-64 opacity-10"
          resizeMode="contain"
        />
        {/* CONTENT CARD */}

        <ScrollView showsVerticalScrollIndicator={false}>
          {internalChats.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-gray-50 rounded-3xl p-5 mb-4 flex-row items-center"
            >
              <View className="w-14 h-14 rounded-2xl bg-green-100 items-center justify-center">
                <Ionicons name="chatbubble" size={26} color="#16a34a" />
              </View>

              <View className="flex-1 ml-4">
                <Text className="text-base font-bold text-gray-800">
                  {item.title}
                </Text>

                <Text className="text-gray-500 mt-1">{item.message}</Text>
              </View>

              <Text className="text-xs text-gray-400">{item.time}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
