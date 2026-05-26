import { View, Text, TouchableOpacity, Image } from "react-native";
import LoginImage from "../../assets/logo/KINAN.png";

export default function LandingScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-[#f5f7f7] px-7 justify-center">
      <View className="p-8">
        {/* LOGO */}
        <View className="items-center mt-5">
          <Image source={LoginImage} className="w-32 h-32" />

          <Text className="text-[42px] font-extrabold text-green-700 mt-6">
            KINAN
          </Text>

          <Text className="text-gray-700 text-center text-base mt-2 font-semibold">
            Kanal Informasi dan Layanan
          </Text>

          <Text className="text-gray-500 text-center mt-1">
            RSUD Dr. Soetomo
          </Text>

          <Text className="text-gray-400 text-center mt-8 leading-6">
            Satu platform untuk komunikasi,
            {"\n"}
            informasi, dan layanan terintegrasi
            {"\n"}
            seluruh tim medis.
          </Text>
        </View>

        {/* BUTTON MASUK */}
        <TouchableOpacity
          className="bg-green-600 py-4 rounded-2xl mt-10"
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text className="text-white text-center font-bold text-lg">
            Masuk
          </Text>
        </TouchableOpacity>

        {/* BUTTON REGISTER */}
        <TouchableOpacity
          className="border border-green-600 py-4 rounded-2xl mt-4"
          onPress={() => navigation.navigate("Register")}
        >
          <Text className="text-green-700 text-center font-semibold text-lg">
            Daftar Akun
          </Text>
        </TouchableOpacity>

        <Text className="text-center text-gray-400 mt-10">
          © 2026 RSUD Dr. Soetomo
        </Text>
      </View>
    </View>
  );
}
