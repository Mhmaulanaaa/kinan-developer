import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const panduan = [
  {
    id: 1,
    title: "Panduan Login",
    desc: "Cara masuk ke aplikasi menggunakan akun aktif.",
    detail:
      "1. Buka aplikasi.\n2. Masukkan email dan password.\n3. Klik tombol Login.\n4. Jika lupa password gunakan fitur Lupa Password.",
    level: "Pemula",
    duration: "2 Menit",
    icon: "log-in-outline",
  },
  {
    id: 2,
    title: "Panduan Penggunaan Chat",
    desc: "Cara memulai percakapan dengan petugas.",
    detail:
      "1. Buka menu Chat.\n2. Pilih petugas atau layanan.\n3. Ketik pesan.\n4. Tekan Kirim untuk memulai percakapan.",
    level: "Pemula",
    duration: "3 Menit",
    icon: "chatbubble-ellipses-outline",
  },
  {
    id: 3,
    title: "Panduan Upload Dokumen",
    desc: "Cara mengunggah dokumen pendukung.",
    detail:
      "1. Masuk ke menu Dokumen.\n2. Klik Upload.\n3. Pilih file dari perangkat.\n4. Klik Simpan untuk mengunggah.",
    level: "Lanjutan",
    duration: "5 Menit",
    icon: "cloud-upload-outline",
  },
];

export default function PanduanScreen() {
  const navigation = useNavigation<any>();

  const [search, setSearch] = useState("");
  const [selectedGuide, setSelectedGuide] = useState<any>(null);

  const filteredGuides = useMemo(() => {
    return panduan.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* HEADER */}
        <View className="bg-green-600 px-5 pt-16 pb-10 rounded-b-[35px] overflow-hidden">
          <Image
            source={require("../../assets/logo/rsds_white.png")}
            className="absolute -right-10 top-5 w-64 h-64 opacity-10"
            resizeMode="contain"
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            className="w-12 h-12 rounded-2xl bg-white/20 items-center justify-center"
          >
            <Ionicons name="arrow-back" size={22} color="white" />
          </TouchableOpacity>

          <Text className="text-white text-3xl font-extrabold mt-8">
            Panduan
          </Text>

          <Text className="text-green-100 mt-2 text-base">
            Pusat bantuan dan panduan pengguna
          </Text>

          <View className="mt-5 bg-white/20 px-4 py-3 rounded-2xl self-start">
            <Text className="text-white font-semibold">
              {panduan.length} Panduan Tersedia
            </Text>
          </View>
        </View>

        {/* BANNER */}
        <View className="mx-5 -mt-5 bg-purple-50 border border-purple-200 rounded-3xl p-4">
          <View className="flex-row items-center">
            <Ionicons name="help-circle" size={24} color="#16a34a" />

            <Text className="ml-2 text-green-700 font-bold">Pusat Bantuan</Text>
          </View>

          <Text className="text-green-600 mt-2 leading-6">
            Pelajari cara menggunakan fitur aplikasi melalui panduan yang
            tersedia.
          </Text>
        </View>

        {/* SEARCH */}
        <View className="px-5 mt-5">
          <View className="bg-white rounded-2xl px-4 py-3 flex-row items-center border border-gray-100">
            <Ionicons name="search" size={20} color="#9ca3af" />

            <TextInput
              placeholder="Cari panduan..."
              value={search}
              onChangeText={setSearch}
              className="flex-1 ml-3 text-gray-700"
            />
          </View>
        </View>

        {/* STATISTIK */}
        <View className="flex-row px-5 mt-5">
          <View className="flex-1 bg-green-50 rounded-3xl p-4 mr-2 border border-green-100">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-green-600 text-2xl font-bold">
                  {panduan.length}
                </Text>

                <Text className="text-gray-600 mt-1">Total Panduan</Text>
              </View>

              <View className="w-12 h-12 rounded-2xl bg-green-100 items-center justify-center">
                <Ionicons name="book" size={22} color="#16a34a" />
              </View>
            </View>
          </View>

          <View className="flex-1 bg-green-50 rounded-3xl p-4 ml-2 border border-green-100">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-green-600 text-2xl font-bold">
                  {panduan.filter((item) => item.level === "Pemula").length}
                </Text>

                <Text className="text-gray-600 mt-1">Pemula</Text>
              </View>

              <View className="w-12 h-12 rounded-2xl bg-green-100 items-center justify-center">
                <Ionicons name="school" size={22} color="#16a34a" />
              </View>
            </View>
          </View>
        </View>

        {/* LIST PANDUAN */}
        <View className="px-5 mt-6">
          {filteredGuides.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.85}
              onPress={() => setSelectedGuide(item)}
              className="bg-white rounded-3xl p-5 mb-4 border border-gray-100"
              style={{
                elevation: 3,
              }}
            >
              <View className="flex-row">
                <View className="w-14 h-14 rounded-2xl bg-green-100 items-center justify-center mr-4">
                  <Ionicons name={item.icon as any} size={28} color="#16a34a" />
                </View>

                <View className="flex-1">
                  <Text className="text-lg font-bold text-gray-800">
                    {item.title}
                  </Text>

                  <Text className="text-gray-500 mt-2 leading-6">
                    {item.desc}
                  </Text>

                  <View className="flex-row items-center mt-3">
                    <View className="bg-green-100 px-3 py-1 rounded-full">
                      <Text className="text-green-600 text-xs font-bold">
                        {item.level}
                      </Text>
                    </View>

                    <Text className="text-gray-400 text-xs ml-3">
                      {item.duration}
                    </Text>
                  </View>
                </View>
              </View>

              <View className="flex-row justify-end mt-4">
                <View className="bg-green-600 px-4 py-2 rounded-xl flex-row items-center">
                  <Text className="text-white text-xs font-semibold mr-1">
                    Baca Panduan
                  </Text>

                  <Ionicons name="arrow-forward" size={14} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* MODAL DETAIL */}
      <Modal visible={!!selectedGuide} animationType="slide" transparent>
        <View className="flex-1 bg-black/40 justify-end">
          <View className="bg-white rounded-t-[35px] p-6">
            <View className="items-center mb-4">
              <View className="w-14 h-1.5 rounded-full bg-gray-300" />
            </View>

            <View className="items-center mb-4">
              <View className="w-16 h-16 rounded-3xl bg-green-100 items-center justify-center">
                <Ionicons
                  name={selectedGuide?.icon as any}
                  size={30}
                  color="#16a34a"
                />
              </View>
            </View>

            <Text className="text-2xl font-bold text-center text-gray-800">
              {selectedGuide?.title}
            </Text>

            <Text className="text-center text-gray-400 mt-2">
              {selectedGuide?.level} • {selectedGuide?.duration}
            </Text>

            <Text className="text-gray-600 leading-7 mt-5">
              {selectedGuide?.detail}
            </Text>

            <TouchableOpacity
              className="bg-green-600 rounded-2xl py-4 mt-8"
              onPress={() => setSelectedGuide(null)}
            >
              <Text className="text-center text-white font-bold">Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
