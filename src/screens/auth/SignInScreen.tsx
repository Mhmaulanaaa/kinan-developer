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
import { loginSuccessToast as loginSuccessToastConfig } from "../../utils/toastConfig";

export default function SignInScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.replace("Main");
  };

  return (
    <View className="flex-1 bg-[#f4f8f7]">
      <StatusBar barStyle="default" />

      {/* TOP HEADER */}
      <View className="h-[280px] bg-green-600 rounded-b-[20px] items-center justify-center px-6">
        <Image source={LoginImage} className="w-24 h-24" />

        <Text className="text-white text-[34px] font-extrabold mt-4">
          KINAN
        </Text>

        <Text className="text-green-100 text-center mt-2 text-base">
          Kanal Informasi dan Layanan
        </Text>
      </View>

      {/* CARD */}
      <View className="flex-1 -mt-10 px-6">
        <View className="bg-white rounded-[32px] p-7 shadow-lg">
          <Text className="text-3xl font-bold text-gray-800 mb-2">
            Selamat Datang 👋
          </Text>

          <Text className="text-gray-500 mb-8">
            Silahkan login untuk melanjutkan
          </Text>

          {/* EMAIL */}
          <View className="mb-5">
            <Text className="text-gray-700 mb-2 font-semibold">Email</Text>

            <TextInput
              placeholder="Masukkan email"
              value={email}
              onChangeText={setEmail}
              className="bg-gray-100 rounded-2xl px-5 py-4 text-gray-800"
              placeholderTextColor="#9ca3af"
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
              placeholderTextColor="#9ca3af"
            />
          </View>

          {/* BUTTON LOGIN */}
          <TouchableOpacity
            className="bg-green-600 py-4 rounded-2xl shadow-sm"
            onPress={() => {
              handleLogin();
              loginSuccessToastConfig();
            }}
          >
            <Text className="text-center text-white font-bold text-lg">
              Login
            </Text>
          </TouchableOpacity>

          {/* REGISTER */}
          <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500">Belum punya akun?</Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text className="text-green-700 font-bold ml-2">Daftar</Text>
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
