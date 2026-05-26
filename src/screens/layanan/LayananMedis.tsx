import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const medis = ["Poli Umum", "Poli Bedah", "Rawat Inap", "IGD", "Laboratorium"];

export default function LayananMedisScreen() {
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View className="bg-green-600 px-5 pt-16 pb-20 rounded-b-[35px]">
          {/* BACK BUTTON */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            className="w-12 h-12 rounded-2xl bg-white/20 items-center justify-center"
          >
            <Ionicons name="arrow-back" size={22} color="white" />
          </TouchableOpacity>

          {/* TITLE */}
          <Text className="text-white text-3xl font-extrabold mt-8">
            Layanan Medis
          </Text>

          <Text className="text-blue-100 mt-2 text-base leading-6">
            Pilih layanan medis yang tersedia
          </Text>
        </View>
        {/* BG LOGO */}
        <Image
          source={require("../../assets/logo/rsds_white.png")}
          className="absolute -right-10 top-10 w-64 h-64 opacity-10"
          resizeMode="contain"
        />

        {/* CONTENT CARD */}
        <View className="flex-1 bg-white -mt-12 rounded-t-[35px] px-5 pt-6">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 30 }}
          >
            {medis.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                className="bg-green-50 rounded-3xl p-5 mb-4 flex-row items-center border border-green-100"
              >
                <View className="w-14 h-14 rounded-2xl bg-green-100 items-center justify-center">
                  <Ionicons name="medkit" size={26} color="#16a34a" />
                </View>

                <Text className="text-base font-bold text-gray-800 ml-4 flex-1">
                  {item}
                </Text>

                <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
