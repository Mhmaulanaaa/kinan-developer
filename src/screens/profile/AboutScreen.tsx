import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function AboutScreen() {
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1 bg-[#f4f7fb]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View className="bg-green-600 pt-10 pb-12 px-6 rounded-b-[30px] overflow-hidden">
          {/* BACK BUTTON */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            className="w-12 h-12 rounded-2xl bg-white/20 items-center justify-center"
          >
            <Ionicons name="arrow-back" size={22} color="white" />
          </TouchableOpacity>

          {/* BG LOGO */}
          <Image
            source={require("../../assets/logo/rsds_white.png")}
            className="absolute -right-10 top-10 w-64 h-64 opacity-10"
            resizeMode="contain"
          />

          {/* TITLE */}
          <View className="items-center mt-8">
            <View className="w-28 h-28 rounded-3xl bg-white/20 items-center justify-center">
              <Image
                source={require("../../assets/logo/KINAN.png")}
                className="w-32 h-32"
                resizeMode="contain"
              />
            </View>

            <Text className="text-white text-3xl font-extrabold mt-5">
              KINAN APP
            </Text>

            <Text className="text-green-100 text-center mt-2 px-8 leading-6">
              Kanal Informasi dan Layanan Internal RSUD Dr. Soetomo
            </Text>
          </View>
        </View>

        {/* CONTENT */}
        <View className="px-5 mt-6">
          {/* CARD INFO */}
          <View className="bg-white rounded-[28px] p-6 shadow-sm">
            <Text className="text-gray-800 text-xl font-bold mb-5">
              Tentang Aplikasi
            </Text>

            <Text className="text-gray-500 leading-7 text-[15px]">
              KINAN merupakan aplikasi internal rumah sakit yang digunakan untuk
              mendukung komunikasi, informasi, layanan digital, dan aktivitas
              staf medis maupun non medis secara terintegrasi.
            </Text>

            <Text className="text-gray-500 leading-7 text-[15px] mt-4">
              Aplikasi ini dirancang dengan tampilan modern, cepat, dan mudah
              digunakan untuk meningkatkan efisiensi pelayanan rumah sakit.
            </Text>
          </View>

          {/* FITUR */}
          <View className="bg-white rounded-[28px] p-6 shadow-sm mt-5">
            <Text className="text-gray-800 text-xl font-bold mb-5">
              Fitur Utama
            </Text>

            {/* ITEM */}
            <View className="flex-row items-center mb-5">
              <View className="w-12 h-12 rounded-2xl bg-green-100 items-center justify-center mr-4">
                <Ionicons name="chatbubble-outline" size={22} color="#16a34a" />
              </View>

              <View className="flex-1">
                <Text className="font-bold text-gray-800">Chat Internal</Text>

                <Text className="text-gray-500 mt-1">
                  Komunikasi antar staf rumah sakit
                </Text>
              </View>
            </View>

            <View className="flex-row items-center mb-5">
              <View className="w-12 h-12 rounded-2xl bg-blue-100 items-center justify-center mr-4">
                <MaterialIcons
                  name="medical-services"
                  size={22}
                  color="#2563eb"
                />
              </View>

              <View className="flex-1">
                <Text className="font-bold text-gray-800">Layanan Digital</Text>

                <Text className="text-gray-500 mt-1">
                  Akses layanan rumah sakit lebih cepat
                </Text>
              </View>
            </View>

            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-2xl bg-orange-100 items-center justify-center mr-4">
                <FontAwesome5 name="bullhorn" size={18} color="#ea580c" />
              </View>

              <View className="flex-1">
                <Text className="font-bold text-gray-800">
                  Informasi & Pengumuman
                </Text>

                <Text className="text-gray-500 mt-1">
                  Update informasi terbaru rumah sakit
                </Text>
              </View>
            </View>
          </View>

          {/* VERSION */}
          <View className="items-center mt-8 mb-10">
            <Text className="text-gray-400">Version 1.0.0</Text>

            <Text className="text-gray-400 mt-1">© 2026 RSUD Dr. Soetomo</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
