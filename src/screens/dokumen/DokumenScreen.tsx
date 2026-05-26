import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const dokumen = [
  {
    title: "SOP Pelayanan",
    file: "PDF",
  },
  {
    title: "Panduan ICU",
    file: "DOCX",
  },
];

export default function DokumenScreen() {
  return (
    <View className="flex-1 bg-white pt-16 px-5">
      <Text className="text-3xl font-extrabold text-gray-800 mb-6">
        Dokumen
      </Text>

      <ScrollView>
        {dokumen.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="bg-red-50 rounded-3xl p-5 mb-4 flex-row items-center justify-between"
          >
            <View>
              <Text className="text-base font-bold text-gray-800">
                {item.title}
              </Text>

              <Text className="text-gray-500 mt-1">{item.file}</Text>
            </View>

            <Ionicons name="document-text" size={28} color="#ef4444" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
