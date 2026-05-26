import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";

export default function ChatRoomScreen() {
  return (
    <View className="flex-1 bg-white pt-14">
      {/* HEADER */}
      <View className="px-5 flex-row items-center justify-between pb-4 border-b border-gray-100">
        <View className="flex-row items-center">
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color="#111827" />
          </TouchableOpacity>

          <Image
            source={{
              uri: "https://i.pravatar.cc/150?img=12",
            }}
            className="w-12 h-12 rounded-full ml-2"
          />

          <View className="ml-3">
            <Text className="font-bold text-gray-800">
              dr. Andi Nugroho, Sp.B
            </Text>

            <Text className="text-green-600 text-xs mt-1">Online</Text>
          </View>
        </View>

        <View className="flex-row">
          <TouchableOpacity className="mr-4">
            <Ionicons name="call-outline" size={22} color="#374151" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="videocam-outline" size={22} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>

      {/* CHAT */}
      <ScrollView
        className="flex-1 px-5 pt-5"
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center mb-6">
          <View className="bg-gray-100 px-4 py-2 rounded-full">
            <Text className="text-gray-500 text-xs">Hari ini</Text>
          </View>
        </View>

        {/* LEFT */}
        <View className="bg-[#f5f5f5] self-start rounded-3xl rounded-tl-md px-4 py-3 max-w-[80%] mb-4">
          <Text className="text-gray-800">
            Selamat pagi dok, mohon izin lapor
          </Text>

          <Text className="text-gray-400 text-[10px] mt-2 text-right">
            09:31
          </Text>
        </View>

        {/* LEFT */}
        <View className="bg-[#f5f5f5] self-start rounded-3xl rounded-tl-md px-4 py-3 max-w-[80%] mb-4">
          <Text className="text-gray-800 leading-6">
            Pasien Tn. S kamar 304 hasil EKG menunjukkan ST elevasi di lead II,
            III, aVF
          </Text>

          <Text className="text-gray-400 text-[10px] mt-2 text-right">
            09:31
          </Text>
        </View>

        {/* IMAGE */}
        <View className="self-start mb-5">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=400",
            }}
            className="w-52 h-52 rounded-3xl"
          />

          <Text className="text-gray-400 text-[10px] mt-2">09:32</Text>
        </View>

        {/* RIGHT */}
        <View className="bg-green-600 self-end rounded-3xl rounded-br-md px-4 py-3 max-w-[80%] mb-5">
          <Text className="text-white leading-6">
            Terima kasih dr. Andi, segera saya cek. Tolong siapkan untuk
            transfer ke ICU dan loading aspirin 320mg + clopidogrel 300mg.
          </Text>

          <Text className="text-green-100 text-[10px] mt-2 text-right">
            09:34 ✓✓
          </Text>
        </View>
      </ScrollView>

      {/* INPUT */}
      <View className="px-5 py-4 border-t border-gray-100 flex-row items-center">
        <TouchableOpacity>
          <Feather name="paperclip" size={22} color="#6b7280" />
        </TouchableOpacity>

        <View className="flex-1 bg-[#f5f5f5] rounded-full px-4 mx-3">
          <TextInput placeholder="Ketik pesan..." className="py-3" />
        </View>

        <TouchableOpacity className="bg-green-500 w-12 h-12 rounded-full items-center justify-center">
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
