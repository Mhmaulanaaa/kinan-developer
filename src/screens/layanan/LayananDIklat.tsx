import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const diklat = [
  {
    title: "Pelatihan ICU",
    desc: "Pelatihan penanganan pasien intensif",
    icon: "medkit",
    color: "#16a34a",
  },
  {
    title: "Workshop Bedah",
    desc: "Peningkatan keterampilan tindakan bedah",
    icon: "fitness",
    color: "#ef4444",
  },
  {
    title: "Seminar Nasional",
    desc: "Seminar kesehatan dan pelayanan rumah sakit",
    icon: "people",
    color: "#3b82f6",
  },
  {
    title: "E-Learning",
    desc: "Belajar mandiri secara online",
    icon: "laptop",
    color: "#f59e0b",
  },
];
export default function LayananDiklatScreen() {
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
            Layanan Diklat
          </Text>

          <Text className="text-blue-100 mt-2 text-base leading-6">
            Pilih layanan Diklat yang tersedia
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
          <View className="bg-green-50 rounded-3xl p-5 mb-5">
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-2xl bg-green-100 items-center justify-center">
                <Ionicons name="school" size={24} color="#16a34a" />
              </View>

              <View className="ml-3 flex-1">
                <Text className="font-bold text-gray-800">
                  Program Pengembangan SDM
                </Text>

                <Text className="text-gray-500 text-sm mt-1">
                  Ikuti pelatihan dan seminar untuk meningkatkan kompetensi.
                </Text>
              </View>
            </View>
          </View>
          <ScrollView>
            <View className="flex-row flex-wrap justify-between">
              {diklat.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  className="w-[48%] bg-green-50 rounded-3xl p-5 mb-4"
                >
                  <View
                    style={{
                      backgroundColor: `${item.color}20`,
                    }}
                    className="w-14 h-14 rounded-2xl items-center justify-center"
                  >
                    <Ionicons
                      name={item.icon as any}
                      size={26}
                      color={item.color}
                    />
                  </View>

                  <Text className="font-bold text-gray-800 mt-3">
                    {item.title}
                  </Text>

                  <Text className="text-gray-500 text-xs mt-1">
                    {item.desc}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
