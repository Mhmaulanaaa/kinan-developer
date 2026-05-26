import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { logoutToast as logoutToastConfig } from "../../utils/toastConfig";

const menus = [
  {
    title: "Ubah Status",
    icon: "sync",
    screen: "ChangeStatusProfile",
  },
  {
    title: "Pengaturan Akun",
    icon: "settings",
    screen: "AccountSettingsProfile",
  },
  {
    title: "Bantuan",
    icon: "help-circle",
    screen: "HelpProfile",
  },
  {
    title: "Tentang KINAN",
    icon: "information-circle",
    screen: "AboutProfile",
  },
];

export default function ProfileScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView
      className="flex-1 bg-[#f4f7fb]"
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View className="bg-green-600 pt-16 pb-32 px-6 rounded-b-[25px] overflow-hidden">
        {/* Decorative Circle */}
        <View className="absolute w-72 h-72 bg-white/10 rounded-full -top-10 -right-16" />

        {/* Background Logo */}
        <Image
          source={require("../../assets/logo/rsds_white.png")}
          className="absolute -right-16 top-10 w-72 h-72 opacity-10"
          resizeMode="contain"
        />

        {/* PROFILE */}
        <View className="items-center">
          <View className="relative">
            <Image
              source={{
                uri: "https://i.pravatar.cc/106",
              }}
              className="w-28 h-28 rounded-full border-[5px] border-white"
            />

            {/* ONLINE BADGE */}
            <View className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white" />
          </View>

          <Text className="text-white text-3xl font-extrabold mt-5">
            dr. Sarah Wijaya
          </Text>

          <Text className="text-green-100 text-base mt-1">
            Spesialis Jantung
          </Text>

          {/* STATUS */}
          <View className="bg-white/20 px-5 py-2 rounded-full mt-5">
            <Text className="text-white font-medium">Sedang Bertugas</Text>
          </View>
        </View>
      </View>

      {/* FLOATING CARD */}
      <View className="bg-white mx-5 rounded-[25px] p-6 -mt-20 shadow-lg">
        {/* INFO */}
        <View className="flex-row justify-between mb-7">
          <View className="items-center flex-1">
            <FontAwesome5 name="stethoscope" size={18} color="#16a34a" />

            <Text className="text-gray-400 mt-2 text-sm">Departemen</Text>

            <Text className="text-gray-800 font-bold mt-1">Jantung</Text>
          </View>

          <View className="items-center flex-1">
            <Ionicons name="call" size={20} color="#16a34a" />

            <Text className="text-gray-400 mt-2 text-sm">Telepon</Text>

            <Text className="text-gray-800 font-bold mt-1">0812-3456</Text>
          </View>

          <View className="items-center flex-1">
            <MaterialIcons name="email" size={20} color="#16a34a" />

            <Text className="text-gray-400 mt-2 text-sm">Email</Text>

            <Text className="text-gray-800 font-bold mt-1">Aktif</Text>
          </View>
        </View>

        {/* EMAIL CARD */}
        <View className="bg-green-50 rounded-3xl p-4 mb-6">
          <Text className="text-green-700 font-semibold">Email Akun</Text>

          <Text className="text-gray-700 mt-1">
            sarah.wijaya@rsud-soetomo.co.id
          </Text>
        </View>

        {/* MENUS */}
        {menus.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(item.screen)}
            className="flex-row items-center justify-between py-5 border-t border-gray-100"
          >
            <View className="flex-row items-center">
              <View className="w-11 h-11 rounded-2xl bg-green-100 items-center justify-center mr-4">
                <Ionicons name={item.icon as any} size={20} color="#16a34a" />
              </View>

              <Text className="text-gray-800 font-semibold text-[15px]">
                {item.title}
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
          </TouchableOpacity>
        ))}

        {/* LOGOUT */}
        <TouchableOpacity
          className="bg-red-500 py-4 rounded-2xl mt-8"
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("Login");
            logoutToastConfig();
          }}
        >
          <Text className="text-white text-center font-bold text-base">
            Keluar Akun
          </Text>
        </TouchableOpacity>
      </View>

      <View className="h-10" />
    </ScrollView>
  );
}
