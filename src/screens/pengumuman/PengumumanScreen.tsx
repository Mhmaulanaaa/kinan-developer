import { View, Text, ScrollView } from "react-native";

const pengumuman = [
  {
    title: "Libur Nasional",
    desc: "Pelayanan rawat jalan tutup pada hari Senin.",
  },
  {
    title: "Vaksinasi Gratis",
    desc: "Program vaksinasi dibuka minggu depan.",
  },
];

export default function PengumumanScreen() {
  return (
    <View className="flex-1 bg-white pt-16 px-5">
      <Text className="text-3xl font-extrabold text-gray-800 mb-6">
        Pengumuman
      </Text>

      <ScrollView>
        {pengumuman.map((item, index) => (
          <View key={index} className="bg-yellow-50 rounded-3xl p-5 mb-4">
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
