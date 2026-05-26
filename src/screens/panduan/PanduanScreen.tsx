import { View, Text, ScrollView } from "react-native";

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
  return (
    <View className="flex-1 bg-white pt-16 px-5">
      <Text className="text-3xl font-extrabold text-gray-800 mb-6">
        Panduan
      </Text>

      <ScrollView>
        {panduan.map((item, index) => (
          <View key={index} className="bg-purple-50 rounded-3xl p-5 mb-4">
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
