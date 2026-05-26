import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";

import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function HelpScreen() {
  const navigation = useNavigation<any>();

  const openWhatsApp = () => {
    Linking.openURL("https://wa.me/628628729290");
  };

  const openEmail = () => {
    Linking.openURL("mailto:support@rsud-soetomo.co.id");
  };

  return (
    <View className="flex-1 bg-[#f4f7fb]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View className="bg-green-600 pt-10 pb-12 px-6 rounded-b-[30px]">
          {/* BACK */}
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
          <View className="mt-8">
            <Text className="text-white text-3xl font-extrabold">Bantuan</Text>

            <Text className="text-green-100 mt-2 leading-6">
              Pusat bantuan dan dukungan aplikasi KINAN
            </Text>
          </View>
        </View>

        {/* CONTENT */}
        <View className="px-5 mt-6">
          {/* FAQ */}
          <View className="bg-white rounded-[28px] p-6 shadow-sm">
            <Text className="text-gray-800 text-xl font-bold mb-5">
              Pertanyaan Umum
            </Text>

            {/* FAQ ITEM */}
            <View className="mb-5">
              <Text className="text-gray-800 font-bold">
                Bagaimana cara mengubah status?
              </Text>

              <Text className="text-gray-500 leading-6 mt-2">
                Masuk ke menu profil kemudian pilih menu Ubah Status untuk
                memperbarui status kerja Anda.
              </Text>
            </View>

            <View className="border-t border-gray-100 pt-5 mb-5">
              <Text className="text-gray-800 font-bold">
                Kenapa notifikasi tidak muncul?
              </Text>

              <Text className="text-gray-500 leading-6 mt-2">
                Pastikan izin notifikasi aplikasi sudah aktif pada pengaturan
                perangkat Anda.
              </Text>
            </View>

            <View className="border-t border-gray-100 pt-5">
              <Text className="text-gray-800 font-bold">
                Bagaimana menghubungi admin?
              </Text>

              <Text className="text-gray-500 leading-6 mt-2">
                Anda dapat menghubungi admin melalui WhatsApp atau email support
                resmi rumah sakit.
              </Text>
            </View>
          </View>

          {/* CONTACT */}
          <View className="bg-white rounded-[28px] p-6 shadow-sm mt-5">
            <Text className="text-gray-800 text-xl font-bold mb-5">
              Hubungi Kami
            </Text>

            {/* WA */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={openWhatsApp}
              className="flex-row items-center bg-green-50 rounded-3xl p-4 mb-4"
            >
              <View className="w-14 h-14 rounded-2xl bg-green-100 items-center justify-center">
                <FontAwesome5 name="whatsapp" size={24} color="#16a34a" />
              </View>

              <View className="ml-4 flex-1">
                <Text className="font-bold text-gray-800">
                  WhatsApp Support
                </Text>

                <Text className="text-gray-500 mt-1">+62 812-3456-7890</Text>
              </View>

              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>

            {/* EMAIL */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={openEmail}
              className="flex-row items-center bg-blue-50 rounded-3xl p-4"
            >
              <View className="w-14 h-14 rounded-2xl bg-blue-100 items-center justify-center">
                <MaterialIcons name="email" size={24} color="#2563eb" />
              </View>

              <View className="ml-4 flex-1">
                <Text className="font-bold text-gray-800">Email Support</Text>

                <Text className="text-gray-500 mt-1">
                  support@rsud-soetomo.co.id
                </Text>
              </View>

              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>

          {/* VERSION */}
          <View className="items-center mt-8 mb-10">
            <Text className="text-gray-400">KINAN APP v1.0.0</Text>

            <Text className="text-gray-400 mt-1">RSUD Dr. Soetomo</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
