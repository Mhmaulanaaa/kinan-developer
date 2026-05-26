import { View, Text, ScrollView } from "react-native";

const infos = [
  {
    title: "Update Jadwal Dokter",
    desc: "Jadwal poli bedah mengalami perubahan.",
  },
  {
    title: "Maintenance Sistem",
    desc: "Sistem akan maintenance pukul 23.00.",
  },
];

export default function InformasiScreen() {
  return (
    <View className="flex-1 bg-white pt-16 px-5">
      <Text className="text-3xl font-extrabold text-gray-800 mb-6">
        Informasi
      </Text>

      <ScrollView>
        {infos.map((item, index) => (
          <View key={index} className="bg-blue-50 rounded-3xl p-5 mb-4">
            <Text className="text-lg font-bold text-gray-800">
              {item.title}
            </Text>

            <Text className="text-gray-600 mt-2 leading-6">{item.desc}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
