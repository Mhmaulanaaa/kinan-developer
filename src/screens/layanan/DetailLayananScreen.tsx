import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function DetailLayananScreen() {
  return (
    <ScrollView className="flex-1 bg-white pt-16 px-5">
      <Text className="text-2xl font-bold text-gray-800">Detail Layanan</Text>

      {/* CARD */}
      <View className="bg-[#f7f7f7] rounded-3xl p-6 items-center mt-6">
        <View className="bg-green-100 p-4 rounded-2xl">
          <Ionicons name="document-text-outline" size={30} color="#16a34a" />
        </View>

        <Text className="font-bold text-gray-800 mt-4 text-center">
          Permintaan Akses SIM RS
        </Text>

        <Text className="text-gray-500 mt-1">IT Support</Text>
      </View>

      {/* FORM */}
      <View className="mt-6">
        <Text className="font-semibold text-gray-700 mb-2">
          Deskripsi Permintaan
        </Text>

        <TextInput
          multiline
          placeholder="Masukkan deskripsi..."
          className="border border-gray-200 rounded-2xl p-4 h-28"
        />

        <Text className="font-semibold text-gray-700 mt-5 mb-2">
          Jenis Akses
        </Text>

        <View className="border border-gray-200 rounded-2xl px-4 py-4 flex-row justify-between">
          <Text>Rekam Medis</Text>

          <Ionicons name="chevron-down" size={20} color="#6b7280" />
        </View>

        <Text className="font-semibold text-gray-700 mt-5 mb-2">
          Level Akses
        </Text>

        <View className="border border-gray-200 rounded-2xl px-4 py-4 flex-row justify-between">
          <Text>Viewer</Text>

          <Ionicons name="chevron-down" size={20} color="#6b7280" />
        </View>

        {/* FILE */}
        <Text className="font-semibold text-gray-700 mt-5 mb-2">Lampiran</Text>

        <View className="border border-gray-200 rounded-2xl px-4 py-4 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Ionicons name="document-outline" size={22} color="#16a34a" />

            <Text className="ml-3">Surat_Permohonan.pdf</Text>
          </View>

          <Ionicons name="close" size={20} color="#9ca3af" />
        </View>

        <TouchableOpacity className="bg-green-600 rounded-2xl py-4 items-center mt-8 mb-10">
          <Text className="text-white font-bold text-lg">Kirim Permintaan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
