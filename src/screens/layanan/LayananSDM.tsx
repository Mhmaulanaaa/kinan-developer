import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const sdm = [
  {
    title: "Absensi Pegawai",
    desc: "Kelola kehadiran pegawai harian",
    icon: "calendar",
    color: "#22c55e",
  },
  {
    title: "Data Karyawan",
    desc: "Lihat data pegawai aktif",
    icon: "people",
    color: "#3b82f6",
  },
  {
    title: "Cuti Online",
    desc: "Ajukan dan pantau cuti",
    icon: "airplane",
    color: "#f97316",
  },
  {
    title: "Penilaian Kinerja",
    desc: "Evaluasi kinerja pegawai",
    icon: "bar-chart",
    color: "#8b5cf6",
  },
];

export default function LayananSDMScreen() {
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View className="bg-green-600 px-5 pt-16 pb-24 rounded-b-[35px]">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            className="w-12 h-12 rounded-2xl bg-white/20 items-center justify-center"
          >
            <Ionicons name="arrow-back" size={22} color="white" />
          </TouchableOpacity>

          <Text className="text-white text-3xl font-extrabold mt-8">
            Layanan SDM
          </Text>

          <Text className="text-green-100 mt-2 text-base">
            Kelola seluruh kebutuhan pegawai secara digital
          </Text>

          <Image
            source={require("../../assets/logo/rsds_white.png")}
            className="absolute right-0 top-6 w-56 h-56 opacity-10"
            resizeMode="contain"
          />
        </View>

        {/* CONTENT */}
        <View className="bg-white -mt-12 rounded-t-[35px] px-5 pt-6">
          {/* QUICK STATS */}
          <View className="flex-row justify-between mb-6">
            <View className="bg-green-50 flex-1 mr-2 p-4 rounded-3xl">
              <Ionicons name="people" size={24} color="#16a34a" />
              <Text className="text-2xl font-bold text-gray-800 mt-2">
                1.245
              </Text>
              <Text className="text-gray-500 text-sm">Total Pegawai</Text>
            </View>

            <View className="bg-orange-50 flex-1 ml-2 p-4 rounded-3xl">
              <Ionicons name="airplane" size={24} color="#f97316" />
              <Text className="text-2xl font-bold text-gray-800 mt-2">18</Text>
              <Text className="text-gray-500 text-sm">Cuti Aktif</Text>
            </View>
          </View>

          {/* SEARCH */}
          <View className="bg-gray-100 rounded-2xl px-4 py-3 flex-row items-center mb-5">
            <Ionicons name="search" size={20} color="#6b7280" />
            <TextInput
              placeholder="Cari layanan SDM..."
              className="flex-1 ml-2"
            />
          </View>

          {/* INFO CARD */}
          <View className="bg-green-100 rounded-3xl p-4 mb-5 flex-row">
            <View className="mr-3">
              <Ionicons name="notifications" size={24} color="#16a34a" />
            </View>

            <View className="flex-1">
              <Text className="font-bold text-gray-800">Informasi SDM</Text>

              <Text className="text-gray-600 mt-1 text-sm">
                Batas pengajuan cuti bulan ini hingga tanggal 25.
              </Text>
            </View>
          </View>

          {/* MENU */}
          {sdm.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.85}
              className="bg-white border border-gray-100 rounded-3xl p-4 mb-4 flex-row items-center shadow-sm"
            >
              <View
                style={{ backgroundColor: `${item.color}20` }}
                className="w-16 h-16 rounded-2xl items-center justify-center"
              >
                <Ionicons
                  name={item.icon as any}
                  size={28}
                  color={item.color}
                />
              </View>

              <View className="flex-1 ml-4">
                <Text className="font-bold text-gray-800 text-base">
                  {item.title}
                </Text>

                <Text className="text-gray-500 mt-1">{item.desc}</Text>
              </View>

              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
