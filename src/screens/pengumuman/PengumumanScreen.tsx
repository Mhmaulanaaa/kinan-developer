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

const pengumuman = [
  {
    id: 1,
    title: "Libur Nasional",
    desc: "Pelayanan rawat jalan tutup pada hari Senin.",
    detail:
      "Pelayanan rawat jalan akan tutup sementara pada hari Senin karena peringatan Hari Nasional. Layanan IGD tetap beroperasi 24 jam.",
    date: "18 Juli 2026",
    status: "PENTING",
  },
  {
    id: 2,
    title: "Vaksinasi Gratis",
    desc: "Program vaksinasi dibuka minggu depan.",
    detail:
      "Program vaksinasi gratis tersedia untuk masyarakat umum mulai minggu depan. Silakan melakukan pendaftaran melalui aplikasi.",
    date: "20 Juli 2026",
    status: "BARU",
  },
  {
    id: 3,
    title: "Perubahan Jam Kunjungan",
    desc: "Jam kunjungan pasien mengalami penyesuaian.",
    detail:
      "Jam kunjungan pasien berubah menjadi pukul 16.00 - 19.00 WIB untuk meningkatkan kenyamanan pasien.",
    date: "22 Juli 2026",
    status: "INFO",
  },
];

export default function PengumumanScreen() {
  const navigation = useNavigation<any>();

  const [search, setSearch] = useState("");
  const [selectedPengumuman, setSelectedPengumuman] = useState<any>(null);

  const filteredData = useMemo(() => {
    return pengumuman.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const getBadgeStyle = (status: string) => {
    switch (status) {
      case "PENTING":
        return {
          bg: "bg-red-100",
          text: "text-red-600",
        };
      case "BARU":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
        };
      default:
        return {
          bg: "bg-green-100",
          text: "text-green-600",
        };
    }
  };

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
            Pengumuman
          </Text>

          <Text className="text-green-100 mt-2 text-base">
            Pengumuman terbaru Rumah Sakit
          </Text>

          <View className="mt-5 bg-white/20 px-4 py-3 rounded-2xl self-start">
            <Text className="text-white font-semibold">
              {pengumuman.length} Pengumuman Aktif
            </Text>
          </View>
        </View>

        {/* BANNER */}
        <View className="mx-5 -mt-5 bg-emerald-50 border border-emerald-200 rounded-3xl p-4">
          <View className="flex-row items-center">
            <Ionicons name="megaphone" size={24} color="#16a34a" />

            <Text className="ml-2 text-emerald-700 font-bold">
              Pengumuman Hari Ini
            </Text>
          </View>

          <Text className="text-emerald-600 mt-2 leading-6">
            Terdapat beberapa pengumuman penting yang perlu diperhatikan oleh
            pasien dan pengunjung.
          </Text>
        </View>

        {/* SEARCH */}
        <View className="px-5 mt-5">
          <View className="bg-white rounded-2xl px-4 py-3 flex-row items-center border border-gray-100">
            <Ionicons name="search" size={20} color="#9ca3af" />

            <TextInput
              placeholder="Cari pengumuman..."
              value={search}
              onChangeText={setSearch}
              className="flex-1 ml-3 text-gray-700"
            />
          </View>
        </View>

        <View className="px-5 mt-5">
          <View className="flex-row justify-between">
            <View className="bg-emerald-50 rounded-3xl p-4 flex-1 mr-2 items-center">
              <Ionicons name="megaphone" size={24} color="#059669" />
              <Text className="text-2xl font-bold text-emerald-600 mt-2">
                {pengumuman.length}
              </Text>
              <Text className="text-gray-500 text-xs mt-1">Total</Text>
            </View>

            <View className="bg-emerald-50 rounded-3xl p-4 flex-1 mx-1 items-center">
              <Ionicons name="alert-circle" size={24} color="#059669" />
              <Text className="text-2xl font-bold text-emerald-600 mt-2">
                {pengumuman.filter((item) => item.status === "PENTING").length}
              </Text>
              <Text className="text-gray-500 text-xs mt-1">Penting</Text>
            </View>

            <View className="bg-emerald-50 rounded-3xl p-4 flex-1 ml-2 items-center">
              <Ionicons name="eye" size={24} color="#059669" />
              <Text className="text-2xl font-bold text-emerald-600 mt-2">
                128
              </Text>
              <Text className="text-gray-500 text-xs mt-1">Dibaca</Text>
            </View>
          </View>
        </View>

        {/* LIST */}
        <View className="px-5 mt-6">
          {filteredData.map((item) => {
            const badge = getBadgeStyle(item.status);

            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.85}
                onPress={() => setSelectedPengumuman(item)}
                className="bg-white rounded-3xl p-5 mb-4 border border-gray-100"
                style={{
                  elevation: 3,
                }}
              >
                <View className="flex-row justify-between items-start">
                  <View className="flex-row flex-1">
                    <View className="w-14 h-14 rounded-2xl bg-emerald-100 items-center justify-center mr-4">
                      <Ionicons name="megaphone" size={28} color="#16a34a" />
                    </View>

                    <View className="flex-1">
                      <Text className="text-lg font-bold text-gray-800">
                        {item.title}
                      </Text>

                      <Text className="text-xs text-gray-400 mt-1">
                        {item.date}
                      </Text>

                      <Text className="text-gray-500 mt-2 leading-6">
                        {item.desc}
                      </Text>
                    </View>
                  </View>

                  <View className={`px-3 py-1 rounded-full ${badge.bg}`}>
                    <Text className={`text-xs font-bold ${badge.text}`}>
                      {item.status}
                    </Text>
                  </View>
                </View>

                <View className="mt-4 flex-row justify-end">
                  <View className="bg-emerald-500 px-4 py-2 rounded-xl flex-row items-center">
                    <Text className="text-white text-xs font-semibold mr-1">
                      Detail
                    </Text>

                    <Ionicons name="arrow-forward" size={14} color="white" />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* MODAL DETAIL */}
      <Modal visible={!!selectedPengumuman} animationType="slide" transparent>
        <View className="flex-1 bg-black/40 justify-end">
          <View className="bg-white rounded-t-[35px] p-6">
            <View className="items-center mb-4">
              <View className="w-14 h-1.5 rounded-full bg-gray-300" />
            </View>

            <View className="items-center mb-4">
              <View className="w-16 h-16 rounded-3xl bg-emerald-100 items-center justify-center">
                <Ionicons name="megaphone" size={30} color="#16a34a" />
              </View>
            </View>

            <Text className="text-2xl font-bold text-gray-800 text-center">
              {selectedPengumuman?.title}
            </Text>

            <Text className="text-gray-400 text-center mt-2">
              {selectedPengumuman?.date}
            </Text>

            <Text className="text-gray-600 leading-7 mt-5">
              {selectedPengumuman?.detail}
            </Text>

            <TouchableOpacity
              className="bg-emerald-500 rounded-2xl py-4 mt-8"
              onPress={() => setSelectedPengumuman(null)}
            >
              <Text className="text-center text-white font-bold">Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
