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

const dokumen = [
  {
    id: 1,
    title: "SOP Pelayanan Rawat Jalan",
    type: "PDF",
    size: "2.4 MB",
    date: "15 Juli 2026",
    description: "Standar Operasional Prosedur pelayanan rawat jalan.",
  },
  {
    id: 2,
    title: "Panduan ICU",
    type: "DOCX",
    size: "1.1 MB",
    date: "10 Juli 2026",
    description: "Panduan pelayanan dan penggunaan fasilitas ICU.",
  },
  {
    id: 3,
    title: "Pedoman Kepegawaian",
    type: "PDF",
    size: "3.7 MB",
    date: "05 Juli 2026",
    description: "Dokumen pedoman kepegawaian terbaru RSDS.",
  },
];

export default function DokumenScreen() {
  const navigation = useNavigation<any>();

  const [search, setSearch] = useState("");
  const [selectedDocument, setSelectedDocument] = useState<any>(null);

  const filteredData = useMemo(() => {
    return dokumen.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const getFileStyle = (type: string) => {
    switch (type) {
      case "PDF":
        return {
          bg: "bg-red-100",
          text: "text-red-600",
          iconColor: "#dc2626",
        };
      case "DOCX":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          iconColor: "#2563eb",
        };
      default:
        return {
          bg: "bg-green-100",
          text: "text-green-600",
          iconColor: "#16a34a",
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
            Dokumen
          </Text>

          <Text className="text-green-100 mt-2 text-base">
            Pusat dokumen dan panduan RSDS
          </Text>

          <View className="mt-5 bg-white/20 px-4 py-3 rounded-2xl self-start">
            <Text className="text-white font-semibold">
              {dokumen.length} Dokumen Tersedia
            </Text>
          </View>
        </View>

        {/* BANNER */}
        <View className="mx-5 -mt-5 bg-green-50 border border-green-200 rounded-3xl p-4">
          <View className="flex-row items-center">
            <Ionicons name="folder-open" size={24} color="#16a34a" />

            <Text className="ml-2 text-green-700 font-bold">Pusat Dokumen</Text>
          </View>

          <Text className="text-green-600 mt-2 leading-6">
            Unduh dokumen, panduan, dan SOP terbaru yang tersedia.
          </Text>
        </View>

        {/* SEARCH */}
        <View className="px-5 mt-5">
          <View className="bg-white rounded-2xl px-4 py-3 flex-row items-center border border-gray-100">
            <Ionicons name="search" size={20} color="#9ca3af" />

            <TextInput
              placeholder="Cari dokumen..."
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
                  {dokumen.length}
                </Text>

                <Text className="text-gray-600 mt-1">Total Dokumen</Text>
              </View>

              <View className="w-12 h-12 rounded-2xl bg-green-100 items-center justify-center">
                <Ionicons name="documents" size={22} color="#16a34a" />
              </View>
            </View>
          </View>

          <View className="flex-1 bg-green-50 rounded-3xl p-4 ml-2 border border-green-100">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-green-600 text-2xl font-bold">
                  {dokumen.filter((item) => item.type === "PDF").length}
                </Text>

                <Text className="text-gray-600 mt-1">File PDF</Text>
              </View>

              <View className="w-12 h-12 rounded-2xl bg-green-100 items-center justify-center">
                <Ionicons name="document-text" size={22} color="#16a34a" />
              </View>
            </View>
          </View>
        </View>

        {/* LIST DOKUMEN */}
        <View className="px-5 mt-6">
          {filteredData.map((item) => {
            const style = getFileStyle(item.type);

            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.85}
                onPress={() => setSelectedDocument(item)}
                className="bg-white rounded-3xl p-5 mb-4 border border-gray-100"
                style={{
                  elevation: 3,
                }}
              >
                <View className="flex-row">
                  <View
                    className={`w-14 h-14 rounded-2xl items-center justify-center mr-4 ${style.bg}`}
                  >
                    <Ionicons
                      name="document-text"
                      size={28}
                      color={style.iconColor}
                    />
                  </View>

                  <View className="flex-1">
                    <Text className="text-lg font-bold text-gray-800">
                      {item.title}
                    </Text>

                    <Text className="text-gray-500 mt-2 leading-6">
                      {item.description}
                    </Text>

                    <View className="flex-row items-center mt-3">
                      <View className={`px-3 py-1 rounded-full ${style.bg}`}>
                        <Text className={`text-xs font-bold ${style.text}`}>
                          {item.type}
                        </Text>
                      </View>

                      <Text className="text-gray-400 text-xs ml-3">
                        {item.size}
                      </Text>
                    </View>

                    <Text className="text-gray-400 text-xs mt-2">
                      Update: {item.date}
                    </Text>
                  </View>
                </View>

                <View className="flex-row justify-end mt-4">
                  <TouchableOpacity
                    className="bg-gray-100 px-4 py-2 rounded-xl mr-2"
                    onPress={() => setSelectedDocument(item)}
                  >
                    <Text className="font-semibold text-gray-700">Preview</Text>
                  </TouchableOpacity>

                  <TouchableOpacity className="bg-green-600 px-4 py-2 rounded-xl flex-row items-center">
                    <Ionicons name="download-outline" size={16} color="white" />

                    <Text className="font-semibold text-white ml-1">
                      Download
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* MODAL DETAIL */}
      <Modal visible={!!selectedDocument} animationType="slide" transparent>
        <View className="flex-1 bg-black/40 justify-end">
          <View className="bg-white rounded-t-[35px] p-6">
            <View className="items-center mb-4">
              <View className="w-14 h-1.5 rounded-full bg-gray-300" />
            </View>

            <View className="items-center mb-4">
              <View className="w-16 h-16 rounded-3xl bg-green-100 items-center justify-center">
                <Ionicons name="document-text" size={30} color="#16a34a" />
              </View>
            </View>

            <Text className="text-2xl font-bold text-center text-gray-800">
              {selectedDocument?.title}
            </Text>

            <Text className="text-center text-gray-400 mt-2">
              {selectedDocument?.type} • {selectedDocument?.size}
            </Text>

            <Text className="text-center text-gray-400 mt-1">
              Update {selectedDocument?.date}
            </Text>

            <Text className="text-gray-600 leading-7 mt-5">
              {selectedDocument?.description}
            </Text>

            <View className="flex-row mt-8">
              <TouchableOpacity className="flex-1 bg-gray-100 rounded-2xl py-4 mr-2">
                <Text className="text-center font-semibold text-gray-700">
                  Preview
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="flex-1 bg-green-600 rounded-2xl py-4 ml-2">
                <Text className="text-center font-semibold text-white">
                  Download
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              className="bg-gray-200 rounded-2xl py-4 mt-4"
              onPress={() => setSelectedDocument(null)}
            >
              <Text className="text-center font-bold text-gray-700">Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
