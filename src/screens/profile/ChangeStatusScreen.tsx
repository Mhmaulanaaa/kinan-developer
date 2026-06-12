// ChangeStatusScreen.tsx

import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import { useState } from "react";

const statuses = [
  {
    title: "Sedang Bertugas",
    color: "bg-green-100",
    text: "text-green-700",
    icon: "checkmark-circle",
    iconColor: "#16a34a",
  },
  {
    title: "Sedang Operasi",
    color: "bg-blue-100",
    text: "text-blue-700",
    icon: "medkit",
    iconColor: "#3b82f6",
  },
  {
    title: "Istirahat",
    color: "bg-yellow-100",
    text: "text-yellow-700",
    icon: "cafe",
    iconColor: "#f59e0b",
  },
  {
    title: "Offline",
    color: "bg-red-100",
    text: "text-red-700",
    icon: "close-circle",
    iconColor: "#ef4444",
  },
];

export default function ChangeStatusScreen() {
  const navigation = useNavigation<any>();

  const [selected, setSelected] = useState("Sedang Bertugas");

  return (
    <View className="flex-1 bg-[#f4f7fb]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View className="bg-green-600 pt-10 pb-12 px-6 rounded-b-[30px]">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            className="w-12 h-12 rounded-2xl bg-white/20 items-center justify-center"
          >
            <Ionicons name="arrow-back" size={22} color="white" />
          </TouchableOpacity>

          <Text className="text-white text-3xl font-extrabold mt-8">
            Ubah Status
          </Text>

          <Text className="text-green-100 mt-2">
            Perbarui status aktivitas Anda
          </Text>
        </View>

        {/* BG LOGO */}
        <Image
          source={require("../../assets/logo/rsds_white.png")}
          className="absolute -right-10 top-10 w-64 h-64 opacity-10"
          resizeMode="contain"
        />

        {/* CONTENT */}
        <View className="px-5 mt-6">
          {statuses.map((item, index) => {
            const isSelected = selected === item.title;

            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => setSelected(item.title)}
                className={`rounded-[28px] p-5 mb-4 border-2 ${
                  isSelected
                    ? "border-green-500 bg-green-50"
                    : "border-transparent bg-white"
                }`}
              >
                <View className="flex-row items-center">
                  <View
                    className={`w-14 h-14 rounded-2xl ${item.color} items-center justify-center`}
                  >
                    <Ionicons
                      name={item.icon as any}
                      size={26}
                      color={item.iconColor}
                    />
                  </View>

                  <View className="ml-4 flex-1">
                    <Text className="font-bold text-gray-800 text-[16px]">
                      {item.title}
                    </Text>

                    <Text className="text-gray-500 mt-1">
                      Status aktivitas akun saat ini
                    </Text>
                  </View>

                  {isSelected && (
                    <Ionicons
                      name="checkmark-circle"
                      size={28}
                      color="#16a34a"
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}

          {/* SAVE BUTTON */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-green-600 py-4 rounded-2xl mt-4 mb-10"
          >
            <Text className="text-white text-center font-bold text-base">
              Simpan Status
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
