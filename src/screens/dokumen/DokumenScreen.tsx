import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const dokumen = [
  {
    title: "SOP Pelayanan",
    file: "PDF",
  },
  {
    title: "Panduan ICU",
    file: "DOCX",
  },
];

export default function DokumenScreen() {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* HEADER */}
        <View className="bg-green-600 px-5 pt-16 pb-10 rounded-b-[35px] overflow-hidden">
          {/* BG LOGO */}
          <Image
            source={require("../../assets/logo/rsds_white.png")}
            className="absolute -right-10 top-10 w-64 h-64 opacity-10"
            resizeMode="contain"
          />

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
            Dokumen
          </Text>

          <Text className="text-green-100 mt-2 text-base leading-6">
            Pilih dokumen yang tersedia
          </Text>
        </View>

        {/* CONTENT */}
        <View className="px-5 mt-6">
          {dokumen.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.85}
              className="bg-white rounded-3xl p-5 mb-4 border border-gray-100 shadow-sm"
              style={{
                elevation: 3,
              }}
            >
              <View className="flex-row items-center">
                {/* ICON */}
                <View className="w-14 h-14 rounded-2xl bg-green-100 items-center justify-center mr-4">
                  <Ionicons name="document-text" size={28} color="#16a34a" />
                </View>

                {/* TEXT */}
                <View className="flex-1">
                  <Text className="text-base font-bold text-gray-800 leading-6">
                    {item.title}
                  </Text>

                  <Text className="text-gray-500 text-sm mt-1">
                    {item.file}
                  </Text>

                  <View className="mt-3 flex-row items-center">
                    <View className="bg-green-100 px-3 py-1 rounded-full">
                      <Text className="text-green-600 text-xs font-semibold">
                        PDF Document
                      </Text>
                    </View>
                  </View>
                </View>

                {/* ACTION */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  className="w-12 h-12 rounded-2xl bg-green-500 items-center justify-center"
                >
                  <Ionicons name="download-outline" size={22} color="white" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
