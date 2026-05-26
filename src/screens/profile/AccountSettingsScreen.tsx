// AccountSettingsScreen.tsx

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  TextInput,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import { useState } from "react";

export default function AccountSettingsScreen() {
  const navigation = useNavigation<any>();

  const [notification, setNotification] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

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
            Pengaturan Akun
          </Text>

          <Text className="text-green-100 mt-2">
            Kelola akun dan preferensi aplikasi
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
          {/* PROFILE */}
          <View className="bg-white rounded-[28px] p-6 shadow-sm">
            <Text className="text-gray-800 text-xl font-bold mb-5">
              Informasi Akun
            </Text>

            <View className="mb-4">
              <Text className="text-gray-500 mb-2">Nama Lengkap</Text>

              <TextInput
                defaultValue="dr. Sarah Wijaya"
                className="bg-gray-100 rounded-2xl px-4 py-4 text-gray-800"
              />
            </View>

            <View className="mb-4">
              <Text className="text-gray-500 mb-2">Email</Text>

              <TextInput
                defaultValue="sarah.wijaya@rsud-soetomo.co.id"
                className="bg-gray-100 rounded-2xl px-4 py-4 text-gray-800"
              />
            </View>

            <View>
              <Text className="text-gray-500 mb-2">Nomor Telepon</Text>

              <TextInput
                defaultValue="0812-3456-7890"
                className="bg-gray-100 rounded-2xl px-4 py-4 text-gray-800"
              />
            </View>
          </View>

          {/* SETTINGS */}
          <View className="bg-white rounded-[28px] p-6 shadow-sm mt-5">
            <Text className="text-gray-800 text-xl font-bold mb-5">
              Preferensi
            </Text>

            {/* NOTIF */}
            <View className="flex-row items-center justify-between py-4 border-b border-gray-100">
              <View>
                <Text className="font-bold text-gray-800">Notifikasi</Text>

                <Text className="text-gray-500 mt-1">
                  Aktifkan pemberitahuan aplikasi
                </Text>
              </View>

              <Switch value={notification} onValueChange={setNotification} />
            </View>

            {/* DARK MODE */}
            <View className="flex-row items-center justify-between py-4">
              <View>
                <Text className="font-bold text-gray-800">Dark Mode</Text>

                <Text className="text-gray-500 mt-1">
                  Tampilan mode gelap aplikasi
                </Text>
              </View>

              <Switch value={darkMode} onValueChange={setDarkMode} />
            </View>
          </View>

          {/* BUTTON */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-green-600 py-4 rounded-2xl mt-6 mb-10"
          >
            <Text className="text-white text-center font-bold text-base">
              Simpan Perubahan
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
