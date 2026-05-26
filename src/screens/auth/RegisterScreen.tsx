import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

import LoginImage from "../../assets/logo/KINAN.png";

export default function RegisterScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    navigation.replace("Main");
  };

  return (
    <View className="flex-1 bg-[#f4f8f7]">
      <StatusBar barStyle="default" />

      {/* HEADER */}
      <View className="h-[280px] bg-green-600 rounded-b-[20px] items-center justify-center px-6">
        <Image source={LoginImage} className="w-24 h-24" />

        <Text className="text-white text-[34px] font-extrabold mt-4">
          KINAN
        </Text>

        <Text className="text-green-100 text-center mt-2 text-base">
          Buat akun baru untuk melanjutkan
        </Text>
      </View>

      {/* FORM CARD */}
      <View className="flex-1 -mt-10 px-6">
        <View className="bg-white rounded-[32px] p-7 shadow-lg">
          <Text className="text-3xl font-bold text-gray-800 mb-2">
            Register ✨
          </Text>

          <Text className="text-gray-500 mb-8">
            Lengkapi data untuk membuat akun
          </Text>

          {/* NAMA */}
          <View className="mb-5">
            <Text className="text-gray-700 mb-2 font-semibold">
              Nama Lengkap
            </Text>

            <TextInput
              placeholder="Masukkan nama lengkap"
              value={name}
              onChangeText={setName}
              className="bg-gray-100 rounded-2xl px-5 py-4 text-gray-800"
            />
          </View>

          {/* EMAIL */}
          <View className="mb-5">
            <Text className="text-gray-700 mb-2 font-semibold">Email</Text>

            <TextInput
              placeholder="Masukkan email"
              value={email}
              onChangeText={setEmail}
              className="bg-gray-100 rounded-2xl px-5 py-4 text-gray-800"
            />
          </View>

          {/* PASSWORD */}
          <View className="mb-6">
            <Text className="text-gray-700 mb-2 font-semibold">Password</Text>

            <TextInput
              placeholder="Masukkan password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              className="bg-gray-100 rounded-2xl px-5 py-4 text-gray-800"
            />
          </View>

          {/* BUTTON */}
          <TouchableOpacity
            className="bg-green-600 py-4 rounded-2xl"
            onPress={handleRegister}
          >
            <Text className="text-center text-white font-bold text-lg">
              Daftar Sekarang
            </Text>
          </TouchableOpacity>

          {/* LOGIN */}
          <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500">Sudah punya akun?</Text>

            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text className="text-green-700 font-bold ml-2">Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text className="text-center text-gray-400 mt-8">
          © 2026 RSUD Dr. Soetomo
        </Text>
      </View>
    </View>
  );
}
