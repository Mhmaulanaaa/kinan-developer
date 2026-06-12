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

const infos = [
  {
    id: 1,
    title: "Update Jadwal Dokter Bedah",
    desc: "Jadwal poli bedah mengalami perubahan minggu ini.",
    detail:
      "Jadwal dokter bedah pada hari Senin dan Rabu mengalami perubahan jam pelayanan menjadi pukul 09.00 - 13.00 WIB.",
    category: "doctor",
    status: "BARU",
    date: "17 Juli 2026",
  },
  {
    id: 2,
    title: "Maintenance Sistem",
    desc: "Sistem akan maintenance pukul 23.00 WIB.",
    detail:
      "Maintenance dilakukan untuk peningkatan performa sistem. Selama proses berlangsung beberapa layanan tidak dapat diakses.",
    category: "maintenance",
    status: "UPDATE",
    date: "16 Juli 2026",
  },
  {
    id: 3,
    title: "Layanan Rawat Jalan",
    desc: "Pendaftaran online kini lebih mudah.",
    detail:
      "Pasien dapat melakukan pendaftaran rawat jalan melalui aplikasi mobile tanpa harus datang ke rumah sakit.",
    category: "service",
    status: "BARU",
    date: "15 Juli 2026",
  },
];

export default function InformasiScreen() {
  const navigation = useNavigation<any>();

  const [search, setSearch] = useState("");
  const [selectedInfo, setSelectedInfo] = useState<any>(null);

  const filteredInfos = useMemo(() => {
    return infos.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const getIcon = (category: string) => {
    switch (category) {
      case "doctor":
        return "medical";
      case "maintenance":
        return "construct";
      case "service":
        return "briefcase";
      default:
        return "information-circle";
    }
  };

  const getBadgeColor = (status: string) => {
    return status === "BARU"
      ? "bg-red-100 text-red-600"
      : "bg-blue-100 text-blue-600";
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
            Informasi
          </Text>

          <Text className="text-green-100 mt-2 text-base">
            Informasi terbaru Rumah Sakit
          </Text>

          <View className="mt-5 bg-white/20 px-4 py-3 rounded-2xl self-start">
            <Text className="text-white font-semibold">
              {infos.length} Informasi Aktif
            </Text>
          </View>
        </View>

        {/* BANNER */}
        <View className="mx-5 -mt-5 bg-emerald-50 border border-emerald-200 rounded-3xl p-4">
          <View className="flex-row items-center">
            <Ionicons name="megaphone" size={24} color="#16a34a" />
            <Text className="ml-2 text-emerald-700 font-bold">
              Pengumuman Penting
            </Text>
          </View>

          <Text className="text-emerald-600 mt-2 leading-6">
            Pendaftaran online ditutup sementara setiap pukul 23.00 - 01.00 WIB
            untuk pemeliharaan sistem.
          </Text>
        </View>

        {/* SEARCH */}
        <View className="px-5 mt-5">
          <View className="bg-white rounded-2xl px-4 py-3 flex-row items-center border border-gray-100">
            <Ionicons name="search" size={20} color="#9ca3af" />

            <TextInput
              placeholder="Cari informasi..."
              value={search}
              onChangeText={setSearch}
              className="flex-1 ml-3 text-gray-700"
            />
          </View>
        </View>

        {/* STATISTIK */}
        <View className="flex-row px-5 mt-5">
          <View className="flex-1 bg-green-50 rounded-3xl p-4 mr-2">
            <Text className="text-green-700 text-2xl font-bold">
              {infos.length}
            </Text>
            <Text className="text-gray-600 mt-1">Total Informasi</Text>
          </View>

          <View className="flex-1 bg-green-50 rounded-3xl p-4 ml-2">
            <Text className="text-green-700 text-2xl font-bold">
              {infos.filter((i) => i.status === "BARU").length}
            </Text>
            <Text className="text-gray-600 mt-1">Informasi Baru</Text>
          </View>
        </View>

        {/* LIST */}
        <View className="px-5 mt-6">
          {filteredInfos.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.85}
              onPress={() => setSelectedInfo(item)}
              className="bg-white rounded-3xl p-5 mb-4 border border-gray-100"
              style={{
                elevation: 3,
              }}
            >
              <View className="flex-row justify-between items-start">
                <View className="flex-row flex-1">
                  <View className="w-14 h-14 rounded-2xl bg-green-100 items-center justify-center mr-4">
                    <Ionicons
                      name={getIcon(item.category)}
                      size={28}
                      color="#16a34a"
                    />
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

                <View
                  className={`px-3 py-1 rounded-full ${
                    item.status === "BARU" ? "bg-red-100" : "bg-blue-100"
                  }`}
                >
                  <Text
                    className={`text-xs font-bold ${
                      item.status === "BARU" ? "text-red-600" : "text-blue-600"
                    }`}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>

              <View className="mt-4 flex-row justify-end">
                <View className="bg-green-600 px-4 py-2 rounded-xl flex-row items-center">
                  <Text className="text-white text-xs font-semibold mr-1">
                    Detail
                  </Text>

                  <Ionicons name="arrow-forward" size={14} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* MODAL DETAIL */}
      <Modal visible={!!selectedInfo} animationType="slide" transparent>
        <View className="flex-1 bg-black/40 justify-end">
          <View className="bg-white rounded-t-[35px] p-6">
            <View className="items-center mb-4">
              <View className="w-14 h-1.5 rounded-full bg-gray-300" />
            </View>

            <Text className="text-2xl font-bold text-gray-800">
              {selectedInfo?.title}
            </Text>

            <Text className="text-gray-400 mt-2">{selectedInfo?.date}</Text>

            <Text className="text-gray-600 leading-7 mt-5">
              {selectedInfo?.detail}
            </Text>

            <TouchableOpacity
              className="bg-green-600 rounded-2xl py-4 mt-8"
              onPress={() => setSelectedInfo(null)}
            >
              <Text className="text-center text-white font-bold">Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
