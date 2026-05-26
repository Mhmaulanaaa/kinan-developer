import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
  return (
    <View className="flex-1 bg-white pt-16 px-5">
      <Text className="text-3xl font-extrabold text-gray-800 mb-6">
        Chat Internal
      </Text>

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
    </View>
  );
}
