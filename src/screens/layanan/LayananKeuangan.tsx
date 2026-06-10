import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const keuangan = [
  {
    title: "Pengajuan Dana",
    desc: "Ajukan kebutuhan dana operasional",
    icon: "wallet",
    color: "#10b981",
  },
  {
    title: "Laporan Keuangan",
    desc: "Lihat laporan transaksi dan anggaran",
    icon: "document-text",
    color: "#3b82f6",
  },
  {
    title: "Tagihan Pasien",
    desc: "Informasi tagihan dan pembayaran pasien",
    icon: "receipt",
    color: "#f59e0b",
  },
  {
    title: "Verifikasi Pembayaran",
    desc: "Konfirmasi dan validasi pembayaran",
    icon: "checkmark-done",
    color: "#8b5cf6",
  },
];

export default function LayananKeuanganScreen() {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-1 bg-white">
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
            Layanan Keuangan
          </Text>

          <Text className="text-blue-100 mt-2 text-base leading-6">
            Pilih layanan Keuangan yang tersedia
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
          <View className="bg-emerald-50 rounded-3xl p-4 mb-5 flex-row">
            <Ionicons name="information-circle" size={24} color="#059669" />

            <View className="ml-3 flex-1">
              <Text className="font-bold text-gray-800">
                Informasi Keuangan
              </Text>

              <Text className="text-gray-600 text-sm mt-1">
                Kelola pengajuan dana, tagihan, dan verifikasi pembayaran dengan
                mudah.
              </Text>
            </View>
          </View>
          <ScrollView>
            {keuangan.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.85}
                className="bg-white border border-gray-100 rounded-3xl p-4 mb-4 flex-row items-center"
              >
                <View
                  style={{ backgroundColor: `${item.color}20` }}
                  className="w-14 h-14 rounded-2xl items-center justify-center"
                >
                  <Ionicons
                    name={item.icon as any}
                    size={26}
                    color={item.color}
                  />
                </View>

                <View className="flex-1 ml-4">
                  <Text className="font-bold text-gray-800 text-base">
                    {item.title}
                  </Text>

                  <Text className="text-gray-500 text-sm mt-1">
                    {item.desc}
                  </Text>
                </View>

                <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
